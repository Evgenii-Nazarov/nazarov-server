import Transaction from '../transactionModel';
import { get } from 'lodash';

export default async function transactionGetById(req, res) {
  const transactionId = get(req, 'params.transactionId');

  Transaction.find({ _id: transactionId })
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc[0]);
      } else {
        res.status(400).json('Get transaction error');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
