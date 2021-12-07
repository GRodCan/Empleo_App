const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: "0000"
})


module.exports = pool;//postgres