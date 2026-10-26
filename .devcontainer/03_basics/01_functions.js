 function SayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("I");
    console.log("R");
 }


//  SayMyName()

// function AddTwoNumber(number1,number2){
//    console.log(number1+number2);
// }
// AddTwoNumber(3,5)
 function AddTwoNumber(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
 }
 const result=AddTwoNumber(3,5)
 console.log("Result: ",result);

 function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return 
        
    }
    return`${username}just logged in`
 }
console.log( loginUserMessage("Sanny"));
console.log(loginUserMessage())
