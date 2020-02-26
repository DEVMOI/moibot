import app from '../api/app';
import request from 'supertest';
describe('tests root path', () => {
  it('It should response the GET method', () => {
    return request(app)
      .get('/test')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
