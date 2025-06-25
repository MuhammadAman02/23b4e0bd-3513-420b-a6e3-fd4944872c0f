import app from './app';
import { env } from './config/env';

const start = async () => {
  try {
    await app.listen({
      port: env.PORT,
      host: '0.0.0.0',
    });
    
    console.log(`Server running on http://localhost:${env.PORT}`);
    console.log(`Health check available at http://localhost:${env.PORT}/api/health`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();