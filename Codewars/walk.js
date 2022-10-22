/*
You live in the city of Cartesia where all roads are laid out 
in a perfect grid. You arrived ten minutes too early to an 
appointment, so you decided to take the opportunity to go for 
a short walk. The city provides its citizens with a Walk Generating 
App on their phones -- everytime you press the button it sends you 
an array of one-letter strings representing directions to walk 
(eg. ['n', 's', 'w', 'e']). You always walk only a single block 
for each letter (direction) and you know it takes you one minute 
to traverse one city block, so create a function that will return 
true if the walk the app gives you will take you exactly ten minutes 
(you don't want to be early or late!) and will, of course, return 
you to your starting point. Return false otherwise.

P: given an array of directions, each direction takes 1 min
R: true if walk takes exacly 10 mins and you end up in the same spot
E:  assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
    PC: e == w, n == s, and array length == 10
*/
//if n/s are == and e/w are equal
// array length should be 10

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    } else {
        return walk.filter(e => e == 'n').length === walk.filter(e => e == 's').length && walk.filter(e => e == 'w').length === walk.filter(e => e == 'e').length
    }
}
