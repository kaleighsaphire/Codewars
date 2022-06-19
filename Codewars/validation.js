// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

/*  Parameters: given a username
    Return: true if name meets requirements, false otherwise
    Example: (HeLlO!) -> false
            (cat) -> false
            (midna_1) -> true
    Pseudo Code: figure out how regex works...
*/
function validateUsr(username) {
    const res =  /^[a-z0-9_]{4,16}$/.test(username) 
    return res;
}