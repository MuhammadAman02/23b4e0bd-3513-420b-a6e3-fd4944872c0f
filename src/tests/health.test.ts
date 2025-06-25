import { describe, it, expect } from 'vitest';
import { buildApp } from '../app';

describe('Health Check API', () => {
  it('should return health status', async () => {
    const app = buildApp();
    
    const response = await app.inject({
      method: 'GET',
      url: '/api/health',
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.status).toBe('OK');
    expect(body.message).toBe('Server is running successfully');
  });

  it('should return test response', async () => {
    const app = buildApp();
    
    const response = await app.inject({
      method: 'GET',
      url: '/api/test',
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.message).toBe('Test endpoint working!');
  });
});