var readLineSync = require('readline-sync');
var userName = readLineSync.question("What is your name?");
var message = "\nWelcome "+userName.toUpperCase()+"\n\nDo you know Samuel?\nAnswer few questions to test your knowledge on how well do you know Samuel.\n";
console.log(message);

var score = 0;

function checkAnswer(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer){
    console.log("You are right!");
    score++;
  }else{
    console.log("Oops!You are wrong!");
  }
  console.log('----------------------------------');
  // console.log("Your score is "+score+"\n");
}

var questionList = [
  {
    question : "Is my age greater than 25?",
    answer : "NO",
  },
  {
  question : "What is my favourite sport?",
  answer : "CRICKET",
  },
  {
    question : "What is my Father's name?",
    answer : "WELLINGTON",
  },
  {
    question : "What is my Mother's name?",
    answer : "NEERAJA",
  },
  {
    question : "Where do I live(City)?",
    answer : "HYDERABAD",
  },
  {
    question : "Am I an introvert?",
    answer : "YES",
  },
  {
    question : "Am I good at sprinting?",
    answer : "YES",
  },
];

for(var i=0;i<questionList.length;i++){
  checkAnswer(questionList[i].question,questionList[i].answer);
}

console.log("Your Final Score is "+score+"\n");

var highScores = [
    {
    name : "Samuel",
    score : 7,
    },
    {
      name : "Wellington",
      score : 7
    },
    {
      name : "Neeraja",
      score : 7
    }
  ];

console.log("Top Scorers:\n ")
for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].name +" "+highScores[i].score+"\n");
}

function checkHighScore(userScore){
  for(var i=0;i<highScores.length;i++){
    if(userScore>=highScores[i].score){
    console.log("Congratulations!You are one of the top scorers.Please send me a screenshot of your score.");
      break;
  }  
}
}

checkHighScore(score);