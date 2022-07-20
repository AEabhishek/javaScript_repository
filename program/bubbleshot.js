var a=[50,60,20,10,59]

    for(var i=0; i<a.length;  i++)
    {
        for(var j=i+1; j<a.length; j++)
        {
            if(a[i]>a[j])
{
    var temp=a[i]
    a[i]=a[j]
    a[j]=temp

    console.log(a[i]);


}

        }
    

    }



