// export const createFavorite = async (offer) => {
//     try {
//         const data = await fetch('http://localhost:3000/',{
//             method:"POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify(product)
//         })
//         const res = await data.json()
//         return res
//     } catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//     }
// }



document.getElementById("favoriteIcon").addEventListener("click",createFavorite)
