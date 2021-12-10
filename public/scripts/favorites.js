

const createFavorite = async (offer) => {
    try {
        let offerData={ 
            url: document.getElementById(`url${index}`).href,
            title: document.getElementById(`title${index}`).innerText,
            company: document.getElementById(`company${index}`).innerText,
            salary: document.getElementById(`salary${index}`).innerText,

        };
        const data = await fetch('http://localhost:3000/',{
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


const deleteFavorite= async (index) => {
    
    try {   
        let offerData={ 
            url: document.getElementById(`url${index}`).href,
            title: document.getElementById(`title${index}`).innerText,
            company: document.getElementById(`company${index}`).innerText,
            salary: document.getElementById(`salary${index}`).innerText,

        }; 
         
        const data = await fetch('http://localhost:3000/api/favorites',{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(offerData)
        })
      
        const res = await data.json()
        window.location.reload();
        return res
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
    
