import mongoose from 'mongoose';
import { listRoles } from '../permission/roles';

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },

    password: {
      type: String,
      select: false,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      match: /^[A-Za-z\-']{1,20}$/,
      default: '',
    },

    lastName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      match: /^[A-Za-z\-']{1,20}$/,
      default: '',
    },

    roles: [
      {
        type: String,
        required: false,
        enum: listRoles,
      },
    ],
  },
  { timestamps: {}, versionKey: false },
);

export default mongoose.model('User', userSchema);
