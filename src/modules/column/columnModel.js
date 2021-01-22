import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: {}, versionKey: false },
);

export default mongoose.model('Column', todoSchema);
