const request = require('supertest');
const app = require('./../server/app.js');

describe('Test the /rooms/:id/ path', () => {
  test('It should respond to the GET request with status code 200', (done) => {
    request(app).get('/rooms/1034/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
