/* If we list all the natural numbers below 10 that are multiples of 
3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples 
of 3 or 5 below the number passed in. Additionally, if the number 
is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. 

Parameters: given a number
Return: return the sum of all the multiples of 3 and 5 below the number passed in, 
If the number is negative return zero
Example: (15) => (3,5,6,9,10,12) => 45
(-15) => 0
Pseudo Code: if the number < 4 return 0, else start a counter up to the number,
if a number mod 3 or 5 equals 0 push to array, sort out any duplicate numbers,
reduce array and return answer
*/
function solution(number){
    const arr = []
    if (number < 4 ){
        return 0;
    }else{
        for(let i = 0; i < number; i++){
            if(i % 3 == 0 || i % 5 == 0){
                arr.push(i)
            }
        }
        return arr.reduce((a,b)=>a+b, 0)
    } 
}