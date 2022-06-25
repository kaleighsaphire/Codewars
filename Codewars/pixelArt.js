// To help decide those things you've decided to write a function, is_divisible() that will tell you whether a 
// wall of a certain length can exactly fit an integer number of pixels of a certain length.

// Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in 
// millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it 
// should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

// >>> def equals_three(num):
// >>>     return num == 3
// >>> equals_three(5)
// False
// >>> equals_three(3)
// True

function isDivisible(wallLength, pixelSize){
    return Number.isInteger(wallLength / pixelSize)
  }
