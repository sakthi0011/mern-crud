import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    city: String,
    course: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
