// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire 
// poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups 
// takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to 
// complete, and the time in minutes he has to complete them. Your function should return how many mistakes 
// Alex can afford to make.
/*
Parameters: given a number of katas, and time he has to complete them
Return: max number of mistakes possible to complete in time
Example: (1, 10) -> 0
(10, 65) -> 1
Pseudo Code: 10 katas per 60 minutes, 6 mins per kata, time minus (6*kata) equals leftover time
 */

function alexMistakes(numberOfKata, timeLimit){
   const time = timeLimit - (numberOfKata*6)
   let mistakes = 0
   let mistakeTime = 5
   while(time >= mistakeTime){
    mistakes = mistakes +1
    mistakeTime = mistakeTime*2
   }
   return Math.abs(mistakes); 
}