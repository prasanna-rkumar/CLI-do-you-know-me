const chalk = require('chalk');
const rs = require('readline-sync')

var score = 0;
const questions = [
  {
    q: "Which is my favorite color?",
    options: "a: Red, b: Pink, c: Blue",
    a: "c",
  },
  {
    q: "Which is my favorite IPL team?",
    options: "a: RCB, b: CSK, c: MI",
    a: "b",
  },
  {
    q: "When did I got my first bike?",
    options: "a: 2014, b: 2015, c: 2016",
    a: "b",
  },
  {
    q: "Who is my favorite cricketer?",
    options: "a: Dhoni, b: Kohli, c: Rohit",
    a: "a",
  },
  {
    q: "Who is my favorite Marvel superhero?",
    options: "a: Tony, b: Steve, c: Thor",
    a: "c",
  },
  {
    q: "Which is my favorite food?",
    options: "a: Pulao, b: Pizza, c: Biryani",
    a: "c",
  },
  {
    q: "Which is my favorite movie Genre?",
    options: "a: Drama, b: Romcom, c: Adventure",
    a: "a",
  },
  {
    q: "Which is my favorite Video Game Genre?",
    options: "a: FPS, b: MMO, c: RPG",
    a: "c",
  },
  {
    q: "Which instrument do I play?",
    options: "a: Drums, b: Keyboard, c: Guitar",
    a: "b",
  },
  {
    q: "Which city do I live in?",
    options: "a: Chennai, b: Coimbatore, c: Madurai",
    a: "a",
  },
];

const validOptions = ['a', 'b', 'c'];

function askQuestion(question) {
  console.log(chalk.yellow(question.q));
  const answer = rs.question(chalk.cyan(question.options));
  if (validOptions.includes(answer)) {
    if (answer == question.a) {
      console.log(chalk.green("That is correct!!"));
      console.log(chalk.cyan("Your score is "), chalk.bold.yellow(++score));
    } else {
      console.log(chalk.redBright("Wrong answer :("));
    }
  } else {
    console.log(chalk.red("Please select one of the valid options", validOptions));
    askQuestion(question);
  }
  console.log("\n")
}

console.log(chalk.green("Welcome to Do you know Prasanna!!"));

var userName = rs.question("What's Your name? ");

console.log("Hi " + userName + ", Let's get started\n");
console.log("We will ask you a set of 10 questions about Prasanna.", chalk.cyan(" \nType the correct option E.g: ", chalk.hex('#ff00ff').bold("'a, b or c'")));

for (var i = 0; i < questions.length; i++) {
  askQuestion(questions[i]);
}

console.log("------------------\n\n------------------")
console.log(chalk.cyan("That's it. You made it to the end"))
console.log("Your score is ", chalk.bold.green(score))
