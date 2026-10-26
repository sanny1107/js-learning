//singleton

// const tenderuser=new Object()
const tenderuser={}
tenderuser.id="sanny123"
tenderuser.name="sanny"
tenderuser.isloggedIn=false

// console.log(tenderuser);

const regularUser={
    email:"gfdsa@sddf.com",
    fullname:{
        usersfullname:{
            firstname:"sanny",
            lastname:"soni"
        }
    }
}
// console.log(regularUser.fullname.usersfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj3={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);

const user=[
    {
        id:1,
        email:"sanny@123gmail.com"
    },
    {
        id:2,
        email:"fdsasd@234gmail.com"

    }
]

user[1].email
console.log(tenderuser);

console.log(Object.keys(tenderuser));
console.log(Object.values(tenderuser));
console.log(Object.entries(tenderuser))

// console.log(tenderuser.hasOwnproperty(isloggedIn));

const course={
    coursename:"javascript",
    price:"999",
    courseinstructor:"Sudhir"
}
//course.courseinstructor
const {courseinstructor:instructor}=course
// console.log(courseinstructor);

console.log(instructor);

   