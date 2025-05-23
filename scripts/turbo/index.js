// Build script to handle Turborepo build execution
const { spawnProcess } = require("../utils/spawn-process");
const path = require("node:path");

const runTurbo = async (task, args, { apiSecret, apiEndpoint, apiSignatureKey } = {}) => {
  const devConfig = (() => {
    try {
      return require("../../turbo.dev.json");
    } catch (e) {
      return {};
    }
  })();
  const execArguments = [
    "turbo",
    "run",
    task,
    `--concurrency=${devConfig.concurrency ?? "100%"}`,
    `--output-logs=${devConfig.outputLogs ?? "errors-only"}`,
  ];

  const cacheReadWriteKey = process.env.AWS_JSV3_TURBO_CACHE_BUILD_TYPE ?? "dev";

  const cacheReadWrite = {
    // Release is remote write-only.
    // Every release has unique artifacts and should not read from the cache.
    RELEASE: "--cache=local:,remote:w",
    // preview is remote read/write
    PREVIEW: "--cache=local:,remote:rw",
    // dev is local read/write and remote read-only
    dev: "--cache=local:rw,remote:r",
  };

  execArguments.push(cacheReadWrite[cacheReadWriteKey]);
  execArguments.push(...args);

  const turboRoot = path.join(__dirname, "..", "..");

  const turboEnv = {
    ...process.env,
    TURBO_TELEMETRY_DISABLED: "1",
    ...(apiSecret &&
      apiEndpoint &&
      apiSignatureKey && {
        TURBO_API: apiEndpoint,
        TURBO_REMOTE_CACHE_SIGNATURE_KEY: apiSignatureKey,
        TURBO_TOKEN: apiSecret,
        TURBO_TEAM: "aws-sdk-js",
      }),
  };

  try {
    console.log("RUNNING: yarn", execArguments.join(" "));
    return await spawnProcess("yarn", execArguments, {
      stdio: "inherit",
      cwd: turboRoot,
      env: turboEnv,
    });
  } catch (error) {
    console.error("Error running turbo:", error);
    throw error;
  }
};

const main = async () => {
  const apiSecret = process.env.AWS_JSV3_TURBO_CACHE_API_SECRET;
  const apiEndpoint = process.env.AWS_JSV3_TURBO_CACHE_API_ENDPOINT;
  const apiSignatureKey = process.env.AWS_JSV3_TURBO_CACHE_API_SIGNATURE_KEY;

  const args = process.argv.slice(2);

  if (!apiSecret || !apiEndpoint || !apiSignatureKey) {
    await runTurbo(args[0], args.slice(1));
  } else {
    await runTurbo(args[0], args.slice(1), { apiSecret, apiEndpoint, apiSignatureKey });
  }
};

main();
