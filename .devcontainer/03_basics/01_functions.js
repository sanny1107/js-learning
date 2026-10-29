 function SayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("I");
    console.log("R");
 }


 SayMyName()

function AddTwoNumber(number1,number2){
   console.log(number1+number2);
}
AddTwoNumber(3,5)

 function AddTwoNumber(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
 }
 const result=AddTwoNumber(3,5)
 console.log("Result: ",result);

 function loginUserMessage(username ="sanny"){
    if(username===undefined){
        console.log("please enter a username");
        return 
        
    }
    return`${username}just logged in`
 }
console.log( loginUserMessage("Sanny"));
console.log(loginUserMessage())



function calculateCartPrice(val1,val2,...num1){
   return num1
}
console.log(calculateCartPrice(200,300,400,5677));

const user={
   username:"sanny",
   price:999
}

function handleObject(user){
   console.log(`username is ${user.username} and price is ${user.price}`);
}

//handleObject(user)
handleObject({
   username:"sanny",
   price:999
})


const myNewArray=[200,300,400,100]
function returnSecoundValue(getArray){
   return getArray[1]
}
console.log(returnSecoundValue(myNewArray));
console.log(returnSecoundValue([200,300,400,500,600]));
