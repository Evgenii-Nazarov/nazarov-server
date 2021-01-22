import mongoose from 'mongoose';
import Transaction from '../transactionModel';
import { get } from 'lodash';


export default async function transactionCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const name = get(req, 'body.name');
  const transactionType = get(req, 'body.transactionType');
  const transactionTypeId = get(req, 'body.transactionTypeId');
  const value = get(req, 'body.value');
  const owner = get(req, 'body.owner');
  const transactionDate = get(req, 'body.transactionDate', Date.now());

  const transaction = new Transaction({
    _id,
    name,
    transactionType,
    transactionTypeId,
    value,
    owner,
    transactionDate
  });

  transaction
    .save()
    .then(() => {
      res.status(201).json('Transaction created');
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
