import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import useRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});

app.use("/api/user", useRoutes);
