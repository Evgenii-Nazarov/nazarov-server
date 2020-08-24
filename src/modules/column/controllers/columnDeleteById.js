import Column from '../columnModel';

const columnDeleteById = (req, res) => {
  const id = req.params.columnId;
  Column.remove({ _id: id })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Column deleted');
      } else {
        res.status(400).json('Column not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default columnDeleteById;
