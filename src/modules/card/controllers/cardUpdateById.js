import Card from '../cardModel';

export default async function cardUpdateById(req, res) {
  const id = req.params.cardId;

  Card.update({ _id: id }, { $set: req.body })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Card updated');
      } else {
        res.status(400).json('Card not found');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
