var a=[10,30,60,70,80,5]
var Fmax=a[0]
var Smax=a[0]
for(var i=0;i<a.length;i++)
{
    if(Fmax<a[i])
    {
        Smax=Fmax
        Fmax=a[i]
    }
    else if(Smax<a[i]){
        Smax=a[i]
    }
}

console.log(Fmax+" "+Smax);