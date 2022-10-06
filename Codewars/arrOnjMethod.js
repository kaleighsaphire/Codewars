/*
Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a 
one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.
Parameters: given an array of arrays of numbers
Return: flattened array as string, in decending numerical order, with > separating nums
Examples:
bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
Pseudo code: concatenate array, sort b-a, join with ">"
*/

function bigToSmall(arr){
    let flatArray = [].concat.apply([], arr)
    return flatArray.sort((a,b)=>b-a).join(">")
}

function bigToSmall(arr){
    return [].concat.apply([], arr).sort((a,b)=>b-a).join(">")
}