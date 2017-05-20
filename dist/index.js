'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();
server.connection({
  host: 'localhost',
  port: 3001
});

function getName(request) {
  return {
    name: request.query.name,
    surname: request.query.surname
  };
}

function getImageForCity(cityName) {}

server.route({
  method: 'GET',
  path: '/',
  handler: function handler(request, reply) {
    reply('u fookin wot m8');
  }
});

server.start();