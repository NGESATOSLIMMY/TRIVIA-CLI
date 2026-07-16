//ADDING QUESTIONS BY STORING THEM IN AN ARRAY OF OBJECTS
const questions = [{
    question:"Which language runs in a web browser?",
    options: ["A.Python", "B.Java", "C.JavaScript", "D.C++"],
    answer : "C"
},
   { question:"What does CSS stand for?",
    options: ["A.Central Style Sheets", "B.Cascading Style Sheets", "C.Cascading Simple Sheets", "D.Central Simple Sheets"],
    answer : "B"
},
    {question:"What does HTML stand for?",
    options: ["A.Hypertext Markup Language", "B.Hypertext Markdown Language", "C.Hyperloop Machine Language", "D.Hyperlink Markup Language"],
    answer : "A"
},
    {question:"What year was JavaScript launched?",
    options: ["A.1996", "B.1995", "C.1994", "D.None of the above"],
    answer : "B"
},   
    {question:"which of the following is not a programming language?",
    options: ["A.Python", "B.Java", "C.HTML", "D.C++"], 
    answer : "C"
},
    {question:"Which of the following is a JavaScript framework?",
    options: ["A.Django", "B.Flask", "C.React", "D.Ruby on Rails"],
    answer : "C"
},
    {question:"Which of the following is a JavaScript library?",
    options: ["A.Angular", "B.React", "C.Vue", "D.JQuery"],
    answer : "D"
},
    {question:"Which of the following is a JavaScript runtime environment?",
    options: ["A.Node.js", "B.React", "C.Angular", "D.Vue"],
    answer : "A"
},
    {question:"Which of the following is a JavaScript testing framework?",
    options: ["A.Jest", "B.Mocha", "C.Chai", "D.All of the above"],
    answer : "D"
},
    {question:"Which of the following is a JavaScript package manager?",
    options: ["A.NPM", "B.Yarn", "C.PNPM", "D.All of the above"],
    answer : "D"
}   
];

//SETTING UP THE CLI INPUT
const readline =require("readline");

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//INITIALIZING THE GAME VARIABLES
let score = 0;
let current = 0;
let startTime = Date.now();

//ASKING THE QUESTIONS
function askQuestion() {
    if (current < questions.length) {
        const question = questions[current];
        console.log(`\nQuestion ${current + 1}: ${question.question}`);
        question.options.map((option,i) => console.log(`${i + 1}. ${option}`));
        rl.question("Your answer (A, B, C, D): ", (answer) => {
            checkAnswer(answer.toUpperCase());
        });
    } else {
        endGame();
    }
}
//CHECKING THE ANSWERS
function checkAnswer(answer) {
    const question = questions[current];
    if (answer === question.answer) {
        console.log("Correct!");
        score++;
    } else {
        console.log(`Wrong! The correct answer is ${question.answer}`);
    }
    current++;
    askQuestion();
}

//ENDING THE GAME AND DISPLAYING THE SCORE AND TIME TAKEN
function endGame() {
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    console.log(`\nGame Over! Your score is ${score} out of ${questions.length}`);
    console.log(`Time taken: ${timeTaken} seconds`);

if (score === questions.length) {
    console.log("Congratulations! You answered all questions correctly!");
} else if (score >= questions.length / 2)   {
    console.log(`You answered ${score} out of ${questions.length} questions correctly.`);
} else {
    console.log(`You answered ${score} out of ${questions.length} questions correctly.`);
}
    rl.close();
}
//STARTING THE GAME
askQuestion();
