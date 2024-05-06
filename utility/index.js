const mongoose = require("mongoose");

const connection = await mongoose.connect("mongodb://localhost:27017/lcmass", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export default connection;
