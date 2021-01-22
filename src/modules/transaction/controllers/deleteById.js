import Transaction from '../transactionModel';
import { get } from 'lodash';

const transactionDeleteById = (req, res) => {
  const transactionId = get(req, 'params.transactionId');

  Transaction.deleteOne({ _id: transactionId })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Transaction deleted');
      } else {
        res.status(400).json('Transaction not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default transactionDeleteById;
