// You are given the length and width of a 4-sided polygon. 
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, 
// return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that 
// it is a square if its length and width are equal, 
// otherwise it is a rectangle.

// So if length and width are =, return length * width.
// if length and width are not =, return length * 2 + width *2

const areaOrPerimeter = function(l , w) {
    if ( l === w){
        return l * w
    }else{
        return (l * 2) + (w * 2)
    }
  };


//   Alt 

//   const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };