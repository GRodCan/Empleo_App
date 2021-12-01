const takeProperty=(object)=>{
    let firstarr=Object.entries(object)
    const arr =firstarr.slice(0,4)
    for(let i in arr){
        let property= arr[i]
        if(property[1]!=""){
        return property[0]
        }
    }
}

module.exports = takeProperty;
  
  
  
  
  
  