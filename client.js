const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", (msg) => {
    console.log("Connected to game server!");
    conn.write("Name: STU");
  });

  return conn;
};

console.log("Connecting...");

module.exports = connect;
