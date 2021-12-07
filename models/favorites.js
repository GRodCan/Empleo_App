const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: process.env.DATABASE_SQLPASS
});

const getFavorites = async() => {
    try{
        const client = await pool.connect();
        const data = await client.query(`SELECT * FROM favorites`)
        const result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    console.log(result)
    return result
}

const createFavorite = async(title, company, salary, url, id_user=1) => {
    let result;
    console.log(title);
    let client;
    try {
        client = await pool.connect(); // Espera a abrir conexio
        
        const data = await client.query(`INSERT INTO favorites(id_user, title, company, salary, url) 
                                        VALUES ($1,$2,$3,$4,$5)`,[id_user, title, company, salary, url]); //lo guarda en BBDD
        result = data.rowCount      
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }return result
}

const favorites = {
    getFavorites,
    createFavorite
}

module.exports = favorites