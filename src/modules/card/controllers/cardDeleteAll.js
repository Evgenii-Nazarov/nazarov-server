import Card from '../cardModel';

const cardDeleteAll = (req, res) => {
  Card.deleteMany({ })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('All cards were deleted');
      } else {
        res.status(400).json('Card not found');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

export default cardDeleteAll;
