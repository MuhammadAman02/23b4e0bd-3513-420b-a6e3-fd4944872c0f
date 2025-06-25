import { FastifyRequest, FastifyReply } from 'fastify';

export async function healthCheckHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  const healthData = {
    status: 'OK',
    message: 'Server is running successfully',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };

  console.log('Health check requested:', healthData);
  res.status(200).send(healthData);
}