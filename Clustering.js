const config = require("./package.json");
const cluster = require("cluster");
const os = require("os");
const { start } = require("./main.js");

if (cluster.isWorker) {
  console.debug("Listening on port", config.Port);
} else {
  os.cpus().forEach(() => cluster.fork());
}
