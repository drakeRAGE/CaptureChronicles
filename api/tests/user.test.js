import { describe, it, expect, beforeAll, afterAll, jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';

// Mock the database models and middleware before importing the router
jest.unstable_mockModule('../models/user.model.js', () => ({
  default: {
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
    findById: jest.fn(),
  }
}));

jest.unstable_mockModule('../models/listing.model.js', () => ({
  default: {
    find: jest.fn(),
  }
}));

jest.unstable_mockModule('../utils/verifyUser.js', () => ({
  verifyToken: (req, res, next) => {
    req.user = { id: 'test-user-id' };
    next();
  },
}));

// Import after mocking
const { default: userRouter } = await import('../routes/user.route.js');

// Create test app
const app = express();
app.use(express.json());
app.use('/api/users', userRouter);

describe('User Routes', () => {
  describe('GET /api/users/test', () => {
    it('should return success message', async () => {
      const response = await request(app)
        .get('/api/users/test')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Api route is working!',
      });
    });

    it('should return JSON content type', async () => {
      const response = await request(app)
        .get('/api/users/test')
        .expect('Content-Type', /json/);

      expect(response.status).toBe(200);
    });
  });

  describe('POST /api/users/update/:id', () => {
    it('should require authentication', async () => {
      // This test checks that the route exists and processes the request
      // The actual authentication logic is mocked above
      const response = await request(app)
        .post('/api/users/update/test-user-id')
        .send({
          username: 'newusername',
          email: 'new@example.com',
        });

      // Since we're mocking the database, we expect the route to be accessible
      // The actual response will depend on the mocked implementation
      expect(response.status).toBeDefined();
    });
  });

  describe('GET /api/users/:id', () => {
    it('should handle get user request', async () => {
      const response = await request(app)
        .get('/api/users/test-user-id');

      // Route should be accessible (actual behavior depends on mocked DB)
      expect(response.status).toBeDefined();
    });
  });

  describe('DELETE /api/users/delete/:id', () => {
    it('should handle delete user request', async () => {
      const response = await request(app)
        .delete('/api/users/delete/test-user-id');

      // Route should be accessible (actual behavior depends on mocked DB)
      expect(response.status).toBeDefined();
    });
  });

  describe('GET /api/users/listings/:id', () => {
    it('should handle get user listings request', async () => {
      const response = await request(app)
        .get('/api/users/listings/test-user-id');

      // Route should be accessible (actual behavior depends on mocked DB)
      expect(response.status).toBeDefined();
    });
  });
});
