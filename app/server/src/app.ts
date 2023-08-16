import express, { Application, Request, Response } from 'express';
import httpStatus from 'http-status';
import { errorHandler } from './middlewares/errorHandler.middleware';
import urlRouter from './routers/url.router';

const app: Application = express();

app.use(express.json());

// 🚀 Welcoming endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'Welcome to our API 🚀'
  });
});

app.use('/urls', urlRouter);
app.use(errorHandler);

app.get('*', function (_req: Request, res: Response) {
  res.status(httpStatus.NOT_FOUND).json({ msg: 'Not Found 😕' });
});

export default app;
