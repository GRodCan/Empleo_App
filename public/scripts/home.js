

const printSearch=async (dataArr)=>{
    if(document.getElementById("searchs")){
        document.getElementById("root").removeChild(document.getElementById("searchs"))
    }
    document.getElementById("root").innerHTML+="<div id=searchs></div>"




    for(let i in dataArr){
            document.getElementById("searchs").innerHTML+=`
            
                <div>
                <a href="${dataArr[i].url}"><div class="search">
                <h3>Offert: ${dataArr[i].title}</h3>
                <p>Company:${dataArr[i].company}</p>
                <p>Salary:${dataArr[i].salary}</p>
                </div>
                <form id="sendTodatabase" action="/api/favorites" method="POST">
                    <button id="favoriteIcon" onclick="createFavorites" type="submit"> <i class="fas fa-star"></i> </button>
                </form>`
        }
}
const createFavorite = async (offer) => {
    try {
        let url=
        const data = await fetch('http://localhost:3000/',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify()
        })
        const res = await data.json()
        return res
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}



// document.getElementById("favoriteIcon").addEventListener("click",createFavorite)






            // <input> 
            // <i id="favoriteIcon" class="fas fa-star"></i>
            // <input/>



// const search_Button= document.getElementById("search_Button").addEventListener("click", async()=>{
//     let search= await document.getElementById("buscar").value;
//     if(!search){ 
//         search=await "full-stack"
//     };
//     const response = await fetch(`/api/search/${search}`);
//     const data = await response.json();
   
//     await printSearch(data)})

const search= async()=>{
        let search= await document.getElementById("buscar").value;
        if(!search){ 
            search=await "full-stack"
        };
        const response = await fetch(`/api/search/${search}`);
        const data = await response.json();
       
        await printSearch(data)}