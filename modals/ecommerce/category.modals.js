import mongoose from "mpngoose"
const categrySchema = new mongoose.schema({
  name: {
    type: String,
    required: true,
  },
},{timestamps: true})

export const Category = mongoose.model("Category",categrySchema)
