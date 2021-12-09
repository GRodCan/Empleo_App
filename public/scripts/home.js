
const changeWelcome=()=>{
    document.getElementById("welcome").innerHTML= `<img id="loading" src="https://acegif.com/wp-content/uploads/loading-36.gif">`
}
const printSearch=async (dataArr)=>{
    document.getElementById("welcome").innerHTML= `<h2>¡Buena suerte!</h2>`
    if(document.getElementById("searchs")){
        document.getElementById("root").removeChild(document.getElementById("searchs"))
    }
    document.getElementById("root").innerHTML+="<div id=searchs></div>"




    for(let i in dataArr){

            document.getElementById("searchs").innerHTML+=`<div id="offer${i}" class="offert">
            <a href="${dataArr[i].url}" id="url${i}" class="search"><div>
            <h3 id="title${i}" class="data">${dataArr[i].title}</h3>
            <p id="company${i}" class="data">${dataArr[i].company}</p>
            <p id="salary${i}" class="data">${dataArr[i].salary}</p>
            </div>
            </a>
            <div id="buttonFav">
            <input id="favoriteIcon"  onclick="createFavorite(${i})" class="icon" type="image" src="./assets/icons/favourite.png">
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




const createFavorite = async (index) => {
    
    try {   
        let offerData={ 
            url: document.getElementById(`url${index}`).href,
            title: document.getElementById(`title${index}`).innerText,
            company: document.getElementById(`company${index}`).innerText,
            salary: document.getElementById(`salary${index}`).innerText,

        }; 
         
        const data = await fetch('http://localhost:3000/api/favorites',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(offerData)
        })
      
        const res = await data.json()
        
        return res
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

