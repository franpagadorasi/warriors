import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const astroBin = fileURLToPath(new URL("../node_modules/astro/bin/astro.mjs", import.meta.url));
const args = process.argv.slice(2);

const child = spawn(process.execPath, [astroBin, ...args], {
  stdio: "inherit",
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: "1",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
