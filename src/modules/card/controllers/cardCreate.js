import mongoose from 'mongoose';
import Card from '../cardModel';

export default async function cardCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const todo = new Card({
    _id,
    name: req.body.name,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
  });

  todo
    .save()
    .then(() => {
      res.status(201).json('Card created');
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
