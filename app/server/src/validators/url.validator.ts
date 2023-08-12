import { z } from 'zod';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';

const Url = z.object({
  originalUrl: z
    .string()
    .regex(
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    )
});

type Url = z.infer<typeof Url>;

export const validateUrl = (url: Url) => {
  const a = Url.safeParse(url);
  if (!a.success) {
    throw new CustomError('Invalid Url', httpStatus.UNPROCESSABLE_ENTITY);
  }
};
