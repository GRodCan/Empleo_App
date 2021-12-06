

const printSearch=async (dataArr)=>{
    if(document.getElementById("searchs")){
        document.getElementById("root").removeChild(document.getElementById("searchs"))
    }
    document.getElementById("root").innerHTML+="<div id=searchs></div>"


    for(let i in dataArr){
            document.getElementById("searchs").innerHTML+=`<div class="offert">
            <a href="${dataArr[i].url}" class="search"><div>
            <h3 class="data">${dataArr[i].title}</h3>
            <p class="data">Company: ${dataArr[i].company}</p>
            <p class="data">Salary: ${dataArr[i].salary}</p>
            </div>
            </a>
            <div id="buttonFav">
            <input id="favoriteIcon" class="icon" type="image" src="https://cdn-icons.flaticon.com/png/512/2377/premium/2377810.png?token=exp=1638814242~hmac=9c4df675201d18bd309b5946f23e113d">
            </div>            
            </div>`
    }
}

const search= async()=>{
        let search= await document.getElementById("buscar").value;
        if(!search){ 
            search=await "full-stack"
        };
        const response = await fetch(`/api/search/${search}`);
        const data = await response.json();
       
        await printSearch(data)
}