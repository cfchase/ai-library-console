const env = require('env-var');

const PORT = env.get('PORT').default('8080').asPortNumber();
const IP = env.get('IP').asString() || env.get('OPENSHIFT_NODEJS_IP').asString() || '0.0.0.0';
const LOG_LEVEL = env.get('LOG_LEVEL').default('info').asString();

module.exports = {
  PORT,
  IP,
  LOG_LEVEL
};