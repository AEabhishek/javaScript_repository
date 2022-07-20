var a=[1,2,3,4,5,6,7,8,9]
for(var i=0;i<a.length;i++)
{
    var n=a[i]
    var j=2
    
    while(n>=j)
    {
        if(n%j==0)
        {
            break
        }
        j++
    }
    if(n==j)
    {
        console.log(a[i]+" is a prime number");
    }
}