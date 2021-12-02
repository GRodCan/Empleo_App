const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: "123456"
});

const getFavorites = async() => {
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM favorites`)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    console.log(result)
    return result
}

const createFavorite = async() => {
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
    }return resutl
}

const favorites = {
    getFavorites,
    createFavorite
}

module.exports = favorites