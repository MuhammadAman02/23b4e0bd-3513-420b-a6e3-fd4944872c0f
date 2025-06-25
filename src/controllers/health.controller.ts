import { FastifyRequest, FastifyReply } from 'fastify';

export async function healthCheckHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  const healthData = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  };
  
  res.status(200).send(healthData);
}