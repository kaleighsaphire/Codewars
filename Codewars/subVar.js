// Complete the solution so that it returns a formatted string. 
// The return value should equal "Value is VALUE" where value 
// is a 5 digit padded number.
/*
Parameters: given a number
Return: the number padded to 5 spaces
Example: (908) -> "Value is 00908"
Pseudo Code: if value to string is less than 5, pad start */

function solution(value){
    if (String(value).length == 5){
        return "Value is " + value
    }else{
       return "Value is " + String(value).padStart(5, "0")
    }  
  }
  
const solution = value => String(value).length == 5 ? "Value is " + value : "Value is " + String(value).padStart(5, "0");

function solution(value){
    return `Value is ${String(value).length == 5 ? value : String(value).padStart(5, "0")}`
}
