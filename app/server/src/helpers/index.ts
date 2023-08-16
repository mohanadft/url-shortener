import { NextFunction, Request, RequestHandler, Response } from 'express';

const use =
  <P, ResBody, ReqBody, Query>(
    fn: RequestHandler<P, ResBody, ReqBody, Query>
  ) =>
  (
    req: Request<P, ResBody, ReqBody, Query>,
    res: Response,
    next: NextFunction
  ) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export { use };
