/*
Your task is to sort a given string. Each word in the string 
will contain a single number. This number is the position the 
word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The 
words in the input String will only contain valid consecutive numbers.

P: given a string, either empty or containing words with numbers 1-9
R: return either empty string or the words rearranged in acending order of the contained nums
E: 
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
PC: if words isnt empty, declare array, split words into diff array,
for each word in array, declare index equal to the number contained 
in the word using regex, push word to array at index minus 1,
join array and return
*/

function order(words) {
    if (words) {
        let array = []
        words.split(" ").forEach(e => {
            let i = Number(e.match(/\d/g))
            array[i - 1] = e
        })
        return array.join(" ")
    } else {
        return words
    }
}


// function order(words){
  
//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   } 