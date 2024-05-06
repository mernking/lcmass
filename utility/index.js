const mongoose = require("mongoose");

const connection = await mongoose.connect("mongodb://localhost:27017/lcmass", {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useNewUrlParser: true,
});

export default connection;
