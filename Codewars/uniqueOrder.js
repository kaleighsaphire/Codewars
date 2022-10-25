/*
Implement the function unique_in_order which takes as argument 
a sequence and returns a list of items without any elements with 
the same value next to each other and preserving the original 
order of elements.

P: given a string or array
R: array with separated elements, reduced to one if more than one of the same 
appears beside itself
E: uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
PC: type of == string, split, declare new array, loop through if e != previous
push
*/

const uniqueInOrder = iterable => {
    let array = []
    typeof iterable == "String" ? iterable.split("") : iterable

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i - 1]) {
            array.push(iterable[i])
        }
    }
    return array
}