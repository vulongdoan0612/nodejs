const express = require("express");
const app = express();
const port = 3000;

app.get("/tin", (req, res) => {
  res.send("Hello World!dd");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
