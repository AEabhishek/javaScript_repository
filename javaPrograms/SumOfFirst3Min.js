var a=[10,20,30,50,60,5]
for (let index = 0; index < a.length; index++) {
    
    for (let j= index+1; j < a.length; j++) {
        if(a[index]>a[j])
        {
       var temp=a[index]
       a[index]=a[j]
       a[j]=temp
        }
        
    }
    
}
console.log(a);
var sum=0
for(var i=0;i<3;i++)
{
sum=sum+a[i]
}
console.log(sum);