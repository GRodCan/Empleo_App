const compareData= require("../utils/editUser")
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
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
        const data = await client.query(`SELECT u.nombre, u.email, u.img, u.fecha, u.administrador, u.id_user, u.pass
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
    return result
};


const editUserByEmail = async(newData, email) => {
    let client, result
    try{
        client = await pool.connect();
                // newData
        // // [{propiedad:"name",newValue:"Pepe"},
        // // {propiedad:"salary",newValue:"500"}]
        let targetQuery =""
        for(let i=0;i<newData.length;i++){
            targetQuery+=`${newData[i].propiedad} = ${"$"+(i+1)} `
            if((i+1)!=newData.length){
                targetQuery+=`, `
            }
        }
        const newValues=await newData.map((elemento)=>{
           return elemento.newValue
        })
        const query = `UPDATE users
                    SET ${targetQuery}                                   
                    WHERE email = $${(newData.length+1)}`

        let valuesQuery= await newValues.concat([email]);
        let data = await client.query(query, valuesQuery);
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
                                        email,
                                        pass
                                        FROM users
                                        WHERE email = $1 AND pass = $2`,[email, pass])
        result = data.rows[0]
        
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release()
    }
    return result
}

const deleteUserbyEmail=async (email)=>{
    let result;
    let client;
    try {
        client = await pool.connect(); 
        const data = await client.query(`DELETE FROM users WHERE email = $1`,[email]);
        result = data.rowCount;     
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }return result
}

const users = {
    createUser,
    getUserByEmail,
    editUserByEmail,
    existUser,
    deleteUserbyEmail
};
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



// let arr=[{propiedad:"nombre",newValue:"Bruce"},
// {propiedad:"img",newValue:"https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/1737.jpg"},{propiedad:"email", newValue:"bruce@test.com"}]


// editUserByEmail(arr,"batman@test.com")