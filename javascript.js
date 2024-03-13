// javascript.js

function favoriteAnimal(animal)
{
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number)
{
    return number + 7;
}
console.log(add7(5));

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b)
{
    return a * b;
}
console.log(multiply(4, 5));

// Write a function called capitalize that takes a string 
// and returns that string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(word)
{
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("lowercase"));
console.log(capitalize("UPPERCASE"));
console.log(capitalize("BoTh"));

// Write a function called lastLetter that takes a string 
// and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(words)
{
    return words.slice(-1);
}
console.log(lastLetter("abcd"));
