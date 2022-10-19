/*
The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character 
appears only once in the original string, or ")" if that character 
appears more than once in the original string. Ignore capitalization 
when determining if a character is a duplicate.

P: Given a string of various letters and char
R: if the char occurs more than once, case insensitive, replace with ")" if it only appears once replace with "("
return bracket string of replacements
E: 
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
PC: string to lowercase, declare new string to hold brackets, loopthrough orig string, 
check for repeating characters, if last indexof == current add ( to string, else add )

*/

function duplicateEncode(word) {
    word = word.toLowerCase()
    let encodedString = ''

    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
            encodedString += '('
        } else {
            encodedString += ')';
        }
    }
    return encodedString
}
