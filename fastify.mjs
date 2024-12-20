import Fastify from "fastify";
import fastifyJwt from "fastify-jwt";

const fastify = Fastify({logger: true});

fastify.register(fastifyJwt, {
    secret: 'g6d+;$JvRugl_b2'
});

export default fastify;