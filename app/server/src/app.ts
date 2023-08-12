import express, { Application, Request, Response } from 'express';
import httpStatus from 'http-status';
import { errorHandler } from './middlewares/errorHandler.middleware';
import { validateUrl } from './validators/url.validator';

const app: Application = express();

// 🚀 Welcoming endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'Welcome to our API 🚀'
  });
});

app.get('*', function (_req: Request, res: Response) {
  res.status(httpStatus.NOT_FOUND).json({ msg: 'Not Found 😕' });
});

app.use(errorHandler);

export default app;
