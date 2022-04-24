// Our football team finished the championship. 
// The result of each match look like "x:y". 
// Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts 
// the points of our team in the championship. Rules for counting 
// points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(game){
    let i = 0
    let points = 0
    // iterate through each points match up
    for (i; i < game.length; i++){
        // split each side of score
        let teamScore = game[i].split(':')
        // compare each side
        if (teamScore[0] > teamScore[1]){
            points += 3
        }else if (teamScore[0] == teamScore[1]){
            points += 1
        }else {
            points += 0
        }
    }
    return points;
}

// Alt 
// function points(games) {
//     // totalPoints will store the accumulated points
//     let totalPoints = 0;
      
//       // loop through the games array to get the scores
//       for(i=0; i<games.length; i++) {
     
//        // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
//         let xScore = Number(games[i].charAt(0)); 
//         let yScore = Number(games[i].charAt(2));
        
//         // Add points depending on the values of xScore compared to yScore
//         if (xScore > yScore) { totalPoints += 3; }
//         if (xScore < yScore) { totalPoints += 0; }
//         if (xScore === yScore) { totalPoints += 1; }
//       }
      
//       return totalPoints;
//     }