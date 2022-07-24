import Card from '../cardModel';

const cardGetAll = (req, res) => {
  Card.find()
    .select('-__v')
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

export default cardGetAll;
