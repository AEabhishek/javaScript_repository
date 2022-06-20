var physics = {
    p_topic : velocity,
    p_topic2 : speed,

     greet :function() 
     {

      return "we wre learning"+" "+this.p_topic+" "+this.p_topic2

     }



}
var biodata = Object.create(physics)
biodata.__proto__= physics
biodata.p_topic = JavaScript
biodata.p_topic2 = Abhishek

console.log(biodata);

