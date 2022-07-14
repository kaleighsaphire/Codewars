// You can print your name on a billboard ad. Find out how much it will cost you. 
// Each letter has a default price of £30, but that can be different if you are 
// given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 
// 20 letters * 30 = 600 (Space counts as a letter).
/*
Parameters: give a string and a number
Return: the number of characters in the string times the number without using the * operator
Example: ("kaleigh", 10) -> 70
Pseudo Code: name length divided by 1 divided by price
 */
function billboard(name, price = 30){
    return name.length/(1/price)
} 


function billboard(name, price = 30){

    var totalCost = 0;
    for(i=0; i<name.length; i++){
        totalCost += price;
    } 
    
    return totalCost;
    
    }

    function billboard(name, price = 30) {
        return name.split('').reduce((sum, letter) => sum + price, 0); 
      }