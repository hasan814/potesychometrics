import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import useRoutes from "./routes/user/user.route.js";
import authRoutes from "./routes/auth/auth.route.js";

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
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});

app.use("/api/user", useRoutes);
app.use("/api/auth", authRoutes);
