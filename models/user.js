const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "EmpleoApp",
    password: "1234"
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
        if(email){
        const data = await client.query(`SELECT u.nombre, u.email, u.administrador
                                        FROM users AS u
                                        WHERE u.email=$1`, [email])
        result = data.rows
        }else{
        const data = await client.query(`SELECT * FROM users`)
        result = data.rows
        }
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    console.log(result);
    return result
}

const editUserByEmail = async(propiedad, newValue, email, oldPass) => {
    let client, result
    try{
        client = await pool.connect();
        let query = `UPDATE users
                    SET ${propiedad} = $1                                         
                    WHERE email = $2
                    AND pass = $3`
        const data = await client.query(query, [newValue, email, oldPass])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release()
    }
    return result;
};

const existUser = async(email, pass) => {
    try {
        client = await pool.connect();
        const data = await client.query(`SELECT 
                                        email
                                        FROM users
                                        WHERE email = $1 AND pass = $2`,[email, pass])
        result = data.rowCount
        
    }catch(err){
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
    editUserByEmail,
    existUser,
}

module.exports = users;
// getUserByEmail("batman@test.com")
//Pruebas

// let newUser = {nombre:"Julio Ruiz Mateos", email:"quetepegoleches@ciber.com", pass:"superman", administrador:false};
// createUser(newUser)
//     .then(data=>console.log(data))

// getUserByEmail("gante@yahoo.com")
//     .then(data=>console.log(data))

// editUserByEmail("pass", "654321", "gante@yahoo.com", "123456")
//     .then(data=>console.log(data));

// existUser("gante@yahoo.com", "123456")
//     .then(data=>console.log(data))