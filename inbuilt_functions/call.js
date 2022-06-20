var school = {
    s_name : "TPS",
    p_name : "Koppal",

    sslc : function () {
        console.log(this.s_name+" "+this.p_name);
        this.diploma.call(school)
    }
    
}

var college = {
    s_name : "KLE",
    p_name : "Hubli",
diploma : function()
{
console.log(this.p_name);
}


}

function details(string1,string2){
    console.log(string1+this.s_name+" "+this.p_name+" "+string2);
}




school.sslc.call(college)
// details.call(school,"studied in 2010","completed")
// details.call(college,"studied in 2013","completed")