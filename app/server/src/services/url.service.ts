import { Prisma, Url } from '@prisma/client';
import urlModel from '../models';

export const getUrls = async (): Promise<Url[]> => {
  return await urlModel.findMany();
};
