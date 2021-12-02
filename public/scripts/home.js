

const printSearch=async (dataArr)=>{
    if(document.getElementById("searchs")){
        document.getElementById("root").removeChild(document.getElementById("searchs"))
    }
    document.getElementById("root").innerHTML+="<div id=searchs></div>"


    for(let i in dataArr){
            document.getElementById("searchs").innerHTML+=`<div>
            <a href="${dataArr[i].url}"><div class="search">
            <h3>Offert: ${dataArr[i].title}</h3>
            <p>Company:${dataArr[i].company}</p>
            <p>Salary:${dataArr[i].salary}</p>
            </div>
            </a>
            <input id="favoriteIcon" class="icon" type="image" src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png">
            </div>`
        }
}
 
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