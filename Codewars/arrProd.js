/* Calculate the product of all elements in an array.

If the array is null or is empty, the function should 
return null.
 Parameters: given an array
 Return: null if empty or the product of all the numbers
 Example: ([]) => null
 ([2,3,4]) => 24
 Pseudo Code: arr.length < 0 return array reduce, else null
 */

 function product(values) {
    if (values == null || values.length < 1){
        return null
    }else{
        return values.reduce((a,b)=>a*b)
    }
 }