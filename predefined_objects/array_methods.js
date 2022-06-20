


var arr1=[56, 98, 97, 45]
var arr2=[78,90]

// Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// @param items — Additional arrays and/or items to add to the end of the array.
// here we combined the arr2 to arr1
// console.log(arr1.concat(arr2));
//  console.log(arr1);

// // [ 56, 98, 97, 45, 78, 90 ]========>arr1.arr2
// // [ 56, 98, 97, 45 ]========>arr1
// ----------------------------------------------------------------------



// Appends(attaches) new elements to the end of an array, and returns the new length of the array.

// @param items — New elements to add to the array.hre we added string("ravi")

// console.log(arr1.push("ravi"));
// console.log(arr1);

// 5==========> lenght of the array
// [ 56, 98, 97, 45, 'ravi' ]
//--------------------------------------------------------------------------------


// console.log(arr1.pop(90));
// console.log(arr1);

// 45
// [ 56, 98, 97 ]
//---------------------------------------------------------------------------------------

// console.log(arr1.unshift(99));
// console.log(arr1);

// 5
// [ 99, 56, 98, 97, 45 ]
// -----------------------------------------------------------------------------





// console.log(arr1.shift(01));
// console.log(arr1);
// 56
// [ 98, 97, 45 ]
// ----------------------------------------------------------------------------


// console.log(arr1.splice(2,3));
// console.log(arr1);
// [ 97, 45 ]
// [ 56, 98 ]
// -------------------------------------------------------------------

// console.log(arr1.slice(0,2));
// console.log(arr1);
// 56, 98 ]
// [ 56, 98, 97, 45 ]
// ----------------------------------------------------------------------------------

// console.log(arr1.every((element)=> {
//     return element>3
// }));
// console.log(arr1);
// true
// [ 56, 98, 97, 45 ]
// -----------------------------------------------------------------------------------------

// console.log(arr1.some((element)=>{
//     return element>9

// }));
// console.log(arr1);
// true
// [ 56, 98, 97, 45 ]
// --------------------------------------------------------------------------------------------



// console.log(arr1.indexOf(98));
// console.log(arr1);
// 1
// [ 56, 98, 97, 45 ]
// --------------------------------------------------------------------------------------------




// console.log(arr1.lastIndexOf(97));
// console.log(arr1);
// 2
// [ 56, 98, 97, 45 ]
// ---------------------------------------------------------------------------------

// console.log(arr1.reverse(45));
// console.log(arr1);
// [ 45, 97, 98, 56 ]
// [ 56, 98, 97, 45 ]
// -----------------------------------------------------------------------








// console.log(arr1.includes(98));
// console.log(arr1);

// true
// [ 56, 98, 97, 45 ]
// ----------------------------------------------------------------------

// console.log(arr1.join(" guru "));
// console.log(arr1);
// 56 guru 98 guru 97 guru 45
// [ 56, 98, 97, 45 ]
// -----------------------------------------------------------------------------

// console.log(arr1.forEach((element)=>{
//     return element<1

// }));
// console.log(arr1);
// undefined
// [ 56, 98, 97, 45 ]
//------------------------------------------------------------------------------------

// console.log(arr1.map((element)=>{
// return element>1
// }));
// [ true, true, true, true ]
// -----------------------------------------------------------------------------------------------

// console.log(arr1.filter((element)=>
// {
// return element>90
// }));
// [ 98, 97 ]
//---------------------------------------------------------------------------------

//  console.log(arr1.sort((a,b)=> a-b));
//  [ 45, 56, 97, 98 ]
//------------------------------------------------------------------------


// console.log(arr1.reduce((element)=>{
//     return element<3

// }));
// true
//-------------------------------------------------------------------------
// Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// @param callbackfn — A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

//@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value


console.log(arr1.reduceRight((element)=>{
    return element<90

}));
// true
