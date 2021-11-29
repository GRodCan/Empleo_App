const editMode=()=>{
        document.getElementById("root").innerHTML =`<div id="searchs">
        <p>Rellene los campos que quiera modificar:</p>
        <form action="/api/user" method="POST">
            <input type="text" name="avatar" placeholder="New Avatar url">
            <input type="text" name="name" placeholder="New Name">
            <input type="email" name="email" placeholder="New Email">
            <input type="password" name="new_Password" placeholder="New password">
            <p>Introduzca su contraseña actual para verificar sus modificaciones</p>
            <input type="password" name="current_Password" placeholder="Current password">
            <input type="submit">
        </form>
        </div>`
    }