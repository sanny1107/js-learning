//node .devcontainer/02_basics/01_array.js

let arr=[1,2,3,4,5,6]
console.log(arr);

const myArr=[1,2,3,4,5,6,7]
console.log(myArr);

const myArr2=new Array(1,2,3,4)
console.log(myArr2[1]);

//array method

myArr.push(9)
myArr.push()
myArr.pop(1)
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9)) //false
console.log(myArr.indexOf(3))
console.log(myArr);

const newArr=myArr.join()
console.log(newArr);
console.log(newArr);

//slice,splice

console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3)
console.log(myn1);
console.log(myn2);
console.log("C",myArr);



