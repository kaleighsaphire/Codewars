/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes 
cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return 
true, else return false.

P: given a string of letters or nums
R: true or false whether the string is 4 digits
E:
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
PC: regex test all chars are nums and length is 4 0or 6
*/
function validatePIN(pin) {
    return /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6)
}

