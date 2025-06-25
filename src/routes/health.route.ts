import { FastifyInstance } from 'fastify';
import { healthCheckHandler } from '../controllers/health.controller';
import { healthCheckSchema } from '../schemas/health.schema';

export async function healthRoutes(app: FastifyInstance) {
  app.get('/api/health', {
    schema: healthCheckSchema,
    handler: healthCheckHandler,
  });

  // Simple test endpoint without schema
  app.get('/api/test', async (req, res) => {
    console.log('Test endpoint hit');
    return res.send({ 
      message: 'Test endpoint working!',
      method: req.method,
      url: req.url 
    });
  });
}