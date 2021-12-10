const bodyToArray=(body)=>{
    body.current_pass="";
    if(body.emailAdmin){body.emailAdmin=""};
    let keys=Object.keys(body)
    let values= Object.values(body)
    for(let i=(values.length-1);i>=0;i--){
        if(values[i]==""){
            values.splice(i,1)
            keys.splice(i,1)
        }
    }
    let array=[]
    for(let i=0;i<values.length;i++){
        let newData={}
        newData.propiedad=keys[i],
        newData.newValue=values[i]
        
        array.push(newData)
    }    
    return array
}

module.exports=bodyToArray
// // [{propiedad:"name",newValue:"Pepe"},
        // // {propiedad:"salary",newValue:"500"}]


// let body={"nombre":"Clark",
// 'pass': '',
// "email":"clark@test.com",
// "img":"https://i.pinimg.com/originals/7e/73/d7/7e73d7ec2eb27440d80fd30c8fd3172c.jpg"
// }

// bodyToArray(body)