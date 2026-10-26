// singleton
//object.create
//object literals



const mySym=Symbol("key1")


const jsuser={
    name:"sanny",
    "full name":"sanny soni",
    [mySym]:"mykey1",
    age:21,
    location:"bhopal",
    email:"sanny@google.com",
    isloggedIn:false,
    lastLoggedInDay:["monday","saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"])
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email="sanny@1233gmail.com"
// Object.freeze(jsuser)
jsuser.email="sanny.chatgpt.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}


jsuser.greetingTwo=function(){
    console.log(`Hello js User,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

