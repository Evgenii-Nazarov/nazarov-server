import mongoose from 'mongoose';
import Column from '../columnModel';

export default async function columnCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const todo = new Column({
    _id,
    title: req.body.title,
    status: req.body.status,
  });

  todo
    .save()
    .then(() => {
      res.status(201).json('Column created');
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
