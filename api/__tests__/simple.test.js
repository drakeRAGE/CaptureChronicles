import { describe, it, expect } from '@jest/globals';

describe('Basic API Tests', () => {
  it('should pass a simple test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should test string operations', () => {
    const message = 'Api route is working!';
    expect(message).toContain('working');
    expect(message.length).toBeGreaterThan(0);
  });

  it('should test object operations', () => {
    const response = {
      message: 'Api route is working!',
      status: 'success'
    };
    
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Api route is working!');
  });

  it('should test async operations', async () => {
    const asyncFunction = async () => {
      return new Promise(resolve => {
        setTimeout(() => resolve('success'), 10);
      });
    };

    const result = await asyncFunction();
    expect(result).toBe('success');
  });
});
