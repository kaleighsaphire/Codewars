// Task
// Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

// You need to the traverse the obj, if the length of the object key equals to 5, then push the 
// key value to the array (you need to define the array by yourself, this time I won't help you). 
// Additionally push the value to the array as well, if the length of the value is equal to 5.

// Return the five after works finished.

// You should use for..in in your code, otherwise, your solution may not pass this kata. 
// Don't learn bad habits from those lazy guys ;-)

// Parameters: given an object
// Return: if length of obj.key or key.value == 5 push key value to array and return
// example: {this: "kata", iskinda: "annoying", to: "understand", heres: "five", letters: "words"}  -> ["heres", "words"]
// Pseudo Code: define array, if key. length == 5, push to array, if key value.length == 5 push to array

function giveMeFive(obj){
    let arr = []
    for (let key in obj){
      if (key.length == 5){
          arr.push(key)
         }
       if (obj[key].length == 5){
           arr.push(obj[key])
       }  
    }
    return arr;
  }

//   Alt 
//   function giveMeFive(obj){
//     var five=[];
//     for (var key in obj) {
//       if (key.length==5) five.push(key);
//       if (obj[key].length==5) five.push(obj[key]);
//     }
//     return five;
//   }