import request from 'request';
import {expect} from 'chai';
import mocha from 'mocha';
const url = "http://localhost:8000/api/movies";

describe('GET /api/movies', () => {
    it('responds with status code 200', async () => {
        request(url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
        });
    });
});