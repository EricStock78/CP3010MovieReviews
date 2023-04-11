import {expect} from 'chai';
import request from 'request';

const url = 'http://localhost:8000/api/movies';

describe("test api routes", function () {
    describe("test /api/movies", function () {
        it("should return 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});