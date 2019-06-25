$(document).ready(function(){
//add global timer variables:
var clockRunning = false;
var timer = 15;
// var timeLeft;

var clickStart = false;

//add global question variables:
var questNum = 0;
var correct = 0;
var incorrect = 0;
var noUserChoice = true; //switch to false each time user selects answer


//display start button for user to begin -- onClick call start function and page change to display question 1: 
$('#gameButton').on('click', function() {
    if (!clickStart) {
        start();
        $('#gameButton').css('display', 'none');
        display ();

    }
})


//add start function for timer:
function start () {
    if (!clockRunning) {
        timeLeft = setInterval(count, 1000);
        clockRunning = true;

    }
}


//add reset function for timer count and display:
function count () {
    timer--;
    $('#timeDisplay').html('Time Remaining ' + timer + ' Seconds!');

    //add boolean value if user does not click answer or timer goes to zero, switch display to answer screen with gif
        if (timer === 0 || !noUserChoice){
            reset();
        }
}

function reset () {
    timer = 15;
    $('#timeDisplay').html('Time Remaining ' + timer + ' Seconds!');
    clockRunning = false;

    if (clickStart === true){
        clickStart = false;
        $('#gameButton').css('display', 'block');
    }
}

//create function to display answer screen between questions and toggle reset after screen timer goes out (3 second display)

// function answerScreen () {  
// }


//create function and pass through question object to randomly display nswers based on array index:
function display () {
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
    console.log(randomInt);
    console.log(questionObj[questNum].trivA)
   
    $('.question').html(displayQ);
    $('#op1').html(displayA1);
    $('#op2').html(displayA2);
    $('#op3').html(displayA3);
    $('#op4').html(displayA4);

};



//create onclick function to check answer array index against correct answer index set at 0 and use clearInterval to clear the clock and reset it OR reset timer?
$('#op1').on('click', function() {
    if ($('#op1').text() === questionObj[questNum].trivA[0]){
        correct++;
        questNum++;
        console.log(correct);
        console.log(questNum);
        display();
    } else {
        incorrect++;
        questNum++;
        console.log(correct);
        console.log(questNum);
        display();
    }
});

$('#op2').on('click', function() {
    if ($('#op2').text() === questionObj[questNum].trivA[0]){
        correct++;
        questNum++;
        console.log(correct);
        console.log(questNum);
        display();
    } else {
        incorrect++;
        questNum++;
        console.log(correct);
        console.log(questNum);
        display();
    }
});

$('#op3').on('click', function() {
    if ($('#op3').text() === questionObj[questNum].trivA[0]){
        correct++;
        questNum++;
        console.log(correct);
        console.log(questNum);
        display();
    } else {
        incorrect++;
        questNum++;        timer = 15;
        console.log(correct);
        console.log(questNum);
        display();
    }
});

$('#op4').on('click', function() {
    if ($('#op4').text() === questionObj[questNum].trivA[0]){
        correct++;
        questNum++;
        console.log(correct);
        console.log(questNum);
        display();
    } else {
        incorrect++;
        questNum++;
        console.log(correct);
        console.log(questNum);
        display();
    }
});


//create question objects for question array:
var questionObj = [
    question1 = {
        trivQ: 'Who won the last NBA championship?',
        trivA: ['Raptors', 'Blazers','Celtics','Warriors']
    },
    question2 = {
        trivQ: 'Which player has the most championship rings?',
        trivA: ['Bill Russell','Kobe Bryant','Tony Parker','Michael Jordan']
    },
    question3 = {
        trivQ: 'What is the record for the most 3-point shots made by a single player in a game?',
        trivA: [14, 8, 12, 15]
    },
    question4 = {
        trivQ: 'Which player has missed the most field goals in the span of their career?',
        trivA: ['Kobe Bryant', 'Rick Barry', 'Tim Duncan', 'Reggie Miller']
    }



];





});