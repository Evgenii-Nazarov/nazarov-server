import Card from '../cardModel';

const cardGetById = (req, res) => {
  const id = req.params.cardId;
  Card.findById(id)
    .select('-__v')
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json('No card for provided id');
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

export default cardGetById;
