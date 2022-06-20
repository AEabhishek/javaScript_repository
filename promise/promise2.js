// var pro= new Promise((resolve,reject)=>{
//    let x="rty"
//    let y="rt"
//    if (x==y)
//    {
//     resolve ("x and y are equal")
//    }
//    else{
//        reject("x and y are not equal")
//    }


// }
// )
// pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})


 var pro= new Promise((resolve,reject)=>{
       let x="rty"
       let y="rt"
       if (x==y)
       {
        resolve ("x and y are equal")
       }
       else{
           reject("x and y are not equal")
       }
    
    
    }
    )
    pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
