/* In this Kata, you will be given an array of numbers in 
which two numbers occur once and the rest occur only twice. 
Your task will be to return the sum of the numbers that occur only once.

Parameters: given an array of numbers
Return: the sum of the two numbers that dont repeat
Example: ([4,5,7,5,4,8]) -> 15
Pseudo Code: filter array for numbers where indexOf = lastIndexOf, the reduce and return
*/
function repeats(arr){
     return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a, b) => a + b);
}