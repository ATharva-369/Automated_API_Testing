import pkg from "pg";
const {Pool} = pkg;

const pool = new Pool({
    user: 'api_user',
    host: 'localhost',
    database: 'api_testing',
    password: 'securepassword',
    port: 5432
})


export default pool;