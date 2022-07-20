var yourself = {
f_name : "Arun",
l_name : "Kumar",
yoe : 4,
skill : ["lenovo", "dell", "sony", "HP"],               //array

greet : function()                                          //function
{

return "Hello i am "+" "+this.f_name+" "+this.l_name    
},

company :                                                  //object
{
C_name : "fortuner solutions",
I_dept : "HR",


}




}

yourself.location = "UK"                           //adding elements to object

// delete yourself.location                           //deleting the elements in the object

// console.log(yourself);                    //printing the complete object (method1)
// console.log(yourself.greet());            //printing function inside object
// console.log(yourself["company"]);         //printing the corresponding value of pefrticular property(method2)
// console.log(yourself.skill);              //printing the array inside the object
// console.log(yourself.company);              //printing corresponding values of perticular property(m2)
console.log(yourself.skill[2]);d