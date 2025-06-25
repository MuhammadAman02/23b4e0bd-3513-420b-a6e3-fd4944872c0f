import { buildApp } from './app';
import { env } from './config/env';

async function start() {
  const app = buildApp();

  try {
    await app.listen({ 
      port: env.PORT, 
      host: '0.0.0.0' 
    });
    
    console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    console.log(`📋 Health check: http://localhost:${env.PORT}/api/health`);
    console.log(`🧪 Test endpoint: http://localhost:${env.PORT}/api/test`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

start();