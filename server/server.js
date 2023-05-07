const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    msg: "hello world",
  });
});

app.listen(4500);
