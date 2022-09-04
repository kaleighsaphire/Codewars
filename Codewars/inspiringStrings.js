/* When given a string of space separated words, return the word 
with the longest length. If there are multiple words with the longest 
length, return the last instance of the word with the longest length.

Parameters: given a string of words
Return: the longest word, if there is more than 1 longest word, rturn the last
Example: "this is a sentence" => "sentence"
"words house books cats plant" => "plant"
Pseudo Code: split string, reduce array, element length is greater than next element length,
return it, else return the next
*/

function longestWord(stringOfWords){
    return stringOfWords.split(' ').reduce((a,b) => a.length > b.length ? a : b)
}

function longestWord(str){
    return str.split(' ').sort((b, a) => b.length - a.length).pop();
  }