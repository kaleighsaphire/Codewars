/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

P: given a string of various words
R: the word that scores the most points
E: assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak'); 
PC: split string, map, word split forEach .charCodeAt(0) -96, reduce, math max array, get index, return index first array
*/

function high(x) {
    const arr1 = x.split(" ")
    const arr2 = arr1.map(e => [...e]
        .map(char => char.charCodeAt(0) - 96)
        .reduce((c, p) => p + c))
    let index = arr2.indexOf(Math.max(...arr2))
    return arr1[index]
}

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }