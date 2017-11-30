import * as request from 'supertest';

import server from '../';

describe('Properties', () => {
    it('should be json', done => {
        request(server)
            .get('/api/v1/properties')
            .expect(200)
    });
});