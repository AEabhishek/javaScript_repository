
function ecommerce (status){
    var result=status()
    if (result()=="paymentsucessful") {
        console.log("paymentbookedsucessfully");
       
        
    } else{
        console.log("payment failed");

    }

}


ecommerce (function paymentstatus() {
    return function(){
        return "paymentsucessful";

    }
  
}) 

// ecommerce() is being invoked
// status() == paymentstatus() ==>call back function ,name has been overriden
// invoking the payment status () functionin 37th line
// result==function(){
//     return "paymentsucessful"
// }
// invoking the resut function in line 38
// redirected to 46
// returns to data "paymentsucessful"
// redirected to line 38(if condition)
// if the returned data is macthing with the condition provided in if statement ==>if block will executed or else
    