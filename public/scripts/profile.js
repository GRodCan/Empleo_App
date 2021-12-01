const editMode=()=>{
        document.getElementById("root").innerHTML =`<div id="searchs">
        <p>Rellene los campos que quiera modificar:</p>
        <form action="/api/user/edit" method="POST">
            <input type="text" name="img" placeholder="New Avatar url">
            <input type="text" name="nombre" placeholder="New Name">
            <input type="email" name="email" placeholder="New Email">
            <input type="password" name="pass" placeholder="New password">
            <p>Introduzca su email y contraseña actuales para verificar sus modificaciones</p>
            <input type="email" name="current_email" placeholder="Current Email">
            <input type="password" name="current_pass" placeholder="Current password">
            <button type="submit">Editar</button>
        </form>
        </div>`
    }