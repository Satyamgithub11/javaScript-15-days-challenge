// write a javascript function to check whether a number is even or odd
// here is the 1st method to write this program.
// let number = prompt("Enter a number");

// if (number % 2 === 0) {
//     console.log("This is Even number")
// } else {
//     console.log("This is odd number")
// }

// here is the 2nd method to write this program.
function checkEvenorodd(num) {
    if (num % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenorodd(4));
console.log(checkEvenorodd(7));

// question 2 ----> write a program to check if a given year is a leap year ? 
function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true ;
    } else {
        return false;
    }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));

// question 3 ---> write a function that takes three number as parameter and returns the maximum of the three.
function findMax (num1, num2, num3) {
    return Math.max(num1 , num2 , num3);
}

console.log(findMax(10 , 4,8));
console.log(findMax(-2, 5, 7));