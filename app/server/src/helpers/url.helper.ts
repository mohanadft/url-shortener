import axios from 'axios';
import { CustomError } from '../middlewares/errors';
import httpStatus from 'http-status';

export async function isValidUrl(url: string): Promise<boolean> {
  try {
    const response = await axios.head(url);
    return response.status >= 200 && response.status < 400;
  } catch {
    throw new CustomError('Not Found', httpStatus.NOT_FOUND);
  }
}
