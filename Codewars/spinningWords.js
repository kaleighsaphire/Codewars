/*
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter 
words reversed (Just like the name of this Kata). Strings passed 
in will consist of only letters and spaces. Spaces will be included 
only when more than one word is present.

P: given a string of words with varying lengths, no symbols
R: the same string with any words 5 char+ reversed
E: 
"Hey fellow warriors" => returns "Hey wollef sroirraw" 
"This is a test" => returns "This is a test" 
"This is another test" => returns "This is rehtona test"
PC: split string at space, loop, if element length is 5+, split, join reverse,
join array and return
*/

function spinWords(string) {
    const array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
        array[i].length >= 5 ? array[i] = array[i].split("").reverse().join("") : array[i];
    }
    return array.join(" ")
}