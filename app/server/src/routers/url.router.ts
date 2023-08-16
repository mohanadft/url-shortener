import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { UrlService } from '../services/url.service';
import { UrlController } from '../controllers/url.controller';

const prisma = new PrismaClient();
const urlService = new UrlService(prisma);
const urlController = new UrlController(urlService);

const urlRouter = Router();

urlRouter.get('/', urlController.getUrls.bind(urlController));
urlRouter.get('/:id', urlController.getUrl.bind(urlController));

export default urlRouter;
