// Write a function cakes(), which takes the recipe (object) and the available ingredients 
// (also an object) and returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are 
//     simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, 
//     milk: 2000}); 
/*
Parameters: given 2 objects, a recipe and a list of ingredients, keys are ingredients, values are amounts
Return: the number of completed recipe(object 1) that can be made with the ingredients(object 2)
Examples: see above
Pseudo Code: create an array for the amount that can be made, loop through the items in the recipe,
 start tally of cakes made, while the ingredients elements are more than the recipe elements, subtract recipe
 element from ingredient element and store in a temporary value, the ingredient now equals the temp
 value, add to cake tally, push to amount array, return min number of recipe completed*/

 function cakes(recipe, available) {
    let maximumCakes = []
    for(const ingredient in recipe){
      let numberOfCakes = 0
      while(available[ingredient] >= recipe[ingredient]){
        let tempNumOfAvail = available[ingredient] - recipe[ingredient]
        available[ingredient] = tempNumOfAvail
        numberOfCakes++
      }
      maximumCakes.push(numberOfCakes)
    }
    return(Math.min(...maximumCakes))
  }

  // alt
  function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }

  const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )