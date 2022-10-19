/*
In DNA strings, symbols "A" and "T" are complements of each 
other, as "C" and "G". Your function receives one side of the 
DNA (string, except for Haskell); you need to return the other 
complementary side. DNA strand is never empty or there is no 
DNA at all (again, except for Haskell).

P: Given a string, only containing "ATCG"
Return: The complementary string replacing each char with its alternate
E:
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
PC: loop string, replace char
*/

function DNAStrand(dna) {
    dna = dna.split("")
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            dna[i] = dna[i].replace("A", "T")
        } else if (dna[i] === "T") {
            dna[i] = dna[i].replace("T", "A")
        } else if (dna[i] === "G") {
            dna[i] = dna[i].replace("G", "C")
        } else {
            dna[i] = dna[i].replace("C", "G");
        }
    }
    return dna.join("")
}


// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }