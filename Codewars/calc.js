/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

P: given three values, 2 nums and an operation
R: if first 2 args and last is operation return the result of the operation of first num on sec, else "unknown value"
E: calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
PC: if first 2 args are numbs and last is operation 
*/

function calculator(a, b, sign) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "unknown value"
    } else if (sign == "+") {
        return a + b
    } else if (sign == "-") {
        return a - b
    } else if (sign == "*") {
        return a * b
    } else if (sign == "/") {
        return a / b
    } else {
        return "unknown value"
    }
}

// function calculator(a,b,sign){
// 	if ((typeof a === "number") && (typeof b === "number")) {
//     switch (sign) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     }
//   }
//   return "unknown value";
// }