/* Create a function strCount (takes an object as argument) 
that will count all string values inside an object.

Parameters: given an object
Return the number of string values in object
Example: 
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }) => returns 3
  Pseudo Code: declare counter, for each key in object that,
  typeof == 'string', count ++, return count
  ** Have to test for nest object as well: if type of object of key
  == 'object', count += current function key
  */

function strCount(obj){
    let count = 0
    for(let i in obj){
        if (typeof obj[i] == 'object'){
            count += strCount(obj[i])
        }
        if (typeof obj[i] == 'string'){
            count += 1
        }
    }
    return count;
}

function strCount(obj){
    let count = 0;
    for (key in obj) {
      if (typeof obj[key] == 'string') count++;
      if (typeof obj[key] == 'object') count += strCount(obj[key]);
    }
    return count;
  }