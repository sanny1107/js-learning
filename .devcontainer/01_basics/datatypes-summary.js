// 1: primative data type:
// -> 7 type: string,Number,Boolean,Null,Undefined,symbol,BigInt

const score= 100
const scoreValue=100.3

const isLoggIn=false
const outsideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId); //Output: false
//const bigNumber= 3456787654n

console.log(typeof bigNumber);




//2: Non-premative(referance type):
// -> Array,Object,Function

const heros =["sanny","sudhir","sneha"];
let myObj={
    name:"sanny",
    age:17,
}

const myfunction=function(){
console.log("hello sanny")
}


