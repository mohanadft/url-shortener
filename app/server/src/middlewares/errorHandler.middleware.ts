import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status';
import { CustomError } from './errors';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
};
