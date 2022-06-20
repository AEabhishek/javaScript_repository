var d=78
// console.log(d);
function outer(value1){

    return function inner(value2)
           {
                return (value1+value2)
            }

}outer()
var add=outer(5)
console.log(add(7));






