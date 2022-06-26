// Complete the function, which calculates how much you need to tip based on the total 
// amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised 
// rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, 
// regardless of the service.

/* Parameters: given bill and service quality
Return: tip rounded up to nearest dollar
Example: (24, poor) -> return whatever 5% of 24 is
Pseudo Code: Switch case, amount X % math.ceil */

function calculateTip(amount, rating) {
    switch (rating.toLowerCase()){
        case 'terrible':
            return Math.ceil(amount * 0)
        case 'poor':
            return Math.ceil(amount * .05)
        case 'good':
            return Math.ceil(amount * .1)
        case 'great':
            return Math.ceil(amount * .15)
        case 'excellent':
            return Math.ceil(amount * .2)
        break;
        default:
            return "Rating not recognised"
    }
}
