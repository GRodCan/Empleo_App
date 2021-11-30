const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: "123456"
});

const createUser = async(nombre, email, pass, img, administrador=false) => {
    console.log("Esto es lo que llega", nombre, email, pass, img);
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`INSERT INTO users(nombre, email, pass, img, administrador)
                                        VALUES ($1, $2, $3, $4, $5)`,[nombre, email, pass, img, administrador])
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

const editUserByEmail = async(avatar, name, new_email, new_Password, current_email, current_Password) => {
    let client, result
    try{
        client = await pool.connect();
        const data = await client.query(`UPDATE users
                                        SET img = $1
                                        SET nombre = $2
                                        SET email = $3
                                        SET pass = $4
                                        WHERE email = $5
                                        AND pass = $6`, [avatar, name, new_email, new_Password, current_email, current_Password])
        result = data.rowCount
    }catch{
        console.log(err);
        throw err;
    }finally{
        client.release()
    }
    return result
}

const users = {
    createUser,
    getUserByEmail,
    editUserByEmail
}

module.exports = users;

//Pruebas

// let newUser = {nombre:"Julio Ruiz Mateos", email:"quetepegoleches@ciber.com", pass:"superman", administrador:false};
// createUser(newUser)
//     .then(data=>console.log(data))

// getUserByEmail("odioalositalianos@ciber.com")
//     .then(data=>console.log(data))

// editUserByEmail("gritos", "odioalositalianos@ciber.com", "vocerio")
//     .then(data=>console.log(data));