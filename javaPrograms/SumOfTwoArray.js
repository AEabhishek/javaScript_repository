var a=[1,2,3]
var b=[4,5,6,7]

for(var i=0;i<a.length;i++)
{
    b[i]=a[i]+b[i]
}
console.log(b);