const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: process.env.DATABASE_SQLPASS
});

const getFavorites = async() => {
    let client;
    let result;
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
    
    return result
}

const createFavorite = async(url, title, salary, company, id_user=4) => {
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

const deleteFavorite = async(title,id_user=4) => {
    let result;
    let client;
    try {
        client = await pool.connect(); 
        const data = await client.query(`DELETE FROM favorites WHERE title = $1 AND id_user=$2`,[title,id_user]);
        console.log(title);
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