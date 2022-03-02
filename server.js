/* eslint-disable no-console */
const express = require("express");

const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// import Routes
const routes = require("./routes/routes");

dotenv.config();

// connect to DB
mongoose.connect(process.env.CONNECT_TO_DB, () => console.log("Connected to db!"));

// Middleware
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

// Route Middlewares
app.use("/api", routes);

app.listen(8080, () => {
  console.log("Server up and running ;)");
});
