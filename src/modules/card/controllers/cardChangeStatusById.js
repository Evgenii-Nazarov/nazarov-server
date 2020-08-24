import Card from '../cardModel';

export default async function cardChangeStatusById(req, res) {
  const id = req.params.cardId;

  Card.update({ _id: id }, { $set: { status: req.body.status } })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Card status updated');
      } else {
        res.status(400).json('Card not found');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
