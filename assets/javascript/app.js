$(document).ready(function(){
//add global timer variables:
var clockRunning = false;
var timer = 15;
var breakTime = 3;
var correctAnswer = true;
var timeLeft;

var clickStart = false;

//add global question variables:
var questNum = 0;
var correct = 0;
var incorrect = 0;


//display start button for user to begin -- onClick call start function and page change to display question 1: 
$('#gameButton').on('click', function() {
    if (!clickStart) {
        questNum = 0;
        correct = 0;
        incorrect = 0;
        start();
        $('#gameButton').css('display', 'none');
        $('.endGame').css('display', 'none');
        display ();
        clickStart = true;
    }
})


//add start function for timer:
function start () {

    if (!clockRunning) {
        timeLeft = setInterval(count, 1000);
        clockRunning = true;
        count ();
    }
}


//add reset function for timer count and display:
function count () {
    timer--;
    $('#timeDisplay').html('Time Remaining ' + timer + ' Seconds!');

    //add boolean value if user does not click answer or timer goes to zero, switch display to answer screen with gif
        if (timer === 0){
            correctAnswer = false;
            answerScreen();
        }
}

function reset () {
    clearInterval(timeLeft);
    timer = 15;
    $('#timeDisplay').html('Time Remaining ' + timer + ' Seconds!');
    clockRunning = false;
}

function checkQuestNum () {
    if (questNum === 7) {
        clickStart = false;
        $('.optionsBox').css('display', 'none');
        $('.answerBreak').css('display', 'none');
        $('.endGame').css('display', 'block');
        $('#gameButton').css('display', 'block');
        $('#playAgain').html('Click Start to Play Again!');
        $('#aCorrect').html('Correct Answers: ' + correct);
        $('#aIncorrect').html('Incorrect Answers: ' + incorrect);

    } else {
        display();
    }
}

//create function to display answer screen between questions and toggle reset after screen timer goes out (3 second display)

function answerScreen () {  
    clearInterval(timeLeft);
    setTimeout(checkQuestNum, 3000);
    $('#timeDisplay').css('display', 'none');
    $('.optionsBox').css('display', 'none');
    $('.answerBreak').css('display', 'block');
    $('#answerGif').html('<img src="' + questionObj[questNum].pic +'">')

    
    if (correctAnswer) {
        $('#rwAnswer').html('Correct Answer!');
        correct++;
        questNum++;

    } else {
        $('#rwAnswer').html('WRONG! The right answer is ' + questionObj[questNum].trivA[0]);
        incorrect++;
        questNum++;
    }

}

//create function and pass through question object to randomly display nswers based on array index:
function display () {
    reset();
    start();
    $('#timeDisplay').css('display', 'block');
    $('.optionsBox').css('display', 'block');
    $('.answerBreak').css('display', 'none');
    var displayQ = questionObj[questNum].trivQ;
    var randomInt = [0,1,2,3];
    var a1 =[];
    var a2 = [];
    var a3 = [];
    var a4 = [];

    function shuffle(array){
        var currentIndex = randomInt.length;
        var temporaryValue;
        var randIndex;

        while (0 !== currentIndex) {
            randIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randIndex];
            array[randIndex] = temporaryValue;
        
        return randomInt;
        }

    }

    shuffle (randomInt);
    a1 = randomInt[0];
    a2 = randomInt[1];
    a3 = randomInt[2];
    a4 = randomInt[3];
    var displayA1 = questionObj[questNum].trivA[a1];
    var displayA2 = questionObj[questNum].trivA[a2];
    var displayA3 = questionObj[questNum].trivA[a3];
    var displayA4 = questionObj[questNum].trivA[a4];
   
    $('.question').html(displayQ);
    $('#op1').html(displayA1);
    $('#op2').html(displayA2);
    $('#op3').html(displayA3);
    $('#op4').html(displayA4);

};



//create onclick function to check answer array index against correct answer index set at 0
$('#op1').on('click', function() {
    if ($('#op1').text() === questionObj[questNum].trivA[0]){
        correctAnswer = true;
        answerScreen();
    } else {
        correctAnswer = false;
        answerScreen();
    }
});

$('#op2').on('click', function() {
    if ($('#op2').text() === questionObj[questNum].trivA[0]){
        correctAnswer = true;
        answerScreen();
    } else {
        correctAnswer = false;
        answerScreen();
    }
});

$('#op3').on('click', function() {
    if ($('#op3').text() === questionObj[questNum].trivA[0]){
        correctAnswer = true;
        answerScreen();
    } else {
        correctAnswer = false;
        answerScreen();
    }
});

$('#op4').on('click', function() {
    if ($('#op4').text() === questionObj[questNum].trivA[0]){
        correctAnswer = true;
        answerScreen();
    } else {
        correctAnswer = false;
        answerScreen();
    }
});


//create question objects for question array:
var questionObj = [
    question1 = {
        trivQ: 'Who won the last NBA championship?',
        trivA: ['Raptors', 'Blazers','Celtics','Warriors'],
        pic: "https://media.giphy.com/media/XG14qInv52c4ZKGRsU/giphy.gif"
    },
    question2 = {
        trivQ: 'Which player has the most championship rings?',
        trivA: ['Bill Russell','Kobe Bryant','Tony Parker','Michael Jordan'],
        pic: "https://media.giphy.com/media/uj8LIbo44sybC4MKUF/giphy.gif"
    },
    question3 = {
        trivQ: 'What is the record for the most 3-point shots made by a single player in a game?',
        trivA: ['14', '8', '12', '15'],
        pic: "https://media.giphy.com/media/elCvzK7dpU3SeHachG/giphy.gif"
    },
    question4 = {
        trivQ: 'Which player has missed the most field goals in the span of their career?',
        trivA: ['Kobe Bryant', 'Rick Barry', 'Tim Duncan', 'Reggie Miller'],
        pic: "https://media.giphy.com/media/NfiEWXSA1fVoQ/giphy.gif"
    },
    question5 = {
        trivQ: '"Big Smooth" was the nickname of which 20th century NBA player?',
        trivA: ['Sam Perkins', 'Glen Davis', 'Demarcus Cousins', 'Nikola Jokic'],
        pic: "https://media.giphy.com/media/2sCo3M6CKDF84/giphy.gif"
    },
    question6 = {
        trivQ: 'Which NBA team attempts the fewest 3-pointer?',
        trivA: ['Spurs', 'Pelicans', 'Clippers', 'Nets'],
        pic: "https://media.giphy.com/media/TTgdzuXtaN5pMJ94L3W/giphy.gif"
    },
    question7 = {
        trivQ: 'Who leads the league in free-throw percentage (2018-2019)?',
        trivA: ['Malcolm Brogdon', 'Stephen Curry', 'Damian Lillard', 'Klay Thompson'],
        pic: "https://media.giphy.com/media/ehmxhHYx7Nuc1WMDP7/giphy.gif"
    }
];





});