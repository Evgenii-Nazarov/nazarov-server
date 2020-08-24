import Column from '../columnModel';

export default async function columnUpdateById(req, res) {
  const id = req.params.columnId;

  Column.update({ _id: id }, { $set: req.body })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Column updated');
      } else {
        res.status(400).json('Column not found');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
