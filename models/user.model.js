import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    registerNumber: {
      type: String,
      required: true,
      unique: true,
    },
    sisiId: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      enum: ["doctor", "nurse", "client"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
