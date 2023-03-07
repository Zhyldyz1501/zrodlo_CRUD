const intialDbConnection = async () => {
  try {
    await mongoose.connect(mySecret, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { intialDbConnection };

// import mongoose from 'mongoose';

// const connectDB = (url) => {
//     mongoose.set('strictQuery', true);

//     mongoose
//         .connect(url)
//         .then(() => console.log("MongoDB connected"))
//         .catch((error) => console.log(error));
// }
// export default connectDB
