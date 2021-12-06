const newOffert=()=>{
    document.getElementById("root").innerHTML=`
    <h2>New Offer</h2>
    <form action="/api/ads" method="POST">
    <input type="text" name="title" id="form_title" placeholder="Titulo oferta" value="" class="form_input">
    <input type="text" name="company" id="form_company" placeholder="Compañia" value="" class="form_input">
    <input type="number" name="salary" id="form_salary" placeholder="Salario" value="" class="form_input">
    <input type="url" name="url" id="form_url" placeholder="Url Oferta" value="" class="form_input">
    <button type="submit" id="createOffer_Button">Create new offer</button>
    </form>
    `
}