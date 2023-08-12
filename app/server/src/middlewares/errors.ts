import httpStatus from 'http-status';

export class CustomError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}
