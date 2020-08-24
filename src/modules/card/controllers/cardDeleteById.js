import Card from '../cardModel';

const cardDeleteById = (req, res) => {
  const id = req.params.cardId;
  Card.remove({ _id: id })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Card deleted');
      } else {
        res.status(400).json('Card not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default cardDeleteById;
