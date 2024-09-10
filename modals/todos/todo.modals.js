import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      defaulte: false,
    },
    createdBy: {
      type: mongoose.Schema.types.ObjectId,
      ref: 'User',
    },
    subTodo: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const todo = mongoose.mode('Todo', todoSchema);
