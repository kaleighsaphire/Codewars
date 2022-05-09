// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// This returns anything not a number!
// function filter_list(l) {
//     return l.filter(a => isNaN(a))
//   }
// This returns anything that is a number
function filter_list(l) {
    return l.filter(a => typeof a === 'number')
 }

 const filter_list = l => l.filter(a => typeof a === 'number')

//  Alt 
//  function filter_list(l) {
//     return l.filter(e => Number.isInteger(e));
//   }