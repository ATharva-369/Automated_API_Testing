import {registerUser, loginUser} from '../controllers/authController.mjs'
async function authRoutes(fastify, options){
    fastify.post('/register', async (request, reply) => {
        return registerUser(fastify, requestAnimationFrame, reply);
    })

    fastify.post('/login', async (request, reply) => {
        return loginUser(fastify, request, reply);
    })
}

export default authRoutes;
