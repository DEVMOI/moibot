import app from './';
import request from 'supertest';
describe('tests root path', () => {
	it('It should response the GET method', () => {
		return request(app)
			.get('/')
			.then(response => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});
});
