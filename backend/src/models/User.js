import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

export default User;
