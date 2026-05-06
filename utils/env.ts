import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const env = {
  BASE_URL: process.env.BASE_URL || '',
  HEADLESS: process.env.HEADLESS === 'true',
  RETRIES: Number(process.env.RETRIES) || 0,
  TIMEOUT: Number(process.env.TIMEOUT) || 30000,
};