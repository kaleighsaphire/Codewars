// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either 
// be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, 
//     this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

/*
Parameters: take in a gunners object 
Return: if all gunner props are 'aye return 'Fire!' else 'Shiver me timbers!'
Example: {'firstmate': 'aye', 'secondmate': 'nay' } -> 'Shiver me timbers!'
Pseudo Code: if object values include nay return shiver else fire
 */

const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay')? 'Shiver me timbers!':'Fire!';
   }