'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('status is loaded', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/api/v1/status'
  })
  t.equal(res.payload, '{"status":"OK"}')
  t.strictEqual(res.statusCode, 200)
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.deepEqual(res.json(), { status: 'OK' })
})
