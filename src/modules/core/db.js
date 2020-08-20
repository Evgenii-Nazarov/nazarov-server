import mongoose from 'mongoose';

export default function mongoConnection() {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(
    `mongodb+srv://admin:fTz4WtCuCdzMMwLV@cluster0-za2nd.mongodb.net/todo`,
    { useNewUrlParser: true },
  );

  mongoose.connection.on('error', () => {
    throw new Error('Unable to connect to database');
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
}
