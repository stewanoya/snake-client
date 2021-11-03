const connect = require("./client.js");

connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = () => {
  process.stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
  });
};

setupInput();
