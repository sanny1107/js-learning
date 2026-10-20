const score=400

const balance=new Number(100) //object ban gya hai

//console.log(balance);
//console.log(typeof balance)   //object

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));       //100.00

const otherNumber=23.654346543
//console.log(otherNumber.toFixed(4));     //23.6543

//console.log(otherNumber.toPrecision(4));  //23.7 roundingoff

const hundreds=100000000
//console.log(hundreds.toLocaleString('en-IN')); //10,00,00,000 indian standard 


//++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++++++++++
//console.log(Math);
//console.log(Math.abs(-5));
//console.log(Math.abs(5));
//console.log(Math.round(4.3));//roundingoff
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,7,9,5,3,5));
// console.log(Math.max(4,3,9,3,0,5,6));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const max=20
const min=10

console.log(Math.floor(Math.random()*(max-min+1))+min);