/*
Remove all exclamation marks from the end of sentence.
*/

function remove(string) {
    while (string.endsWith("!")) {
        string = string.slice(0, -1)
    }
    return string
}