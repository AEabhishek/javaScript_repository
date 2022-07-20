// var physics = {
//     p_topic : "velocity",
//     p_topic2 : "speed",

//      greet :function() 
//      {

//       return "we wre learning"+" "+this.p_topic+" "+this.p_topic2

//      }



// }
// var biodata = Object.create(physics)
// biodata.__proto__= physics
// biodata.p_topic = "JavaScript"
// biodata.p_topic2 = "Abhishek"

// console.log(biodata);

var laptop={
    brand:"Hp",
    cost:50000,
    display:function(){
        console.log("brand");
    }
}
console.log(laptop);
// var lap=Object.create(laptop)
// lap.__proto__=laptop
// lap.brand="Dell"
// console.log(lap.display());
