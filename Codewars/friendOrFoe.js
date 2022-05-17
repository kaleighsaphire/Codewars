// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, 
// you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// Parameters: given an array of strings
// Return: all the strings in order that are 4 letters or str.length = 4
// Example: ['bob', 'sue', 'joey', 'carol', 'jose'] returns ['joey', 'jose']
// Pseudo Code: array.filter(elem => elem.length = 4)

function friend(friends){
    return friends.filter(elem => elem.length == 4)
  }

  // First try, so refactored:
  const friend = friends => friends.filter(e => e.length == 4)