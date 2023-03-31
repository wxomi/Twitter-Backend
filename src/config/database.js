const mongoose = require("mongoose");
const { MONGODB_URI } = require("./serverConfig");

const connect = async () => {
  await mongoose.connect(MONGODB_URI);
};

module.exports = connect;
