const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://sumon0002001:qHgl4X7erh4GSGtq@sumon.oquctql.mongodb.net/todomern"
      )
      .then(() => {
        console.log("database is connected");
      });
  } catch (error) {
    res.status(404)
  }
};
conn();
