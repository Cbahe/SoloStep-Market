const Shoe = require("../models/Shoe");
const app = require("./app");
const { expect } = require('@jest/globals');
const request = require('supertest')


describe("GET /shoe", ()=> {
   test('should return all items', async ()=> {
    const response = await request(app).get('/shoe')

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();

  })
})