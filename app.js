'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const Sensible = require('fastify-sensible')
const Static = require('fastify-static')

module.exports = function (fastify, opts, next) {
  fastify.register(Sensible)

  fastify.register(Static, {
    root: path.join(__dirname, 'frontend/build'),
    wildcard: false
  });

  //process api request 404s
  fastify.get('/api/v1/*', function(req, reply) {
    reply.notFound();
  });

  //all other requests processed by react router
  fastify.get('/*', function(req, reply) {
    reply.sendFile('index.html');
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'apiv1'),
    options: Object.assign({prefix: '/api/v1'}, opts)
  })

  next()
}
