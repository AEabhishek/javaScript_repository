var science ={
f_choice : "PBMS",
s_choice : "CBZ",
graduation : function(){
    console.log("mychoice is"+this.f_choice+" "+this.s_choice);

}

}

var commerce = {
    f_choice : "Business management",
    s_choice : "History",
    degree : function(){
        console.log("my choice is "+" "+this.f_choice+" "+this.s_choice);

    }

}

 function help (string1,string2,string3)
 {
console.log(string1+" "+this.f_choice+" "+this.s_choice+" "+string2+" "+string3);
}

science.graduation.apply(commerce)
help.apply(science,["Is","best","For life"])