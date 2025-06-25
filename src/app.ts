import Fastify from 'fastify';
import { healthRoutes } from './routes/health.route';
import { AppError } from './utils/AppError';

export function buildApp() {
  const app = Fastify({
    logger: {
      level: 'info',
    },
  });

  // Global error handler
  app.setErrorHandler(async (error, req, res) => {
    console.error('Error occurred:', error);
    
    if (error instanceof AppError) {
      return res.status(error.statusCode).send({
        error: error.message,
        statusCode: error.statusCode,
      });
    }

    // Handle validation errors
    if (error.validation) {
      return res.status(400).send({
        error: 'Validation Error',
        details: error.validation,
        statusCode: 400,
      });
    }

    // Default server error
    return res.status(500).send({
      error: 'Internal Server Error',
      statusCode: 500,
    });
  });

  // Register routes
  app.register(healthRoutes);

  return app;
}