// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), 
// write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose 
// the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"
/*
Parameters:given three paramters, first two are elevators one floors 0-2, last is the floor you are on btween 0-2
Return: if left is closest to call return left, if right is closest or both are equal distance return right
Example: See above
Pseudo Code: if call minus left is less than call minus right return left, else right
 */
function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
  }