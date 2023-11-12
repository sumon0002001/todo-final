const express = require("express");
const bodyparser = require("body-parser");
const app = express();
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1", auth);
app.use("/api/v1", list);

app.listen(4000, () => console.log("server is running"));
