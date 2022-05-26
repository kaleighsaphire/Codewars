// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    const y = x.split('').reverse().join('').toLowerCase()
    return y == x.toLowerCase();
  }