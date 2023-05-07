const express = require("express");
const cors = require("cors");
const app = express();

const isProd = process.env.NODE_ENV === "prod";

const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    msg: "hello world",
  });
});

app.listen(PORT, () => console.log(`server runned on port: ${PORT}`));

// var fs = require("fs");
// var http = require("http");
// var https = require("https");
// var privateKey = fs.readFileSync("ssl/localhost.key", "utf8");
// var certificate = fs.readFileSync("ssl/localhost.crt", "utf8");

// var credentials = { key: privateKey, cert: certificate };
// var express = require("express");
// var app = express();

// // your express configuration here
// app.get("/", (req, res) => {
//   return res.json({
//     msg: "hello world",
//   });
// });

// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(80);
// httpsServer.listen(443);
