// module imports
var mongoose = require("mongoose");

// schem setup
const Schema = mongoose.Schema;

// schema
const bookSchema = new Schema({
  name: String,
  author: String,
  description: String,
  image: String,
  price: Number,
  avilable: Boolean,
});

// export schema
module.exports = mongoose.model("Book", bookSchema);
