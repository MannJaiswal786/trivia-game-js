// Pseudo-code
//1. Set up global variables to access DOM elements
//2. Write a function to load a new question
//3. Write a function to submit the user's answer
//4. Write a function to provide feedback to the user

const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');
let currentQuestion = null; // this variable will store the current question

function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length);
            const question = questions[index];
            if (index >= questions.length){
                reject("An error occured while fetching the trivia question");
            }else {
                resolve(question);   
            }
        }, 1000);
    });
}

function displayQuestion(triviaQuestion){
questionDiv.textContent = triviaQuestion.question;
answerDiv.value = "";
feedbackDiv.textContent = "";
}

document.querySelector('#questionBtn').addEventListener("click", () => {
    getTriviaQuestion().then((question) => {
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error)=> {
        console.error(error);
    })
});

document.querySelector("#answerBtn").addEventListener("click", () => {
   const userAnswer = answerDiv.value.trim().toLowerCase();

   if (userAnswer === currentQuestion.answer.toLowerCase()){
    feedbackDiv.textContent = "Correct!";
    feedbackDiv.style.color = "green";
   }else {
    feedbackDiv.textContent = `Incorrect!. The correct answer was ${currentQuestion.answer}`;
    feedbackDiv.style.color = "red";
   }
} );;