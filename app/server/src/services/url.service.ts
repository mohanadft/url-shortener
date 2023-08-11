import { Prisma, Url } from '@prisma/client';
import urlModel from '../models';

export const getUrls = async (): Promise<Url[]> => {
  return await urlModel.findMany();
};

export const getUrl = async (id: string): Promise<Url | null> => {
  return await urlModel.findUnique({ where: { id } });
};

export const addUrl = async (data: Prisma.UrlCreateInput): Promise<Url> => {
  return await urlModel.create({ data });
};
