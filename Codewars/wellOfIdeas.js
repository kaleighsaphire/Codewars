// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 
// 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return '
// I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Paramaters: x is an array of strings
// Return: 'Publish!' if array contains 1-2 'good' strings, 'I smell a series!' if array contains > 2 'good', and 
// 'Fail!' if there are no good strings
// Example: ['bad'] -> 'Fail!' or ['good'] -> 'Publish!'
// Pseudo Code: if x.filter out good == 1-2 return publish, else if > 2 return series, else fail

function well(x){
    if (x.filter(e => e == 'good').length > 2){
        return 'I smell a series!'
    }else if (x.filter(e => e == 'good').length >= 1){
        return 'Publish!'
    }else{
        return 'Fail!'
    }
}

// Alt 
// const well = x => {
//     const good_count = x.filter(x => x == 'good').length;
//     return good_count < 1 ? 'Fail!' : 
//            good_count < 3 ? 'Publish!' : 'I smell a series!';
//   }