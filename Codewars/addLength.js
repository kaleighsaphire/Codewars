// What if we need the length of the words separated by a space to be added at the end of 
// that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the 
// length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.
/* Parameters: string of words
Return: an array with each word, followed by a space and the length of the word
Example: ("this is a string") -> ["this 4", "is 2", "a 1", "string 6"]
Pseudo code: split string, map each element to add length*/

function addLength(str) {
    const arr = str.split(' ')
    return arr.map((e) => e += " " + e.length)
    }

    function addLength(str) {
        return str.split(' ').map((e) => e += " " + e.length)
        }