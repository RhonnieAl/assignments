/**
Exercise 3:
Convert a sentence into a Newspaper Title by Uppercasing the 
first letter of every the words
*/

let sentence = "breaking news: pigs can indeed fly thanks to revolutionary science!";
let splitArray = sentence.split(" ") //the sentence is broken into individual words and stored in the array; splitArray
let capArray = [] //creation of an empty array to be filled with capitalised words later

splitArray.forEach(function(word){
    capArray.push(word[0].toUpperCase()+word.substring(1))
    //capitalises the first letter of every word returned by the forEach loop and pushed into the empty array; capArray
}) 
let newsTitle = capArray.join(" ") //converts the elements of capArray into a space seperated string
console.log(newsTitle)

















