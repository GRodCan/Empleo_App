const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "0000"
})


module.exports = postgres;