const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "Mohammed!" });
});

app.listen(8000, () => {
  console.log("Hello this is my first server :)");
});
