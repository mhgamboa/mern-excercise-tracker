const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* Connect to MongoDB via Mongoose */
const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

/* Set Up Server */
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
