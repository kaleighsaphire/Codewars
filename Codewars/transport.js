// After a hard quarter in the office you decide to get some rest on a vacation. 
// So you will book a flight for you and your girlfriend and try to 
// leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. 
// The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, 
// you get $50 off your total. Alternatively, if you rent the car for 3 or more days,
//  you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// day + 40
// day*7 - 50 or day*3 - 20

function rentalCarCost(d) {
    let total = 0
    if (d >= 7){ 
      total = d*40 -50 
    }else if (d >= 3){
      total = d*40 -20 
    }else{
      total = d*40
    }
  return total
  }

  function rentalCarCost(d) {
    let total = 0
    return d >= 7 ? total = d*40 -50
    : d >= 3 ? total = d*40 -20 
    : total = d*40

  }

  function rentalCarCost(d) {
    let total = d*40
    return d >= 7 ? total -50
    : d >= 3 ? total -20 
    : total
  }


//   Alt 
//   function rentalCarCost(d) {
//     return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
//   }