const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const userRoutes = require('./routes/user')
const challengeRoutes = require('./routes/challenge')
const postRoutes = require('./routes/post')

const PORT = process.env.PORT || 8080;

app.use('/check', (_req, res) => {
  res.json("App is running well!!");
});

app.use('/api/v1', [userRoutes, challengeRoutes, postRoutes] )


app.listen(PORT, () => {
  console.log(`Server is currently running at port ${PORT}, thanks ^_^`);
});

