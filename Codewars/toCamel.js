// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// split(/-|_/)

// arr.map (element => str.charAt(0).toUpperCase() + str.slice(1))
// arr.join('')
// str.charAt(0) === arrStr.charAt(0) ? return arrStr : return arrStr.charAt(0).toLowerCase

function toCamelCase(str){
    let newStr = str.split(/-|_/).join('')
    if (str[0] === newStr[0]){
    return newStr
    }else{
    return newStr.charAt(0).toLowerCase() + newStr.slice(1)
    }
}
// Solution
function toCamelCase(str){
    let arr = str.split(/-|_/)
    let cap = arr.map(element => element.charAt(0).toUpperCase() + element.slice(1))
    let newStr = cap.join('')
    if (str[0] === newStr[0]){
        return newStr
        }else{
        return newStr.charAt(0).toLowerCase() + newStr.slice(1)
        }  
}
// refactored
function toCamelCase(str){
    let newStr = str.split(/-|_/).map(element => element.charAt(0).toUpperCase() + element.slice(1)).join('')
    if (str[0] === newStr[0]){
        return newStr
        }else{
        return newStr.charAt(0).toLowerCase() + newStr.slice(1)
        } 
}

// Alt 
// function toCamelCase(str){
//     var regExp=/[-_]\w/ig;
//     return str.replace(regExp,function(match){
//           return match.charAt(1).toUpperCase();
//      });
// }

// function toCamelCase(str){
//     return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
//   }