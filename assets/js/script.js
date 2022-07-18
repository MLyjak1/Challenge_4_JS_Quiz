var countDown = document.querySelector("#countdown");
var timeLeft = 30;
var q = 0;
var score = 0;
var questions = [{
    text: "What symbol do you use at the end of JavaScript commands?",
    choices: [".", "/", "$", ";"],
    corrAnswer: ";"
}, {
    text: "Which of these is NOT an API",
    choices: ["JavaKey", "JQuery", "Moment", "Bootstrap"],
    corrAnswer: "JavaKey",
}, {
    text: "Which one of these options will NOT declare a variable",
    choices: ["Var", "Const", "Inc", "Let"],
    corrAnswer: "Inc",
}, {
    text: "True or False: Const items cannot be directly reassigned ",
    choices: ["True", "False"],
    corrAnswer: "True",
}, {
    text: "What type of variables are usually declared at the top of the script.js page?",
    choices: ["Local", "Global", "Important", "Appended"],
    corrAnswer: "Global",
}
]



function countdownClock() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        countDown.textContent = timeLeft + " Sec";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            // Call function to display Game Over message
            gameOver();
            return;
        }

    }, 1000);
}

function gameOver() {
    countDown.remove();
    document.getElementById("questionText").remove();
    document.getElementById("answers").remove();
    window.alert("GAME OVER!");
    if(score === 100){
        score -= 10;
        score = score * 100;
    }
    var initials = window.prompt("Enter Initials");
    var scoreObject = {initials, score};
    console.log(scoreObject);
    localStorage.setItem(initials, JSON.stringify(scoreObject));
    displayScores();
}


function askQuestion() {
    var correctQuestion = questions[q].text;
    var questionTextEl = document.getElementById("questionText");
    questionTextEl.textContent = correctQuestion;
    var answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";                          //Clear out old Buttons
    questions[q].choices.forEach(function (choice) {  //insert new buttons
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice);
        button.onclick = evalAnswer;
        
        answersDiv.append(button);       //Add values to buttons

    })
}

function evalAnswer(){
    console.log(this.value);
            if (this.value !== questions[q].corrAnswer) {  //Check if answer is correct
                console.log("wrong");
                timeLeft -=3;
                console.log(timeLeft); 
            } 
            else {
                console.log("Correct");
                score += 20;
                console.log(score);
            }
            q++;                                    //increment to next question
            if (q === questions.length) {
                timeLeft = 0;
                gameOver();
            }
            askQuestion();                           //Ask next question
}

function displayScores(){
    var scoreList = document.getElementById("storageList");
    for(var i=0; i<localStorage.length; i++){
        var indvScores = document.createElement("li");
        indvScores.textContent = localStorage.getItem(localStorage.key(i));
        scoreList.append(indvScores);
    }
    
    
    
   
}

// displayScores();
countdownClock();
askQuestion();



