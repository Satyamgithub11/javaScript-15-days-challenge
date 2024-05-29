// day 2 operators and conditional statement

console.log("hello");  // to comment the single line comment.

//Artimetic operator
// let a = 5;
// let b = 4;

// console.log("a =", a, "& b =", b)
// console.log("a + b =" , a+b);
// console.log("a * b =", a*b);
// console.log("a-b =" , a-b);
// console.log("a / b =" , a/b);
// console.log("a % b =" , a%b);
// console.log("a ** b =" , a**b);

//unary operators
// let a = 6;
// let b = 3;
// console.log("a =",a, "& b =", b);
// a = a-1;
// b = b + 1;
// console.log("a =", a); //5
// console.log("b =" , b);

//comparison operators
// let a = 4;
// let b = 4;

// console.log("4 == 4", a==b); // the output is false.
// console.log("4 != 4", a !=b);

// let a = 5 ;
// let b = 2;

// console.log("5 != 2" , a!= b); // true

// let c = 5; //number
// let d = "5"; // string

// console.log("a == b", a == b);

// let a = 5;
// let b = "5";

//console.log("a == b", a == b);
//console.log("a === b ", a === b);
//console.log("a !== b ", a !== b);

// let a = 5;
// let b = 3;
// //console.log("a > b ", a > b);
// console.log("a < b ", a < b);
// console.log("a >= b ", a >= b);
// console.log("a <= b ", a <= b);

// question ---logical operators
let a = 6;
let b = 5;

let cond1 = a > b ;
let cond2 = a === 6;
//console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 = ", a < b || a === 6);
console.log(" !(6 < 5) =  ", !(a < b));
console.log("!(6 < 5) = ", !(a === 6));

//conditional statement
// let age = 25;

// if(age >= 18) {
//     console.log("You can vote")
// }

// if(age < 18) {
//     console.log("You cannot vote");
// }

// question2 ----> 
let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
}

if(mode === "light") {
    color = "white";
}

console.log(color);

// question 3 ---> 
// let color1 ;
// if (mode === "dark") {
//     color1 = "black";
// } else {
//     color1 = "white";
// }
// console.log(color1);

// // question 4 
// let Age = ("18");
// if(Age >= 18) {
//     console.log("vote");
// } else{
//     console.log("not vote")
// }

// question 5 else if statement
let age = prompt('Enter the age')

if(age < 18) {
    console.log("junior");
}
else if (age > 60) {
    console.log("senior");
}
else {
    console.log("middle");
}

// odd or even
let num = 9;
if(num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
};


