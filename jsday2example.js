// operators and conditions statements 
// 20 question 
// write a javascript function to check whether a number is even or odd.
// let number = prompt("Enter a number");

// if ( number % 2 === 0) {
//     console.log("This is even")
// } else{
//     console.log("This is odd")
//}


// question 2 -> create a program that check if a given year is leap year
function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2022));
console.log(isLeapYear(2024));

// write a function that takes three number as parameters and return the maximum of the three.
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(findMax(3, 5,8));

// write a program to calculate the factorial of a given number
function factorial(number){
    if(number === 0){
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(9));
console.log(factorial(3));


// print all even numbers from 0 to 100
