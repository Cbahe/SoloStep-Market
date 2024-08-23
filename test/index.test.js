const request = require('supertest');
const app = require('../server/app')

describe('GET /shoe', () => {
  it('should return a list of shoes', async () => {
    const res = await request(app).get('/shoe');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe('POST /shoe', () => {
  it('should create a new shoe', async () => {
    const newShoe = {
      name: 'Test Shoe',
      price: 100,
      size: 10,
      category: 'Test Category',
      image: 'http://example.com/image.png'
    };
    const res = await request(app).post('/shoe').send(newShoe);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Test Shoe');
  });
});
