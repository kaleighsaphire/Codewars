// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice 
// and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the 
// hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15
// Parameters: takes in a number and another number from from 1-6
// Returns: first number plus 2 times second number
// Example: (2,4) returns 10
// Pseudo Code: return a +=(b*2)

function move (position, roll) {
    return position +=(roll*2)
  }

//   Alt 
//   const move = (position, roll) => position + roll * 2