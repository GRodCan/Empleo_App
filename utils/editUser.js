const compare=(userOld,userNew)=>{
console.log(userOld)
console.log(userNew)

    let dataFinal={
        nombre: userNew.nombre.length==0? userOld.nombre: userNew.nombre,
        pass: userNew.pass.length==0? userOld.pass: userNew.pass,
        img: userNew.img.length==0? userOld.img: userNew.img,
        email: userNew.email.length==0? userOld.email: userNew.email
    }
    console.log(dataFinal)
    return dataFinal
}
module.exports=compare