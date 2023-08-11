import { PrismaClient } from '@prisma/client';

const urlModel = new PrismaClient().url;

export default urlModel;
