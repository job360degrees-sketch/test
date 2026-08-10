const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return a 200 status and success message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Hello World!');
    });
});
