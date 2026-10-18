const name = "sanny"
const repoCount=30


console.log(name+repoCount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern way

const gameName= new String('sannysoni')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const newString=gameName.substring(0,4)
console.log(newString);


const anotherString=gameName.slice(-8,3)
console.log(anotherString);

const newStringOne="    sanny    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://sanny.com/sanny%20soni"
console.log(url.replace('%20','_'))

console.log(url.includes('sanny'))
console.log(gameName.split('_'));