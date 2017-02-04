'use strict';

var correctAnswers = [];
// var wrongAnswers = [];

//Wrapped as a function
function greeting(){
// Prompt the user to input their name.
// Store user's name in a variable.
// Ask the user eight questions and take their answer as input which will be stored in a variable.
var userName = prompt('What\'s your name?');
alert('Hello ' + userName + '. Thanks for coming to my site!');
console.log('The user name is: ' + userName);
return userName;
}
//Calling username function and assigning to userName variable
var userName = greeting();

// Question one.
//Wrapped question into a function
function questionOne(){
  // Change user's input for the first question to all lower case.
  // Validate that their answer matches my answer or not.
  var answerOne = prompt('What city was I born in?').toLowerCase();
  console.log('The user answer to question one is: ' + answerOne);
  // User's input for correct answer can be philadelphia or philly.
  // Depending on true or False, provide feedback.
  if(answerOne === 'philadelphia' || answerOne === 'philly') {
    alert('You got it right. I was born in Philly!');
    correctAnswers.push(1);
  } else {
    alert('Sorry, that\'s wrong. I was born in Philadelphia');
  }
}
//Calling questionOne function
questionOne();

// Question two.
//Wrapped question into a function
function questionTwo(){
  // Change user's input for the second question to all lower case.
  // Validate that their answer matches my answer or not.
  var answerTwo = prompt('What brought me to Washington?').toLowerCase();
  console.log('The user answer to question two is: ' + answerTwo);
  // User's input for correct answer can be military or navy.
  // Depending on true or False, provide feedback.
  if(answerTwo === 'military' || answerTwo === 'navy') {
    alert('You are correct. I am a US Navy Vet and I was stationed in Bremerton WA!');
    correctAnswers.push(2);
  } else {
    alert('Ahh, that\'s incorrect. I am a US Navy Vet and I was stationed in Bremerton WA!');
  }
}
//Calling questionTwo function
questionTwo();

// Question three.
//Wrapped question into a function
function questionThree(){
  // Change user's input for the third question to all upper case.
  // Validate that their answer matches my answer or not.
  var answerThree = prompt('What business have I owned?').toUpperCase();
  console.log('The user answer to question three is: ' + answerThree);
  var myAnswerThree = 'MOVING';
  // User's input for correct answer is military.
  // Depending on true or False, provide feedback.
  if(answerThree === myAnswerThree) {
    alert('You are correct. I\'ve owned a moving company!');
    correctAnswers.push(3);
  } else {
    alert('Oh no, that\'s incorrect. I\'ve owned a moving company!');
  }
}
//Calling questionThree function
questionThree();


// Question four.
//Wrapped into a function
function questionFour(){
  // Change user's input for the first question to all lower case.
  // Validate that their answer matches my answer or not.
  var answerFour = prompt('What profession have I spent most of my career in?').toLowerCase();
  console.log('The user answer to question four is: ' + answerFour);
  var myAnswerFour = 'sales';
  // User's input for correct answer is sales.
  // Depending on true or False, provide feedback.
  if(answerFour === myAnswerFour) {
    alert('You are correct. I have a background in sales!');
    correctAnswers.push(4);
  } else {
    alert('Oh no, that\'s incorrect. I have a background in sales!');
  }
}
//Calling questionFour
questionFour();

// Question five.
//Wrapped into a function
function questionFive(){
  // Change user's input for the fifth question to all lower case.
  // Validate that their answer matches my answer or not.
  var answerFive = prompt('Am I a people person?').toLowerCase();
  console.log('The user answer to question five is: ' + answerFive);
  // User's input for correct answer can be y or yes.
  // Depending on true or False, provide feedback.
  if(answerFive === 'y' || answerFive === 'yes') {
    alert('You are correct. I enjoy talking to people!');
    correctAnswers.push(5);
  } else {
    // User's input for correct answer can be n or no.
    (answerFive === 'n' || answerFive === 'no');
    alert('Oh no, that\'s incorrect. I do enjoy talking to people!');
  }
}
//Calling questionFive function
questionFive();

// Question six.
//Wrapped into a function
function questionSix(){
  // Change user's input for the six question to all lower case.
  var answerSix = prompt('Can you guess what\'s my favorite food?').toLowerCase();
  console.log('The user answer to question six is: ' + answerSix);
  // Create an array and assign it to a variable.
  var food = ['grilled salmon', 'fried chicken', 'philly cheesesteak', 'pasta'];
  // food.indexOf('grilled salmon');
  // food.indexOf('fried chicken');
  // food.indexOf('philly cheesesteak');
  // food.indexOf('pasta');
  // Use the indexOf method to point out the correct answer in the array.
  if(food.indexOf(answerSix) >= 0) {
    alert('That is correct!');
    correctAnswers.push(6);
  } else {
    alert('My favorite is ' + food + ', but that\'s good too');
  }
}
//Calling questionSix function
questionSix();

// Question seven.
//Wrapped into a function
function questionSeven() {
  // Use a do while loop to execute code to loop through a series of if else statments.
  // Start the loop at 0.
  var counter = 0;
  do {
    counter++;
    var answerSeven = prompt('Knowing that I was in the military, can you guess how many times I\'ve moved in the past?');
    console.log('The user answer to question seven is: ' + answerSeven);

    if(answerSeven <= 10) {
      alert('That\'s too low aim a little higher.');
      console.log('The user answer to question seven is: ' + answerSeven);
      // Give feedback if answer is less than or equal to 10.
    }
    else if(answerSeven > 10 && answerSeven <= 15) {
      alert('Try again, but aim a little higher.');
      console.log('The user answer to question seven is: ' + answerSeven);
      // Give feedback if answer is greater than 10 and less than or equal to 15.
    }
    else if(answerSeven > 15 && answerSeven <= 19) {
      alert('Your close, but no cigar. Guess again but just a wee bit higher.');
      console.log('The user answer to question seven is: ' + answerSeven);
      // Give feedback if answer is greater than 15 and less than or equal to 19.
    }
    else if(answerSeven > 20){
      alert('Too high!');
      console.log('The user answer to question seven is: ' + answerSeven);
    }
    else if(answerSeven == 20) {
      alert('Wow, you are correct. Good guess!');
      correctAnswers.push(7);
      // Use the keyword break to stop the loop once the correct input is evaluated.
      break;
      // Give feedback if answer is equal to 20.
      // Use double equals to except just the value of 20.
    }
    // Run the loop four times.
  } while (counter < 4);
}
//Calling questionSeven function
questionSeven();

// Question eight.
//Wrapped into a function
function questionEight(){
  // Use a for loop to loop through an array six times.
  for(var index = 0; index < 6; index++) {
    var places = ['singapore', 'maui', 'austrailia', 'dubai', 'hongkong'];
    var answerEight = prompt('What places have I traveled to?').toLowerCase();
    console.log('The user answer to question eight is: ' + answerEight);
    // If user's input is not outside of the array.
    if (places.indexOf(answerEight) !== - 1) {
      alert('Yes, I\'ve been there and would love to go back someday.');
      correctAnswers.push(8);
      // Use the keyword break to stop the loop.
      break;
    }
    else {
      alert('Try again, you might get it right');
    }
  }
}
//Calling questionEight function
questionEight();
//Telling user number of correct answers
alert('So ' + userName + ' you were able to get ' + correctAnswers.length + ' right out of seven');
