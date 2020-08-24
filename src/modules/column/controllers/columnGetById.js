import Column from '../columnModel';

const columnGetById = (req, res) => {
  const id = req.params.columnId;
  Column.findById(id)
    .select('-__v')
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json('No column for provided id');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export default columnGetById;
