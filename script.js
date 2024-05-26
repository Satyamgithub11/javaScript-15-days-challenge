// Day 1 in Js  Variable and Data Type
// here is my first code in javascript
// console.log("Welcome to our college");
// console.log("Satyam Kumar");
// console.log("I love javascript")

// //
// name = "tony stark";
// console.log(name);

// //
// age = 24;
// console.log(age);

// //
// price = 45;
// console.log(price)

// // 
// x = null;
// console.log(x);

// // 
// y = undefined;
// console.log(y);

// // fullName = "satyam";
// // fullname = "Satyam Kumar";

// // console.log(fullname);
// // console.log(fullName);

// var fullName = "Tony Stark";
// var age = 24;
// var totalPrice = 67.80

// console.log(age);
// console.log(totalPrice);
// console.log(fullName);

// const PI = 3.14;
// console.log(PI)


// isFollow = true;

// x = null;

let y = BigInt("123");


//question 1
const student = {
    fullName : "Satyam kumar",
    age : 24,
    cgpa : 7.26,
    isPass: true,
};

student ["age"] = student["age"] + 1;
student["name"] = "satyam choudhary";

console.log(student["name"])

// question 2 create a const object called "product" to store information shown in this picture.
const product = {
    name : 'parker jotter',
    price : 270,
    review : 4.3,
    offer: 5
};

console.log(product)

//question 3 : create a const "profile" to store information shown in this picture

const profile = {
    userName : "Shradha Khapra",
    post : 195,
    follower : 596,
    following : 4,
    isFollow : true,
};

console.log(profile);