/*
Can you implement a function that will return number of words in a string?
*/

function countWords(str) {
    let words = str.match(/\S+/g);
    return words ? words.length : 0;
}