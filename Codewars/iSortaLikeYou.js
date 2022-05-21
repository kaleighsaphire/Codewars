// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, 
// saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a 
// flower of a given number of petals, where nb_petals > 0.

// Paramaters: given a number representing petals
// Return: response for given number of petals
// Example: (3) -> 'a lot'
// Pseudo Code: assign each possible response a number, nbpetals % 6 == response

function howMuchILoveYou(nbPetals) {
  const response = {
    0: 'not at all',
    1: 'I love you',
    2: 'a little',
    3: 'a lot',
    4: 'passionately',
    5: 'madly'
  } 
  return response[nbPetals % 6];   
}
