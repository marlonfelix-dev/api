"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const _1 = require("../");
describe('Properties', () => {
    it('should be json', done => {
        request(_1.default)
            .get('/api/v1/properties')
            .expect(200);
    });
});
