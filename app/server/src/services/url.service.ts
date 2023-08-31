import { Prisma, PrismaClient, Url } from '@prisma/client';

export class UrlService {
  constructor(private readonly prismaService: PrismaClient) {}

  async getUrls(options?: Prisma.UrlFindManyArgs): Promise<Url[]> {
    return await this.prismaService.url.findMany(options);
  }

  async getUrl(
    id: number,
    options?: Prisma.UrlFindUniqueArgs
  ): Promise<Url | null> {
    return await this.prismaService.url.findUnique({
      ...options,
      where: { id }
    });
  }

  async addUrl(
    data: Prisma.UrlCreateInput,
    options?: Prisma.UrlCreateArgs
  ): Promise<Url> {
    return await this.prismaService.url.create({ ...options, data });
  }

  async updateUrl(
    id: number,
    data: Prisma.UrlUpdateInput,
    options?: Prisma.UrlUpdateArgs
  ): Promise<Url> {
    return await this.prismaService.url.update({
      ...options,
      where: { id },
      data
    });
  }

  async findByShortUrl(shortUrl: string) {
    return await this.prismaService.url.findFirst({ where: { shortUrl } });
  }
}
