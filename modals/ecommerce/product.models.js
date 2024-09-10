import mongoose from "mongoose"

const productSchema = new mongoose.schema({
  description: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String,
  },
  productImage: {
    type: String,

  },
  price: {
    type: Number,
    default: 0
  },
  stock: {
    default: 0,
    type: Number
  },
  cotegory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cetegory",
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},{timestamps: true})

export const Product = mongoose.model("Product",productSchema)