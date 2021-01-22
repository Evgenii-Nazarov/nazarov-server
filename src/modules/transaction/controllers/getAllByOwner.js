import Transaction from '../transactionModel';
import { get } from 'lodash';

export default async function transactionGetAllByOwner(req, res) {
  const ownerId = get(req, 'params.ownerId');

  Transaction.find({ owner: ownerId })
    .exec()
    .then(docs => {
      if (docs) {
        res.status(200).json(docs);
      } else {
        res.status(400).json('Get transaction by owner error');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
