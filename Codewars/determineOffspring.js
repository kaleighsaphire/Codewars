
// Determine if the sex of the offspring will be male or female based on the 
// X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return 
// "Congratulations! You're going to have a daughter."; 
// If the sperm contains the Y chromosome, return 
// "Congratulations! You're going to have a son.";

/* Parameters: given a string either 'XX' or 'XY'
Return: if male or female
Example: ('XX') -> "Congratulations! You're going to have a daughter."
Pseudo Code: if string includes 'Y' return male else female */

function chromosomeCheck(sperm) {
  return sperm.includes('Y') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
}

Alt 
function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
  }