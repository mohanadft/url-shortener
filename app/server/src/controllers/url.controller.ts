import { UrlService } from '../services/url.service';
import { NextFunction, Request, Response } from 'express';

import { validateUrl } from '../validators/url.validator';
import { isValidUrl } from '../helpers/url.helper';
import envConfig from '../config/env.config';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';

export class UrlController {
  constructor(public urlService: UrlService) {}

  async getUrls(_req: Request, res: Response) {
    const urls = await this.urlService.getUrls();
    res.json(urls);
  }

  async getUrl(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const url = await this.urlService.getUrl(parseInt(id));
    res.json(url);
  }

  async addUrl(req: Request, res: Response, next: NextFunction) {
    import('nanoid').then(async nanoidModule => {
      try {
        const { url: originalUrl } = req.body;

        validateUrl({ originalUrl });
        await isValidUrl(originalUrl);

        const shortUrl = nanoidModule.nanoid(
          envConfig.shortUrlSize ? parseInt(envConfig.shortUrlSize) : 8
        );

        const createdUrl = await this.urlService.addUrl({
          originalUrl,
          shortUrl
        });
        res.json(createdUrl);
      } catch (e) {
        next(e);
      }
    });
  }

  async redirect(req: Request, res: Response) {
    const { shortUrl } = req.params;

    if (!shortUrl) {
      throw new CustomError(
        'Short URL query params is missing',
        httpStatus.BAD_REQUEST
      );
    }

    const url = await this.urlService.findByShortUrl(shortUrl.toString());

    if (!url) {
      throw new CustomError('url not found', httpStatus.NOT_FOUND);
    }

    res.redirect(url.originalUrl);
  }
}
