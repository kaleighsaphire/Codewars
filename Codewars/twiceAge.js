// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son 
// (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // difference between fathers age and twice son's age
    let difference = (sonYearsOld * 2) % dadYearsOld
    // if the difference if greater or equal to son's age then father was twice 
    // age in past not future. So subtract difference from father's current age.
    if (difference >= sonYearsOld){
      return dadYearsOld - difference;
    }else{
      return difference;
    }
 }

//  Alt 
//  function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs(dadYearsOld - 2 * sonYearsOld);
//   }
