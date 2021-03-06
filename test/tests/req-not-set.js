import test from 'ava';
import request from 'supertest';
import express from 'express';

let app;

test.before('Setup', () => {
  app = express();

  require('../util/full-req-handler')(app);
});

test.cb('Origin', t => {
  request(app)
    .get('/origin')
    .expect(200, '')
    .end(t.end);
});

test.cb('Origin hostname', t => {
  request(app)
    .get('/origin-hostname')
    .expect(200, '')
    .end(t.end);
});

test.cb('Target', t => {
  request(app)
    .get('/target')
    .expect(500, 'URL missing. Usage: /?url=http://some-address')
    .end(t.end);
});


test.cb('Hashed target', t => {
  request(app)
    .get('/hashed-target')
    .expect(500, 'URL missing. Usage: /?url=http://some-address')
    .end(t.end);
});


