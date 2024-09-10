import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    uniqe: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    uniqe: true,
    lowercase: true,
  },
  password:{
    type:String,
    required: true,
  },
},{timestames: true})

export const User = mongoose.model("User",userSchema)