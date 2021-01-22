import mongoose from 'mongoose';

const transactionTypeList = [
  {
    _id: '29f87e791ca64501afb4b57c6993c1df',
    name: 'Food',
    type: 'expense',
    parent: true,
  },
  {
    _id: '71752abbcab944e5b09ee5c650d30bcc',
    name: 'Lunch',
    type: 'expense',
    parent:false,
    parentId:'29f87e791ca64501afb4b57c6993c1df',
  },
  {
    _id: 'a5d68d64b9eb490b99d5de2ec97b5e97',
    name: 'Diner',
    type: 'expense',
    parent:false,
    parentId:'29f87e791ca64501afb4b57c6993c1df',
  },

  {
    _id: 'ff0cf2f3a78d40a7ae51ff6b560a9f37',
    name: 'Household',
    type: 'expense',
    parent: true,
  },
  {
    _id: '9678b561c2aa4536b7ea7379004d71f2',
    name: 'Appliances',
    type: 'expense',
    parent:false,
    parentId:'ff0cf2f3a78d40a7ae51ff6b560a9f37',
  },
];

const types = ['income', 'expense']

const Schema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    name: {
      type: String,
      required: false,
    },

    transactionType: {
      enum: types,
      type: String,
      required: true,
    },

    transactionTypeId: {
      type: String,
      required: true,
    },

    value: {
      type: Number,
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    transactionDate: {
      type: Date,
      required: true,
    }
  },
  { timestamps: {}, versionKey: false },
);

export default mongoose.model('Transaction', Schema);
