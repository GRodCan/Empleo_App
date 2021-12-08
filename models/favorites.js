const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: process.env.DATABASE_SQLPASS
});

const getFavorites = async(id_user) => {
    let client;
    let result;
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM favorites WHERE id_user=$1`, [id_user])
        result = await data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    
    return result
}

const createFavorite = async(url, title, salary, company, id_user) => {
    let result;
    
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

const deleteFavorite = async(title,company,id_user) => {
    let result;
    let client;
    try {
        client = await pool.connect(); 
        const data = await client.query(`DELETE FROM favorites WHERE title = $1 AND company= $2 AND id_user=$3`,[title,company,id_user]);
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
    createFavorite,
    deleteFavorite
}

module.exports = favorites