// There are pillars near the road. The distance between the pillars is the same 
// and the width of the pillars is the same. 
// Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters 
// (without the width of the first and last pillar).
/* Parameter: given 3 nums, 
#pillars > 1, 
distance between pillars (between 10 and 30 meters), 
and width of pillars (between 10 and 50 cm)
Return: the distance between the first and last pillar in cm, not including their width
Example: (3, 10, 10) -> 2010cm
Pseudo Code: multiply number of pillars, minus 1, times distance, times 100, 
plus number of pillars, minus 2, times width ...if pillars >= 2, else return 0 */

function pillars(num_pill, dist, width) {
    if (num_pill >= 2){
    return (num_pill -1)*dist*100 + (num_pill -2)*width;
    }else{
      return 0;
    }
}

function pillars(num_pill, dist, width) {
    return num_pill >= 2 ? (num_pill -1)*dist*100 + (num_pill -2)*width : 0;
}