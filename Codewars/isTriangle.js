// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built 
// with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 
//     to be accepted).

// if a + b > c, b + c > a, and c + a > b
function isTriangle(a,b,c){
    if(a + b > c &&
      b + c > a &&
      c + a > b) {
      return true 
    }else{
      return false
    }   
}

// alt 
// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }