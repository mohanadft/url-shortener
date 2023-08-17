import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT,
  shortUrlSize: process.env.SHORT_URL_SIZE
};
