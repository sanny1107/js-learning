//DATE

const today=new Date();
let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate); //object
let mycreatedDate= new Date(2023,0,24,5,4);
let mycreatedDate= new Date("01-14-2023")
 console.log(mycreatedDate.toLocaleString());

let myTimeStamp= Date.now()

console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()

console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())

`${newDate.getDate()}and the time`


newDate.toLocaleString('default',{
    weekday:"long",
})

