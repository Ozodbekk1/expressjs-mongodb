/** @format */
import { Schema, model } from "mongoose";

const userScheme = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const userModel = model("User", userScheme);
export default userModel;
