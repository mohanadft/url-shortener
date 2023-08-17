import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { UrlService } from '../services/url.service';
import { UrlController } from '../controllers/url.controller';
import { use } from '../helpers';

const prisma = new PrismaClient();
const urlService = new UrlService(prisma);
const urlController = new UrlController(urlService);

const urlRouter = Router();

urlRouter.get('/', use(urlController.getUrls.bind(urlController)));
urlRouter.get('/:id', use(urlController.getUrl.bind(urlController)));
urlRouter.post('/', urlController.addUrl.bind(urlController));

export default urlRouter;
