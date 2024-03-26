document.addEventListener('DOMContentLoaded', function(){
    nextButton.classList.add('hide');
});

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersButton = document.getElementById('answer-buttons');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const resetButton = document.getElementById('reset-btn');
const resultsDisplay = document.getElementById('results')

let shuffledQuestions, currentQuestionIndex;
let correctAnswers = 0;
let incorrectAnswers = 0;

resetButton.addEventListener('click', resetQuiz); 

startButton.addEventListener('click', startQuiz);


function startQuiz(){
    startButton.classList.add('hide');
    resetButton.classList.remove('hide'); 
    shuffleQuestions();
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    showQuestions(shuffledQuestions[currentQuestionIndex]);
}

function shuffleQuestions() {
    shuffledQuestions = [...questions]; 
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

function showQuestions(question){
    questionElement.innerText = question.question;
    answersButton.innerHTML = ''; 
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', function(){
            selectAnswer(button);
        });
        answersButton.appendChild(button);
    });
}

function selectAnswer(selectedButton) {
    const correct = selectedButton.dataset.correct;

    Array.from(answersButton.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
            button.classList.add('correct-animation');
            
        } else {
            button.classList.add('incorrect');
        }
        
    });
    if (correct === 'true') {
        
        showMessage('Correct Answer');
        correctAnswers++;
    } else {
   
        showMessage('Wrong Answer');
        incorrectAnswers++;
        
    }
   
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
    else{
        displayResult()
    }
}

function clearStatus(element) {
    element.querySelectorAll('button').forEach(button => {
        button.classList.remove('correct', 'incorrect');
    });
}

nextButton.addEventListener('click', function(){
    currentQuestionIndex++;
    setNextQuestion();
});

function setNextQuestion() {
    clearStatus(answersButton);
    
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    nextButton.classList.add('hide');
    showQuestions(shuffledQuestions[currentQuestionIndex]);
}

function resetQuiz(){
    const existingMessage = document.querySelector('.message');
    const resultMessage = document.querySelector('#results')
    if (existingMessage) {
        existingMessage.remove();
    }
    if (resultMessage) {
        resultMessage.remove();
    }
    currentQuestionIndex = 0;
    startQuiz();

}
function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    questionContainer.appendChild(messageElement);
}
function displayResult() {
    resultsDisplay.innerText = `Correct Answers: ${correctAnswers} | Incorrect Answers: ${incorrectAnswers}`;
}
const questions = [
    {
        question: 'What does HTTP stand for?',
        answers:[
            {text:' A) Hypertext Transfer Protocol', correct :true},
            {text:' B) Hyperlink Text Transfer Protocol', correct :false},
            {text:' C) Hypertext Transmission Protocol', correct :false},
            {text:' D) Hyperlink Transfer Protocol', correct :false}   
        ]
    },
    {
        question: 'What is the purpose of a firewall in computer networks?',
        answers:[
            {text:' A) To protect against viruses', correct :false},
            {text:' B) To control access to a network', correct :true},
            {text:' C) To increase network speed', correct :false},
            {text:' D) To provide encryption for data transfer', correct :false}   
        ]
    },
    {
        question: 'What does SQL stand for?',
        answers:[
            {text:'A) Structured Query Language', correct :true},
            {text:'B) Simple Query Language', correct :false},
            {text:'C) System Query Language', correct :false},
            {text:'D) Sequential Query Language', correct :false}   
        ]
    },
    {
        question: 'What is the main purpose of CSS?',
        answers:[
            {text:' A) To provide structure to web documents', correct :false},
            {text:' B) To add interactivity to web pages', correct :false},
            {text:' C) To style the appearance of web pages', correct :true},
            {text:' D) To handle server-side scripting', correct :false}   
        ]
    },
    {
        question: 'What data structure is typically used for implementing a LIFO (Last In, First Out) behavior?',
        answers:[
            {text:' A) Queue', correct :false},
            {text:' B) Stack', correct :true},
            {text:' C) Linked List', correct :false},
            {text:' D) Tree', correct :false}   
        ]
    },
    
];
