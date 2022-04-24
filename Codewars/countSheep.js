// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, 
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

// function countSheep(num){
//     if (num > 0){
//      let x = 1
//      do { 
//         return num.toString() + ' sheep...'
//         x++;
//      }
//      while (x <= num)
//    }else{
//      return ''
//    }
//   }
  // returns 1 iteration

  function countSheep(num){
      let string = ''
      for(let i = 1; i <= num; i++){
          string+= `${i} sheep...`
      }
      return string;
  }

//   Alt 
//   const countSheep = num =>
//   num ? countSheep(num - 1) + num + ' sheep...' : ''

