const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: "123456"
});

const createUser = async(user) => {
    const {nombre, email, pass, administrador} = user;
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`INSERT INTO users(nombre, email, pass, administrador)
                                        VALUES ($1, $2, $3, $4)`,[nombre, email, pass, administrador])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
};

const getUserByEmail = async(email) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT u.nombre, u.email, u.administrador
                                        FROM users AS u
                                        WHERE u.email=$1`, [email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}

const editUserByEmail = async(email) => {
    let cient;
    
}

const users = {
    createUser,
    getUserByEmail
}

module.exports = users;

//Pruebas

// let newUser = {nombre:"Julio Ruiz Mateos", email:"quetepegoleches@ciber.com", pass:"superman", administrador:false};
// createUser(newUser)
//     .then(data=>console.log(data))

// getUserByEmail("odioalositalianos@ciber.com")
//     .then(data=>console.log(data))