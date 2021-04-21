
// Write a program a that counts the length of text and the 
// characters remaining in the tweet

var tweet = prompt("Tweet here"); 

var tweetLimit = 140 ; 

var charRemaining = tweetLimit - tweet.length ;  

alert("Your tweet is "+ tweet.length + " characters long and you have " 
+ charRemaining + " characters remaining ");  

alert("Only following is allowed due to character limit: "+ tweet.slice(0,tweetLimit));
