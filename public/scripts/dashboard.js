const newOffert=()=>{
    document.getElementById("root").innerHTML=`
    <form action="/api/ads" method="POST">
    <input type="text" name="title" id="" placeholder="Titulo oferta" value="">
    <input type="text" name="company" id="" placeholder="Compañia" value="">
    <input type="number" name="salary" id="" placeholder="Salario" value="">
    <textarea name="description" id="" cols="30" rows="10" placeholder="Descripción" value=""></textarea>
    <input type="url" name="url" id="" placeholder="Url Oferta" value="">
    <button type="submit">Crear offert</button>
    </form>
    `
}