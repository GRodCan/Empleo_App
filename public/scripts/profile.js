const editMode=()=>{
        document.getElementById("root").innerHTML =`<div id="searchs">
        <p>Rellene los campos que quiera modificar:</p>
        <form action="/api/user" method="PUT">
            <input type="text" name="avatar" placeholder="New Avatar url">
            <input type="text" name="name" placeholder="New Name">
            <input type="email" name="new_email" placeholder="New Email">
            <input type="password" name="new_Password" placeholder="New password">
            <p>Introduzca su email y contraseña actuales para verificar sus modificaciones</p>
            <input type="email" name="current_email" placeholder="Current Email">
            <input type="password" name="current_Password" placeholder="Current password">
            <input type="submit">
        </form>
        </div>`
    }