'use strict';

var env = process.env.NODE_ENV || 'local';

function byEnv(config) {
  return config[env];
}

module.exports = {
  env: env,
  port: process.env.BOWLSCORE_PORT || 8080,
};
