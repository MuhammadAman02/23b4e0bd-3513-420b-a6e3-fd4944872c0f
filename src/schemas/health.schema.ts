import { z } from 'zod';

export const healthCheckSchema = {
  response: {
    200: z.object({
      status: z.string(),
      message: z.string(),
      timestamp: z.string(),
      uptime: z.number(),
    }),
  },
};