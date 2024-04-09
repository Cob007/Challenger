const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.use("/check", (_req, res) => {
  res.json("App is running well!!");
});

app.listen(port, () => {
  console.log(`Server is currently running at port ${port}, thanks ^_^`);
});
