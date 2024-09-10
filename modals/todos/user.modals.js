import mongoose from 'mongoose';

const userScheme = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true, //[true, "password most be required"]
    },
  },
  { timestamps: true }
);

export const user = mongoose.mode('User', userScheme);
