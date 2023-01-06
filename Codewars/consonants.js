/*Write a function consonantCount, consonant_count or ConsonantCount that takes a string 
of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
P: given a string of varying characters
R: the number of consonants in the string
E: (''), 0, 
('aaaaa'), 0, 
('XaeiouX'), 2,
('Bbbbb'), 5, 
('helLo world'), 7, 
('h^$&^#$&^elLo world'), 7, 
('0123456789'), 0, 
('012345_Cb'), 2,
PC: string to lowercase, regex of consonants, match. if matches ? return length else 0
*/

function consonantCount(str) {
    str = str.toLowerCase()
    let regex = /[bcdfghjklmnpqrstvwxyz]/gi
    let consonants = str.match(regex)
    return consonants ? consonants.length : 0;
}

function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}