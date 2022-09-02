/* You probably know the "like" system from Facebook and 
other pages. People can "like" blog posts, pictures or 
other items. We want to create the text that should be 
displayed next to such an item.

Implement the function which takes an array containing 
the names of people that like an item. It must return 
the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

Parameters: Given and array of names(or empty)
Return: A string stating the names of people in array
Example: ["Tim", "Jo", "Ben", "Val"] => "Tim, Jo and 2 others like this"
Pseudo code: if array length < 2, return template literal `${noone or name} likes this`, 
else return `${arr.length == 2 ? arr[0] and arr[1]: arr.length == 3 ? arr[0], arr[1] and arr[2]: 
arr[0], arr[1] and 2 others} like this` 
** need to count array.length minus 2 for number of others who like string
*/

function likes(names) {
   if (names.length < 2){
    return `${names.length==0? "no one":names[0]} likes this`
   }else if(names.length == 2){
    return `${names[0]} and ${names[1]} like this`
   }else{
    return `${names[0]}, ${names[1]} and ${names.length < 4 ? names[2]:(names.length-2).toString() + " others"} like this`
   }
  }