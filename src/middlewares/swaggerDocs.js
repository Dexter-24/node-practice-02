import swaggerUI from 'swagger-ui-express';
import createHttpError from 'http-errors';
import fs from 'node:fs';
import { SWAGGER_PATH } from '../constants/index.js';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf8'));
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    console.error('Error loading Swagger docs:', err.message);
    return (req, res, next) =>
      next(
        createHttpError(
          500,
          `Failed to load Swagger documentation: ${err.message}`,
        ),
      );
  }
};
