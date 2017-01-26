var userName = prompt('What\'s your name?');
alert('Hello ' + userName + '. Thanks for coming to my site!');
// We want to ask the user a question
// Take their answer as input; stored in a var
// Validate that their answer matches my answer
// Depending on true or False, provide feedback
var answerOne = prompt('What city was I born in?');
var myAnswerOne = 'Philadelphia';

if(answerOne === myAnswerOne) {
  alert('You got it right. I was born in Philly!');
} else {
  alert('Sorry, that\'s wrong. I was born in Philadelphia');
}

var answerTwo = prompt('What brought me to Washington?');
var myAnswerTwo = 'Military';

if(answerTwo === myAnswerTwo || 'Navy') {
  alert('You are correct. I am a US Navy Vet and I was stationed in Bremerton WA!');
} else {
  alert('Ahh, that\'s incorrect. I am a US Navy Vet and I was stationed in Bremerton WA!');
}

var answerThree = prompt('What business have I owned?');
var myAnswerThree = 'Moving';

if(answerThree === myAnswerThree) {
  alert('You are correct. I\'ve owned a moving company!');
} else {
  alert('Oh no, that\'s incorrect. I\'ve owned a moving company!');
}

var answerFour = prompt('What profession have I spent most of my career in?');
var myAnswerFour = 'Sales';

if(answerFour === myAnswerFour) {
  alert('You are correct. I have a background in sales!');
} else {
  alert('Oh no, that\'s incorrect. I have a background in sales!');
}
