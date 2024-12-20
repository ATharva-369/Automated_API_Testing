import pool from "./db.mjs";
import fastify from "./fastify.mjs";

pool.connect()
    .then(() => console.log('PostgreSQL connected successfully'))
    .catch((err) => console.error('Error connectiing to PostgreSQL', err.stack))


fastify.get("/", async (request, reply) => {
  return { message: "Hello World" };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server running at http://localhost:3000");
  } catch (error) {
    fastify.log.error(err);
    process.exit(1);
  }
};

//PostgreSQL

start();
