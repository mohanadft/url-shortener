import { UrlService } from '../services/url.service';
import { Request, Response } from 'express';

export class UrlController {
  constructor(public urlService: UrlService) {}

  async getUrls(_req: Request, res: Response) {
    const urls = await this.urlService.getUrls();
    res.json(urls);
  }

  async getUrl(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const url = await this.urlService.getUrl(id);
    res.json(url);
  }
}
