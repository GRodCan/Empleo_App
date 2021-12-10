const editMode=(current_email)=>{
    
    document.getElementById("root").innerHTML =`<div id="searchs">
    <h2>Editar perfil</h2>
    <form action="/api/user/edit" method="POST" class="edit">
        <p class="perfil"><b>Rellene los campos a modificar:</b></p>
        <input type="text" name="img" placeholder="URL Imagen Nueva">
        <input type="text" name="nombre" placeholder="Nombre Nuevo">
        <input type="email" name="email" placeholder="Email Nuevo">
        <input type="password" name="pass" placeholder="Contraseña Nueva">
        <div>
        <label for="administrador">Administrador</label>
        <input type="checkbox" name="administrador" value="false" id="checkbox"> 
        </div>
        <p class="perfil"><b>Confirme con su email y contraseña</b></p>
        <input type="email" name="emailAdmin" placeholder="Email">
        <input type="password" name="current_pass" placeholder="Contraseña">
        <button onclick="adminCheck()" type="submit" class="editbtn" value="${current_email}" name="current_email">Editar</button>
        
    </form>
    </div>`
let checkbox= document.getElementById("checkbox")
    checkbox.addEventListener("click", ()=>{
    if(checkbox.is(':checked')){
        checkbox.attr('value', 'true');
    }}
    )
}

const deleteUser=async (i)=>{
    try{
        let text=document.getElementById(`email${i}`).innerText
        let userEmail={userEmail:text.slice(7)}
        const data = await fetch('http://localhost:3000/api/user',{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userEmail)
        })
        const res = await data
        console.log(res)

    }catch(err){
        throw err}
    }
