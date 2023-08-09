import express, { Application, Request, Response } from "express"

const app: Application = express()

// 🚀 Welcoming endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'Welcome to our API 🚀'
  });
});

export default app;