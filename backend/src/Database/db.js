const {connect}= require('mongoose');

const connectDB = async (url) => {
  try {
    await connect(url);
    console.log("Connected to the database");
  } catch (err) {
    console.log("Error connecting to the database",err);
  }
};

module.exports = connectDB;
