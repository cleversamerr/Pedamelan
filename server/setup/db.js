const config = require("../config.json");
const mongoose = require("mongoose");

module.exports = () => {
  const mongoURI = process.env["MONGODB_URI"] || config.development.mongoURI;
  mongoose
    .connect(mongoURI)
    .then((value) => {
      console.log(`Connected to MongoDB Server: ${mongoURI}`);
    })
    .catch((err) => {
      console.log(`Failed to connect to MongoDB: ${err.message}`);
    });
};
