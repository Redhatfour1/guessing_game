'use strict';

// var userName = prompt('What\'s your name?');
// alert('Hello ' + userName + '. Thanks for coming to my site!');
// console.log('The user name is: ' + userName);
// // We want to ask the user a question
// // Take their answer as input; stored in a var
// // Validate that their answer matches my answer
// // Depending on true or False, provide feedback
// var answerOne = prompt('What city was I born in?').toUpperCase();
// console.log('The answer to question one is: ' + answerOne);
// var myAnswerOne = 'philadelphia';
//
// if(answerOne === myAnswerOne || 'philly') {
//   alert('You got it right. I was born in Philly!');
// } else {
//   alert('Sorry, that\'s wrong. I was born in Philadelphia');
// }
//
// var answerTwo = prompt('What brought me to Washington?').toUpperCase();
// console.log('The answer to question two is: ' + answerTwo);
// var myAnswerTwo = 'military';
//
// if(answerTwo === myAnswerTwo || 'navy') {
//   alert('You are correct. I am a US Navy Vet and I was stationed in Bremerton WA!');
// } else {
//   alert('Ahh, that\'s incorrect. I am a US Navy Vet and I was stationed in Bremerton WA!');
// }
//
// var answerThree = prompt('What business have I owned?').toUpperCase();
// console.log('The answer to question three is: ' + answerThree);
// var myAnswerThree = 'MOVING';
//
// if(answerThree === myAnswerThree) {
//   alert('You are correct. I\'ve owned a moving company!');
// } else {
//   alert('Oh no, that\'s incorrect. I\'ve owned a moving company!');
// }
//
// var answerFour = prompt('What profession have I spent most of my career in?').toLowerCase();
// console.log('The answer to question four is: ' + answerFour);
// var myAnswerFour = 'sales';
//
// if(answerFour === myAnswerFour) {
//   alert('You are correct. I have a background in sales!');
// } else {
//   alert('Oh no, that\'s incorrect. I have a background in sales!');
// }
//
// var answerFive = prompt('Am I a people person?').toLowerCase();
// console.log('The answer to question five is: ' + answerFive);
//
// if(answerFive === 'y' || answerFive === 'yes') {
//   alert('You are correct. I enjoy talking to people!');
// } else {
//   (answerFive === 'n' || answerFive === 'no');
//   alert('Oh no, that\'s incorrect. I do enjoy talking to people!');
// }
// var answerSix = prompt('Can you guess what\'s my favorite food?');
// console.log('The answer to question five is: ' + answerSix);
//
// var food = ['Grilled Salmon', 'Fried Chicken', 'Philly Cheesesteak', 'Pasta'];
// food.indexOf('Grilled Salmon');
// food.indexOf('Fried Chicken');
// food.indexOf('Philly Cheesesteak');
// food.indexOf('Pasta');
//
// if(food.indexOf('Grilled Salmon') === 0) {
//   alert('I love it too however my favorite is Grilled Salmon.');
// } else {
//   alert('My favorite is Grilled Salmon but that\'s good too');
// }

var counter = 0;
do {
  counter++;
  var answerSeven = prompt('Knowing that I was in the military, can you guess how many times I\'ve moved in the past?');
  console.log('The answer to question seven is: ' + answerSeven);

  if(answerSeven <= 10) {
    alert('That\'s too low aim a little higher.');
    console.log('The answer to question seven is: ' + answerSeven);
  }
  else if(answerSeven > 10 && answerSeven <= 15) {
    alert('Try again, but aim alittle higher.');
    console.log('The answer to question seven is: ' + answerSeven);
  }
  else if(answerSeven > 15 && answerSeven <= 19) {
    alert('Your close, but no cigar. Guess again but just a wee bit higher.');
    console.log('The answer to question seven is: ' + answerSeven);
  }
  else if(answerSeven == 20) {
    alert('Wow, you are correct. Good guess!');
    break;
  }
} while (counter < 4);

for(var index = 0; index < 6; index++) {
  var places = ['singapore', 'maui', 'austrailia', 'dubai', 'hongkong'];
  var answerEight = prompt('What places have I traveled to?').toLowerCase();
  console.log('The answer to question eight is: ' + answerEight);
//
  if (places.indexOf(answerEight) !== - 1) {
    alert('Yes, I\'ve been there and would love to go back someday.');
    break;
  }
  else {
    alert('Try again, you might get it right');
  }
}
