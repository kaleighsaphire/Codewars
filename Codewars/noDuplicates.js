/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. 
P: Given a string of words
R: the string with duplicate words removed
E: "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Pc: split into array, filter e != 
*/



const removeConsecutiveDuplicates = s => s.split(" ").filter((e, i) => e !== s.split(' ')[i + 1]).join(" ");

//const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");