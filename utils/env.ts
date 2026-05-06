import dotenv from 'dotenv';

dotenv.config();

export const env = {
  BASE_URL: process.env.BASE_URL || '',
  HEADLESS: process.env.HEADLESS === 'true',
  RETRIES: Number(process.env.RETRIES) || 0,
  TIMEOUT: Number(process.env.TIMEOUT) || 30000,
};