var a=" HOWDY MODHI "
console.log(a.length);


console.log(a.split("",2));
//[ ' ', 'H' ]
// console.log(a.split("H",4));
//[ ' ', 'OWDY MOD', 'I ' ]


console.log(a.concat("USA"));
//HOWDY MODHI US

console.log(a.charCodeAt("D"));
//32

// console.log(a.charAt(5));//Y

// console.log(a.charAt(3));//W

// console.log(a.charAt(10));//H

// console.log(a.endsWith(" "));
// //false

// console.log(a.endsWith(" "));
// //true
// console.log(a.endsWith("dy"));
// //false

console.log(a.endsWith("DHI "));
//true


// console.log(a.length);
//13

a.indexOf("search string")
// console.log(a.includes("W",0));
//true

// console.log(a.indexOf("D"));
//4


a.lastIndexOf("search string")
// console.log(a.lastIndexOf("D"));
//9


a.replace("search string")
// console.log(a.replace("HOWDY","WEL COME"));
// WEL COME MODHI 


a.repeat(number)
//console.log(a.repeat(3));