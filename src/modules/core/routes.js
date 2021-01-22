import todoRouter from '../card/todoRoutes';
import columnRouter from '../column/columnRoutes';
import infoRouter from '../info/infoRoutes';
import userRouter from '../user/userRoutes';
import transactionRouter from '../transaction/transactionRoutes';

export default function routes(app) {
  app.use('/card', todoRouter);
  app.use('/column', columnRouter);
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
  app.use('/transaction', transactionRouter);
}
