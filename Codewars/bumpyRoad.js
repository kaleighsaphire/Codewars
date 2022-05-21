// Your car is old, it breaks easily. The shock absorbers are gone and you think 
// it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or 
// bumps ("n"), work out if you make it home safely. 15 bumps or under, 
// return "Woohoo!", over 15 bumps return "Car Dead".

// Parameters: string containing 'n' and/or '_'
// Return: "Woohoo!" if '_' or 'n' <= 15, else "Car Dead"
// Example: ('nnnnnnnnnnnnnnnn') -> "Car Dead" or ('____n') -> "Woohoo!"
// Pseudo Code: bumps = split out "n".length if bumps <=15 return wohoo else car dead

function bump(x){
    const bumps = x.split('n').length -1

    if (bumps <= 15){
        return "Woohoo!";
    }else{
        return "Car Dead";
    }
}

// Alt 
// const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"