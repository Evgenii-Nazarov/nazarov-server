import todoRouter from '../card/todoRoutes';
import columnRouter from '../column/columnRoutes';
import infoRouter from '../info/infoRoutes';

export default function routes(app) {
  app.use('/card', todoRouter);
  app.use('/column', columnRouter);
  app.use('/info', infoRouter);
}
