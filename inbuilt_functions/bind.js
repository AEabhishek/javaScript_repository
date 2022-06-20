var mobile = {
    f_choice : "SAMSUNG",
    s_choice : "REAL ME",
    android : function(){
        console.log("MY DREAM MOBILE IS"+this.f_choice +"and"+ " "+this.s_choice);

    }
}

var laptop = {
    f_choice : "SONY",
    s_choice : "Acer",

     smarttop : function()
     {
    console.log("MY DREAM LAPTOP IS"+this.f_choice+"and"+" "+this.s_choice);


}
}
function get(string1,string2,string3)
{
    console.log(string1+this.f_choice+ string2 +" "+this.s_choice + string3);
}

mobile.android.bind(laptop)

var copy=get.bind(mobile,"best","better","bestest")
copy()
