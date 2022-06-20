var d=78
var g=67
var h=89
console.log(d);
function outer()
{
 console.log(g);
 console.log(h);
 var w=35
    return function inner()
          {
            console.log(w);
          }




}

var r= outer()
r();