require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const Post = require("./src/resources/posts/model");

//Vars
const app = express();
const port = process.env.PORT || 6000;
const db_url = process.env.db_url;

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Routes
require("./src/routes")(app);
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Error not found",
  });
});
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

mongoose.connect(db_url).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
