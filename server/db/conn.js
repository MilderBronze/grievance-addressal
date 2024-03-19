const mongoose = require("mongoose");

//mongodb://localhost:27017/userdata

mongoose
  .connect(
    "mongodb+srv://milderbronze:whothehellwasthat@cluster0.zqaaeuj.mongodb.net/collegeGrievanceAddressal",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database Connected ");
  })
  .catch((err) => {
    console.log("db not connected", err);
  });
