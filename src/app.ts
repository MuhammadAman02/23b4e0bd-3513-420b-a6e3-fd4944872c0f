import Fastify from 'fastify';
import { healthRoutes } from './routes/health.route';
import { AppError } from './utils/AppError';

const app = Fastify({
  logger: true,
});

// Register routes
app.register(healthRoutes, { prefix: '/api' });

// Global error handler
app.setErrorHandler((error, request, reply) => {
  if (error instanceof AppError) {
    reply.status(error.statusCode).send({
      error: error.message,
      statusCode: error.statusCode,
    });
  } else {
    app.log.error(error);
    reply.status(500).send({
      error: 'Internal Server Error',
      statusCode: 500,
    });
  }
});

export default app;