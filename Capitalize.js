/* Take an input, if lowercase; capitalize it */

var name = prompt("Enter your name: ")

// UpperCase edge case quashed. 
name = name.toLowerCase(); 

var firstLetterName = name.slice(0,1) ;

var RemLetterName = name.slice(1, name.length) 

alert("Hello, "+ firstLetterName.toUpperCase() + RemLetterName.toLowerCase()); 
