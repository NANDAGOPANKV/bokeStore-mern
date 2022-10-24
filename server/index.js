// module import
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

// routers
const router = require("./routes/book-route");

// module config
const app = express();

//env
const DB = process.env.MONGODB;

// port
const port = process.env.PORT || 8003;

// middleware
app.use(express.json());
app.use(cors());
app.use("/books", router);

// db connection
mongoose
  .connect(DB)
  .then(() => {
    app.listen(port);
  })
  .then(() => {
    console.log(`db connected & server started at port ${port}`);
  })
  .catch((err) => {
    console.log(err.message);
  });
