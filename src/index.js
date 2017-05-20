import Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3001,
});

function getName(request) {
  return {
    name: request.query.name,
    surname: request.query.surname
  };
}


function getImageForCity(cityName) {

}

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('u fookin wot m8');
  },
});

server.start();
