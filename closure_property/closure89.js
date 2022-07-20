function makeAdder(x){
    return function (y){
        return x+y;
    }
}
var u=makeAdder(5)(6)
var v=makeAdder(9)
// console.log(u());
console.log(u);