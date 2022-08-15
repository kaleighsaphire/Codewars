// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal (string) {
    if (string.length > 0){
      return string.split('').map(char => char.charCodeAt(0))
      .reduce((current, previous) => previous + current)
      }else{
        return 0;
      }
  }

  function uniTotal(string) {
    return Array.prototype.reduce.call(string, (a, c) => a + c.charCodeAt(0), 0);
  }