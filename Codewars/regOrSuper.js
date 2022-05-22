// Create a class Ball. Ball objects should accept one argument for "ball type" 
// when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of 
// "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// Parameter: create object that is default reg or takes in super
// Return: an object ball type of regular in default
// Example: ball3 = new Ball("Superly super?") -> ball3.ballType ->  "Superly super?"
// Pseudo Code: create a Ball class object with one argument of ballType: 'regular'

var Ball = function(ballType) {
    this.ballType = ballType ? ballType : "regular";
  };

//   Alt 

//   class Ball {
//     constructor(ballType = "regular") {
//       this.ballType = ballType;
//     }
//   }