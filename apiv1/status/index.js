'use strict';

const getHandler = require('./get');

module.exports = async function (fastify, opts) {
  fastify.get('/status', getHandler);
};
