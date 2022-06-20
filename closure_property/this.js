let karnataka = {
    f_city : "mysore",
    f_city2 : "bangalore",

   greet : function (){
        console.log(Andra.f_space);

    }

}
let Andra ={
    f_city : "hydrabad",
    f_city2 : "vizag",
    f_space : 56,

  greet :  function (){
         console.log(this.f_city2);
    }

        
}

Andra.greet()
