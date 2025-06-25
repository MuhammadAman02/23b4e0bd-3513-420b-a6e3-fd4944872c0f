import { FastifyInstance } from 'fastify';
import { healthCheckHandler } from '../controllers/health.controller';
import { healthCheckSchema } from '../schemas/health.schema';

export async function healthRoutes(app: FastifyInstance) {
  app.get('/health', {
    schema: healthCheckSchema,
    handler: healthCheckHandler,
  });
}