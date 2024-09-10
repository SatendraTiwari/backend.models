import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    oredrPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemsSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING","CANCELLED","DELIVERED"],
      default: "PENDING"
    }

  },
  { timestameps: true }
);

export const Oredr = mongoose.model('Order', orderSchema);
