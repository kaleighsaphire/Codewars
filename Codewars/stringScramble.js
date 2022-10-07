/*
Complete the function scramble(str1, str2) that returns true if a portion 
of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits 
will be included.
Performance needs to be considered.
Parameters: given 2 strings
Return: whether any part of first string can be reaaranged into second
Example: scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
Pseudo Code: hashmap each string, for each key in second hashmap,
if it does not exist or first hash key is less than second key, 
return false
else true
*/
/*
function scramble(str1, str2) {
    const obj1 = {};
    str1.split('').forEach(c => obj1[c] = (obj1[c] || 0) + 1);
    return str2.split('').every(c => obj1[c]--);
  }
  */
function scramble(str1, str2){
    let hashmap = {}
    let hashmap2 = {}

    for (const e of str1){
        if(!hashmap[e]){
            hashmap[e] = 0
        }
        hashmap[e]++
    }
    for (const e of str2){
        if(!hashmap2[e]){
            hashmap2[e] = 0
        }
        hashmap2[e]++
    }

    for (key in hashmap2){
        if(!hashmap[key] || hashmap[key] < hashmap2[key]){
            return false
        }
    }
    return true
}

function scramble(str1, str2){
    let hashmap = {}
    let hashmap2 = {}

    for (const e of str1){
        hashmap[e] = (hashmap[e] || 0) + 1
    }
    for (const e of str2){
        hashmap2[e] = (hashmap2[e] || 0) + 1
    }

    for (key in hashmap2){
        if(!hashmap[key] || hashmap[key] < hashmap2[key]){
            return false
        }
    }
    return true
}