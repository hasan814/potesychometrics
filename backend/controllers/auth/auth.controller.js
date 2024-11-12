import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../../models/use.model.js";
import jwt from "jsonwebtoken";
import { errorHandler } from "../../utils/error.js";

dotenv.config();

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  )
    next(errorHandler(400, "All fields are required!"));

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      next(errorHandler(400, "User already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "9h" }
    );

    res.status(201).json({ result: newUser, token });
  } catch (error) {
    next(error);
  }
};
