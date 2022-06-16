//Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
    let mean = nums.reduce((a, b) => a + b)
    return (mean / nums.length)
  }