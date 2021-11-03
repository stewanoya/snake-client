const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
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
