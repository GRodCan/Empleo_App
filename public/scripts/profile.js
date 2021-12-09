const editMode=()=>{
        document.getElementById("root").innerHTML =`<div id="searchs">
        <h2>Editar perfil</h2>
        <form action="/api/user/edit" method="POST" class="edit">
            <p class="perfil"><b>Rellene los campos:</b></p>
            <input type="text" name="img" placeholder="URL Imagen Nueva">
            <input type="text" name="nombre" placeholder="Nombre Nuevo">
            <input type="email" name="email" placeholder="Email Nuevo">
            <input type="password" name="pass" placeholder="Contraseña Nueva">
            <p class="perfil"><b>Verificación de usuario:</b></p>
            <input type="email" name="current_email" placeholder="Email Actual">
            <input type="password" name="current_pass" placeholder="Contraseña Actual">
            <button type="submit" class="editbtn">Editar</button>
        </form>
        </div>`
    }