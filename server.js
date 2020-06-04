'use strict';
// Require the framework
const Fastify = require('fastify');
const {PORT, IP} = require('./utils/constants');

const app = Fastify({
  logger: true,
  pluginTimeout: 10000
})

app.register(require('./app.js'))

app.listen(PORT, IP, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})