// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// Parameters: take in a string with accents
// Return: string without accents
// Example: see above
// Pseudo Code: create object to match character, split string into array, map elements and convert, join back to string

let convert = {
    'ę': 'e', 
    'ą': 'a', 
    'ć': 'c', 
    'ł': 'l', 
    'ń': 'n', 
    'ó': 'o', 
    'ś': 's', 
    'ź': 'z', 
    'ż': 'z'
   }
function correctPolishLetters (string) {
 return string.split('').map((char) => convert[char] ? convert[char] : char).join('')
}

// Alt 
// var mapping = {
//     'ą': 'a',
//     'ć': 'c',
//     'ę': 'e',
//     'ł': 'l',
//     'ń': 'n',
//     'ó': 'o',
//     'ś': 's',
//     'ź': 'z',
//     'ż': 'z',
//   };
  
//   function correctPolishLetters(text) {
//     return text.split('').map(c => mapping[c] || c).join('');
//   }