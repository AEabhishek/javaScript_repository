var War=new Object()
War.f_country="Russia"
War.s_country="Ukraine"
War.duration=1

War.opposing_country = ["USA","UK","FRANCE","INDIA"],

War.greet = function ()
{

return "War is not Ending Between"+" "+this.f_country+" "+this.s_country


}

War.Helper= {
    Russia_Helper : ["INDIA","HUNGARIA","UTOPIA"],
    Ukraine_Helper : ["USA","FRANCE","ARABIANS"]

}


console.log(War.greet());
console.log(War.Helper.Ukraine_Helper);
console.log(War.Helper.Russia_Helper);
