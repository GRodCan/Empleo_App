const newOffert=(data)=>{
    if(!data){
       return document.getElementById("root").innerHTML=`
    <h2>New Offer</h2>
    <form action="/api/ads" method="POST">
    <input type="text" name="title" id="form_title" placeholder="Titulo oferta" value="" class="form_input">
    <input type="text" name="company" id="form_company" placeholder="Compañia" value="" class="form_input">
    <input type="text" name="salary" id="form_salary" placeholder="Salario" value="" class="form_input">
    <input type="url" name="url" id="form_url" placeholder="Url Oferta" value="" class="form_input">
    <button type="submit" id="createOffer_Button" value="">Create new offer</button>
    </form>
    `     
    }
    else{
    document.getElementById("root").innerHTML=`
    <h2>Edit Offer</h2>
    <form action="" method="">
    <input type="text" name="title" id="form_title" placeholder="Titulo oferta" value="${data.title}" class="form_input">
    <input type="text" name="company" id="form_company" placeholder="Compañia" value="${data.company}" class="form_input">
    <input type="text" name="salary" id="form_salary" placeholder="Salario" value="${data.salary}" class="form_input">
    <input type="url" name="url" id="form_url" placeholder="Url Oferta" value="${data.url}" class="form_input">
    <button onclick="editOffert()" type="submit" id="createOffer_Button" name="oldTitle" value="${data.title}">Save changes</button>
    </form>
    `}
};

const getOffertToEdit=(i)=>{
    let dataOffert={
        url: document.getElementById(`url${i}`).href,
        title: document.getElementById(`title${i}`).innerText,
        company: document.getElementById(`company${i}`).innerText,
        salary: document.getElementById(`salary${i}`).innerText
    };
        return newOffert(dataOffert);
}


const editOffert= async ()=>{
    try{
        const dataOffert={
            url: document.getElementById(`form_url`).value,
            title: document.getElementById(`form_title`).value,
            company: document.getElementById(`form_company`).value,
            salary: document.getElementById(`form_salary`).value,
            oldTitle: document.getElementById("createOffer_Button").value
        };
    const data = await fetch('http://localhost:3000/api/ads',{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(dataOffert)
        })
        const res = await data.json()
        console.log(res)
    }catch(err){ 
        throw err
    }
}

const deleteOffert=async (i)=>{
    try{
        let dataOffert={
            url: document.getElementById(`url${i}`).href,
            title: document.getElementById(`title${i}`).innerText,
            company: document.getElementById(`company${i}`).innerText,
            salary: document.getElementById(`salary${i}`).innerText
        };
        console.log("prefetch");
        const data = await fetch('http://localhost:3000/api/ads',{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(dataOffert)
        })
        const res = await data
        console.log(res)
        window.location.reload();

    }catch(err){
        throw err}

}