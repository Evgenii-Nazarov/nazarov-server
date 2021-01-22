import Transaction from '../transactionModel';
import { get } from 'lodash';

export default async function transactionUpdateById(req, res) {
  const transactionId = get(req, 'params.transactionId');

  Transaction.update({ _id: transactionId }, { $set: req.body })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Transaction updated');
      } else {
        res.status(400).json('Transaction not found');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
