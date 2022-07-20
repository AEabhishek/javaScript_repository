var str=["ab","a","ac"]
console.log(typeof(str))

var lvalue=str[0]
for(var i=0;i<str.length;i++)
{
    if(lvalue.length>str[i].length)
    {
        lvalue=str[i]
    }
}
console.log(lvalue);