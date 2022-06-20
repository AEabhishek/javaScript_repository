let myself = {
    f_name : "Qspiders",
    l_name : "Testyantra",
    
    greet : function ()
    {
        var a=15
        console.log(a);
        this.a=a
        console.log(this.a);
        console.log(myself.f_name);

    }
}
myself.greet()