var countDown = document.querySelector("#countdown");
var timeLeft = 30;
var questionEl = document.querySelector("#question");
var answerBtn = document.querySelector("#answers")
var questionARR = ["What symbol do you use at the end of JavaScript commands?"];
var answerARR = [".", "/", "$", ";"];
var corrAnsArr = [3]

function countdownClock() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        countDown.textContent = timeLeft + " Sec";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            // Call function to display Game Over message
            gameOver();
        }

    }, 1000);
}

function gameOver() {
    window.alert("TIME IS UP! GAME OVER!");
}


function askQuestion() {
    for (var i = 0; i < questionARR.length; i++) {
        questionEl.textContent = (questionARR[i]);
        answerQuest();

    }
}

function answerQuest() {
    for(var i = 0; i<4; i++){
    answerBtn.children[i].innerHTML = answerARR[i];
    }
    // Event when correct Answer Button is clicked  
        console.log(answerBtn);
        answerBtn.children[corrAnsArr[0]].addEventListener('click', function() {
        window.alert("your answer is Correct");
        // correctAnswer();
    })
    answerBtn.children[corrAnsArr[0]].addEventListener('click', function() {
        window.alert("Incorrect");
    })
}

// function checkAnswer(){
//     if ()
// }

// countdownClock();
askQuestion();



// while(0 < answerARR.length){


//Pulls a random answer
// console.log(answerARR.length);
// while (answerARR.length > 0) {
    //Generate a random number between 0 and 3
    // if(answerARR[x] == 'undefined'){
    // var x = Math.floor(Math.random() * (answerARR.length + 1));
    // }else{
        //Assign Answer to Button
        // console.log('x= ' + x);
        // console.log('Array Value = ' + answerARR[x]);
        // answerBtn.children[x].innerHTML = answerARR[x];
        //Remove used value from Array and replace with 'undefined'
        // answerARR.splice(x, 1, 'undefined');
        // console.log(answerARR.length);
    // }
// }
