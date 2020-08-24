import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: {
      type: String,
      required: false,
      default: '',
    },
    priority: {
      type: Number,
      required: false,
      default: 0,
    },
    status: {
      type: String,
      required: false,
      default: 'todo',
    },
  },
  { timestamps: {} },
);

export default mongoose.model('Card', todoSchema);
