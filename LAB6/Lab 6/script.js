//question array
let questions = [
    {
        question: "Which team won the constructors championship in Formula 1 in 2025 season?",
        options: ["Mercedes AMG Petronas", "Red Bull Racing", "Scuderia Ferrari HP", "McLaren"],
        answer: "McLaren"
    },
    {
        question: "Which F1 driver who is still in the grid has 7 World Championship titles?",
        options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"],
        answer: "Lewis Hamilton"
    },
    {
        question: "The last Malaysian Formula 1 Grand Prix was held in which year?",
        options: ["2016", "2017", "2019", "2020"],
        answer: "2017"
    },
    {
        question: "Who won during the last Malaysian Formula 1 Grand Prix?",
        options: ["Lewis Hamilton", "Sebastian Vettel", "Max Verstappen", "Valtteri Bottas"],
        answer: "Max Verstappen"
    }
]
let i = 0;
let score = 0;
let timerId = null;
let timeperquest = 10;

//shuffle questions
function shuffleQuestions() {
    questions.sort(function () {
        return Math.random() - 0.5;
    });
}

//timer
function startTimer() {
    if (timerId) {      // stop any old timer
        clearInterval(timerId);
    }

    let timeLeft = 10;
    const timerEl = document.getElementById("timer");
    timerEl.textContent = `Time Left: ${timeLeft}`;

    timerId = setInterval(function () {
        timeLeft--;
        timerEl.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            checkAnswer(null);
        }
    }, 1000);
}

//load questions
function loadQuestion() {
    let q = questions[i];
    document.getElementById("questions").innerHTML = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(function (option) {
        let button = document.createElement("button");
        button.textContent = option;

        button.onclick = function () {
            disableOptionButtons();
            checkAnswer(option);
        };

        optionsDiv.appendChild(button);   
    });
}
document.getElementById("feedback").textContent = "";
startTimer(); //timer restarts



function disableOptionButtons() {
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => btn.disabled = true);
}

//check answer
function checkAnswer(selectedoption) {
    let q = questions[i];
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    if (selectedoption === q.answer) {
        score++;
        document.getElementById("feedback").textContent = "Correct answer!";
    } else {
        document.getElementById("feedback").textContent = `Wrong answer! The correct answer is ${q.answer}.`;
    }
}

//next question
function loadNextQuestion() {
    i++;

    if (i >= questions.length) {
        finishQuiz();
        return;
    }

    loadQuestion();
    startTimer();
}

//finish quiz
function finishQuiz() {
    document.getElementById("QuizSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    document.getElementById("score").innerHTML = `${score} / ${questions.length}`;
}

//start quiz
function startQuiz() {
    i = 0;
    score = 0;
    shuffleQuestions();
    document.getElementById("QuizSection").style.display = "block";
    document.getElementById("resultSection").style.display = "none";
    loadQuestion();

}
function restartQuiz() {
    startQuiz();
}



