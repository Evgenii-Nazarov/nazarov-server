import mongoose from 'mongoose';
import Card from '../cardModel';
import { demoCards } from '../../../demoData/cards';

export default async function cardSetDemoData(req, res) {
  const cards = demoCards.map(
    el =>
      new Card({
        _id: new mongoose.Types.ObjectId(),
        name: el.name,
        description: el.description,
        priority: el.priority,
        status: el.status,
      }),
  );

  Card.insertMany(cards)
    .then(() => {
      res.status(201).json('Demo cards created');
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
