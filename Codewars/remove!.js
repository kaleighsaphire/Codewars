// Write function RemoveExclamationMarks which removes all exclamation 
// marks from a given string.

function removeExclamationMarks(s) {
    return s.replace('!', '')
  }
// Must encase ! in /!/g to remove all instances!!
  const removeExclamationMarks = s => s.replace(/!/g,'')


//   Alt 
//   function removeExclamationMarks(s) {
//     return s.split('!').join('');
//   }