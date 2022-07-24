import mongoose from 'mongoose';

export default function mongoConnection() {
  mongoose.set('useCreateIndex', true);
  const res = mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${
      process.env.MONGO_HOST
    }/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );

  console.ingo('connect', res)

  mongoose.connection.on('error', (err) => {
    console.ingo('error', err)
    throw new Error('Unable to connect to database');
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
}
