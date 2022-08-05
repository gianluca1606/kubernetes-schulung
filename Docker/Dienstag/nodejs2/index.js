'use strict';

const Hapi = require('@hapi/hapi');
const asyncRedis = require("async-redis");

const ENV = process.env
const client = asyncRedis.createClient(ENV.REDIS_HOST || 'redis://redis:6379');

client.on("error", function (err) {
  console.log("Error " + err);
});

async function countViewers() {
  let views = await client.get('views') || "0";
  views = parseInt(views);
  views = views + 1;

  await client.set('views', views.toString());
  return views;
}

const init = async () => {
  const server = Hapi.server({ port: ENV.PORT || 5000, });

  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      const views = await countViewers();
      return `Hier waren ${views} Besucher.`;
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
