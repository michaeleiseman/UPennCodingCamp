var Player = function(name, score, buzzer) {
    this.name = name;
    this.score = score;
    this.buzzer = buzzer;
}
var Category = function(name) {
    this.name = name;
    this.answers = [];
}
var Answer = function(text, points, category, questions) {
    this.text = text;
    this.points = points;
    this.category = category;
    this.questions = questions;
    this.button = document.createElement("button");
    this.button.textContent = points;
    this.button.className = "btn btn-primary btn-lg btn-block"
    this.button.answer = this;
}

class Question {
    constructor(text, isCorrect, answer) {
        this.text = text;
        this.isCorrect = isCorrect;
        this.answer = answer;
        this.button = document.createElement("button");
        this.button.className = "btn btn-primary btn-lg btn-block text-center";
        this.button.textContent = text;
        this.button.question = this;
    }
}

var data = [
    ["Geometry", 
        [   
            ["The full angular measure of a complete circle in radians",
                [
                    ["What is 2?", false],
                    ["What is pi r squared?", false],
                    ["What is 2 * pi?", true],
                    ["What is pi/4?", false]
                ]
            ],
            ["This describes two infinite lines in the same plane that never meet.",
                [
                    ["What is parallel?", true],
                    ["What is perpendicular?", false],
                    ["What is askew?", false],
                    ["What is coincidental?", false]
                ]
            ],
            ["Tetrahedrons, cubes, octahedrons, dodecahedrons, and icosahedrons are the only members of these types of shapes.",
                [
                    ["What are isolinear solids?", false],
                    ["What are platonic solids?", true],
                    ["What are perpendicular solids?", false],
                    ["What are equidistant solids?", false]
                ]
            ],
            ["These types of triangles each contain one angle greater than 90 degrees.",
                [
                    ["What is equilateral?", false],
                    ["What is acute?", false],
                    ["What is scalene?", false],
                    ["What is obtuse?", true]
                ]
            ],
            ["This is the type of Geometry one usually learns in high school.",
                [
                    ["What is Euclidean?", true],
                    ["What is Newtonian?", false],
                    ["What is Platonic?", false],
                    ["What is Linear?", false]
                ]
            ]
        ]
    ],
    ["Chemistry",
        [
            ["The chemical symbol for iron",
                [
                    ["What is I?", false],
                    ["What is Fe?", true],
                    ["What is Ir", false],
                    ["What is F?", false]
                ]
            ],
            ["The name for the study of how molecules react in rational number proportions",
                [
                    ["What is conservation of matter?", false],
                    ["What is nuclear chemistry?", false],
                    ["What is rheology?", false],
                    ["What is stoichiometry?", true]
                ]
            ],
        ["6.02^23",
                [
                    ["What is Avogadro's number?", true],
                    ["What is Plank's constant?", false],
                    ["What is the Ideal Gas constant?", false],
                    ["How many molecules of water weigh one gram?", false]
                ]
            ],
            ["This describes a reaction that gives off heat",
                [
                    ["What is endothermic?", false],
                    ["What is adiabatic?", false],
                    ["What is exothermic?", true],
                    ["What is isothermal?", false]
                ]
            ],
            ["A thermodynamic property that determines if a reaction will occur spontaneously",
                [
                    ["What is Gibbs Free Enery?", true],
                    ["What is Enthalpy?", false],
                    ["What is Entropy?", false],
                    ["What is Heat Capacity?", false]
                ]
            ]
        ]
    ],
    ["Physics",
        [ 
            ["The formula that quantifies Newton's Second Law",
                [
                    ["What is E = mc^2", false],
                    ["What is F = ma", true],
                    ["Question C1-3", true],
                    ["Question C1-4", false]
                ]
            ],
            ["Neglecting air resistance, the path a projectile will follow if it is fired perpendicular to the force of gravity. ",
                [
                    ["What is a circular arc?", false],
                    ["What is lemniscate?", false],
                    ["What is a parabola?", true],
                    ["What is a line?", false]
                ]
            ],
            ["Force/Area",
                [
                    ["What is energy?", false],
                    ["What is power?", false],
                    ["What is work?", false],
                    ["What is pressure?", true]
                ]
            ],
            ["the property of a transparent material given by the speed of light in a vacuum divided by the speed of light in the material",
                [
                    ["What is optical density", false],
                    ["What is index of refraction?", true],
                    ["What is birefringence?", false],
                    ["What is translucency?", false]
                ]
            ],
            ["one volt",
                [
                    ["What is a Watt per centimeter?", false],
                    ["What is an ampere-coulomb?", false],
                    ["What is a erg-second?", false],
                    ["What is a Joule per coulomb?", true]
                ]
            ]
        ]
    ],
    ["HTML",
        [
            ["Where an HTML page's metadata resides",
                [
                    ["What is the head?", true],
                    ["What is the body?", false],
                    ["What is the footer?", false],
                    ["What is the declaration?", false]
                ]
            ],
            ["The tag name used to denote a hyperlink tag",
                [
                    ["What is div?", false],
                    ["What is hl?", false],
                    ["What is a?", true],
                    ["What is href?", false]
                ]
            ],
            ["A developer tool to examine the underlying HTML of a web page brought up in a browser",
                [
                    ["What is a source?", false],
                    ["What is a debugger?", false],
                    ["What is a console?", false],
                    ["What is an inspector?", true]
                ]
            ],
            ["Putting text inside em tags, gives the text this appearance",
                [
                    ["What is bold?", false],
                    ["What is underlined?", false],
                    ["What is italicized?", true],
                    ["What is superscripted?", false]
                ]
            ],
            ["What ul stands for in a ul tag",
                [
                    ["What is under lined?", false],
                    ["What is unjustified left?", false],
                    ["What is undetermined letters?", false],
                    ["What is unordered list?", true]
                ]
            ]
        ]
    ],
    ["E", 
        [
            ["Answer E1",
                [
                    ["Question E1-1", false],
                    ["Question E1-2", true],
                    ["Question E1-3", false],
                    ["Question E1-4", false]
                ]
            ],
            ["Answer E2",
                [
                    ["Question E2-1", false],
                    ["Question E2-2", false],
                    ["Question E2-3", true],
                    ["Question E2-4", false]
                ]
            ],
            ["Answer E3",
                [
                    ["Question E3-1", false],
                    ["Question E3-2", false],
                    ["Question E3-3", false],
                    ["Question E3-4", true]
                ]
            ],
            ["Answer E4",
                [
                    ["Question E4-1", true],
                    ["Question E4-2", false],
                    ["Question E4-3", false],
                    ["Question E4-4", false]
                ]
            ],
            ["Answer E5",
                [
                    ["Question E5-1", false],
                    ["Question E5-2", true],
                    ["Question E5-3", false],
                    ["Question E5-4", false]
                ]
            ]
        ]
           
    ],
    ["F", 
        [
            ["Answer F1",
                [
                    ["Question F1-1", false],
                    ["Question F1-2", true],
                    ["Question F1-3", false],
                    ["Question F1-4", false]
                ]
            ],
            ["Answer F2",
                [
                    ["Question F2-1", false],
                    ["Question F2-2", false],
                    ["Question F2-3", true],
                    ["Question F2-4", false]
                ]
            ],
            ["Answer F3",
                [
                    ["Question F3-1", false],
                    ["Question F3-2", false],
                    ["Question F3-3", false],
                    ["Question F3-4", true]
                ]
            ],
            ["Answer F4",
                [
                    ["Question F4-1", true],
                    ["Question F4-2", false],
                    ["Question F4-3", false],
                    ["Question F4-4", false]
                ]
            ],
            ["Answer F5",
                [
                    ["Question F5-1", false],
                    ["Question F5-2", true],
                    ["Question F5-3", false],
                    ["Question F5-4", false]
                ]
            ]
        ]
    ]
]
//create an array of categories from the game data
var categories = [];
var players = [];
var pickingPlayer = false;
var disabledPlayers = [];
var buzzedInPlayer = null;
var timer = null;
var clock = null;
var timesUp = null;
var numberOfAnswers = 0;
//read in the game data and make objects of the categories, answers and questions
for(var i = 0; i < data.length; i++) {
    var category = data[i];
    categories.push(new Category(category[0]));
    //each category will have a number of answers
    for(var j = 0; j < category[1].length; j++) {
        var answers = category[1][j];
        categories[i].answers.push(new Answer(answers[0], (j + 1) * 100, categories[i], []));
        numberOfAnswers++;
        //each answer with have a number of questions for players to pick
        for(var k = 0; k < answers[1].length; k++) {
            var question = answers[1][k];
            categories[i].answers[j].questions.push(new Question(question[0], question[1], categories[i].answers[j]));
        }
    }
}
//after the board loads, fill it with categories and answers
window.addEventListener("load", buildBoard, false);
function buildBoard() {
    //for every category
    for(var i = 0; i < categories.length; i++) {
        var category = categories[i];
        //put the category into the first row of the board
        document.getElementsByClassName("heading")[i].textContent = category.name;
        //fill the category with answer buttons
        for(var j = 0; j < category.answers.length; j++) {
            document.getElementsByClassName("category")[i].getElementsByClassName("cell")[j].appendChild(category.answers[j].button);
        }
    }
    //and put event listeners on the submit buttons for the players to submit their names
    var buttons = document.getElementsByClassName("submitPlayer");
    for(var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener("click", submitName, false);
    }
    timesUp = document.getElementById("timesUp");
}
//have the users enter their names on the player board
function submitName(){
    var scoreRow = this.parentNode;
    var nameRow = scoreRow.previousElementSibling;
    var buzzerRow = scoreRow.nextElementSibling;
    var playerLetter = scoreRow.getElementsByTagName("button")[0].value;
    var name = nameRow.getElementsByTagName("input")[0].value;
    var player = new Player(name, 0, this.value);
    //remove the button
    scoreRow.removeChild(scoreRow.getElementsByClassName("submitPlayer")[0]);
    //fill in the score row for this player
    var label = document.createElement("div")
    label.className = "col score";
    label.textContent = "Score: ";
    scoreRow.appendChild(label);
    var scoreSpan = document.createElement("span");
    scoreSpan.id = playerLetter;
    scoreSpan.textContent = player.score.toString();
    label.appendChild(scoreSpan);
    //remove the input field
    nameRow.removeChild(nameRow.children[1]);
    //remove the name lable
    nameRow.removeChild(nameRow.children[0]);
    //create a new column that will hold the player's name
    var nameCol = document.createElement("div");
    nameCol.className = "col col-name text-center"
    nameCol.textContent = player.name;
    nameRow.appendChild(nameCol);
    player.scoreElement = scoreSpan;
    scoreSpan.player = player;
    //change the verb tense on the buzzer key advisory
    buzzerCol = buzzerRow.getElementsByClassName("buzzer")[0];
    buzzerCol.textContent = buzzerRow.textContent.trim().replace("will be", "is");
    players.push(player);
    //if both players have submitted their names
    if(players.length === 2) {
        //add event listeners to all the buttons
        for(var i = 0; i < categories.length; i++) {
            var category = categories[i]
            for(var j = 0; j < category.answers.length; j++) {
                var answer = category.answers[j];
                answer.button.addEventListener("click", bringUpQuestionDialog, false);
            }
        }
        //randomly select the picking player to start the game
        pickingPlayer = players[Math.floor(Math.random() * players.length)];
        changePickingPlayer(pickingPlayer);
    }
}
//assign the role of picking player to the player passed in by parameter
function changePickingPlayer(newPickingPlayer) {
    //find the board for the old picking player if there is one
    if(pickingPlayer) {
        var pickingPanel = document.getElementById(pickingPlayer.buzzer).parentNode.parentNode.parentNode;
        pickingPanel.className = "col player";
        //reset the name on the player board to the name of the player that is not the picking player
        pickingPanel.getElementsByClassName("col-name")[0].textContent = pickingPlayer.name;
    }
    //indicate the new picking player on the player board
    if(newPickingPlayer) {
        var pickingPanel = document.getElementById(newPickingPlayer.buzzer).parentNode.parentNode.parentNode;
        pickingPanel.className = "col pickingPlayer";
        pickingPanel.getElementsByClassName("col-name")[0].textContent = newPickingPlayer.name + " picks now";
    }
}
function bringUpQuestionDialog() {
    //disable the button on the jeopardy board that has just been pressed
    this.removeEventListener("click", bringUpQuestionDialog, false);
    this.disabled = true;
    this.style.setProperty("background-color", "blue");
    this.style.setProperty("color", "blue");
    this.style.setProperty("border-color", "blue");
    this.style.setProperty("text-shadow", "none");
    numberOfAnswers--;
    //create a dialog to provide an answer with question options and an advisory for who is still able to question the answer.
    var forbiddenZone = document.createElement("div");
    forbiddenZone.className = "text-center forbiddenZone";
    var card = document.createElement("div");
    card.className = "card dialog";
    var answerArea = document.createElement("div");
    answerArea.className = "answerArea";
    var questionArea = document.createElement("div");
    questionArea.className = "questionArea";
    document.body.appendChild(forbiddenZone);
    document.body.appendChild(card);
    card.appendChild(answerArea);
    card.appendChild(questionArea);
    answerArea.textContent = this.answer.text;
    for(var i = 0; i < this.answer.questions.length; i++) {
        var button = this.answer.questions[i].button;
        questionArea.appendChild(button);
    }
    var timerContainer = document.createElement("div");
    timerContainer.className = "container container-timer";
    var questionTimerRow = document.createElement("div");
    questionTimerRow.className = "row row-questionTimer";
    var questionTimerCol = document.createElement("div");
    questionTimerCol.className = "col text-center";
    var questionTimerDiv = document.createElement("div");
    questionTimerDiv.id = "questionTimerDiv";
    var playerTimerRow = document.createElement("div");
    playerTimerRow.className = "row";
    var buzzInName = document.createElement("div");
    buzzInName.className = "col-md-9 col-buzzInName text-center";
    buzzInName.id = "buzzInName";
    var playerTimerDiv = document.createElement("div");
    playerTimerDiv.className = "col-md-3 col-timerDiv";
    playerTimerDiv.id = "playerTimerDiv";
    questionTimerCol.appendChild(questionTimerDiv);
    questionTimerRow.appendChild(questionTimerCol);
    timerContainer.append(questionTimerRow);
    playerTimerRow.appendChild(buzzInName);
    playerTimerRow.appendChild(playerTimerDiv);
    timerContainer.appendChild(questionTimerRow);
    timerContainer.appendChild(playerTimerRow);
    card.appendChild(timerContainer);
    var advisoryDiv = document.createElement("div");
    advisoryDiv.className = "advisoryDiv";
    card.appendChild(advisoryDiv);
    var answer = this.answer;
    //listen a player to buzz in
    window.addEventListener("keydown", buzzerPress, false);
    //insert a clock for 10 seconds in the answer dialog
    insertClock(10000, answer, false);
}
function buzzerPress(event) {
    buzzedInPlayer = document.getElementById(event.code).player;
    //if a player pressed their key and they are not disabled;
    if(buzzedInPlayer && !disabledPlayers.includes(buzzedInPlayer)) {
        //remove the clock
        removeClock();
        //remove the event that responds to buzzes
        window.removeEventListener("keydown", buzzerPress, false);
        //enable the buzzed in player to be able to pick a question
        addEventListenersToQuestions();
        var answer = document.getElementsByClassName("questionArea")[0].getElementsByTagName("button")[0].question.answer;
        //announce who buzzed in
        document.getElementById("buzzInName").textContent = `${buzzedInPlayer.name} must now pick an answer in time.`;
        createBuzzInAdvisory();
        //insert a 5-second clock
        insertClock(5000, answer, true);
    }
}
function playerAnswers() {
    //disable the button that was just pressed
    this.disabled = true;
    this.removeEventListener("click", playerAnswers, false);
    removeEventListenersFromQuestions(this.question.answer);
    var answer = this.question.answer;
    removeClock();
    //remove text that indicated who buzzed in for this answer
    document.getElementById("buzzInName").textContent = "";
    //if the buzzed in player got the question correct
    if(this.question.isCorrect) {
        //give the buzzed in player the points for the answer
        buzzedInPlayer.score += answer.points;
        //update the scoreboard
        buzzedInPlayer.scoreElement.textContent = buzzedInPlayer.score;
        //if the buzzed in player "stole the board" from the picking player
        if(buzzedInPlayer !== pickingPlayer) {
            //change the board to advise who picks next
            changePickingPlayer(buzzedInPlayer);
            //assign the picking role to the buzzed in player
            pickingPlayer = buzzedInPlayer;
        }
        revealCorrectQuestion(answer, buzzedInPlayer)
    } else {
        docBuzzedInPlayer(answer);
    }
}
function removeEventListenersFromQuestions(answer) {
    for(var i = 0; i < answer.questions.length; i++) {
        var button = answer.questions[i].button;
        //only remove click events from enabled buttons
        if(!button.disabled) {
            button.removeEventListener("click", playerAnswers, false);
        }
    }
}
function addEventListenersToQuestions() {
    //add event listeners to all the question buttons
    var buttons = document.getElementsByClassName("questionArea")[0].children;
    for(var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        //only add click events to enabled buttons
        if(!button.disabled) {
            button.addEventListener("click", playerAnswers, false);
        }
        
    }
}
function clearBuzzInAdvisory() {
    var advisoryDiv = document.getElementsByClassName("advisoryDiv")[0];
    //clear the advisory div
    for(var i = 0; i < advisoryDiv.children.length; i++) {
        advisoryDiv.removeChild(advisoryDiv.children[i]);
    }
}
function createBuzzInAdvisory() {
    clearBuzzInAdvisory();
    //don't create any advisories if a player is currently buzzed in
    if(buzzedInPlayer) {
        return;
    }
    //advise each player that has not been disabled that they can still question the answer
    for(var i = 0; i < players.length; i++) {
        if(!disabledPlayers.includes(players[i])) {
            var advisory = document.createElement("p");
            advisory.className = "advisory";
            advisory.textContent = `If ${players[i].name} knows the answer, ${players[i].name} must first buzz in before selecting the answer`;
            document.getElementsByClassName("advisoryDiv")[0].appendChild(advisory);
        }
    }
}
function removeQuestionDialog() {
    document.body.removeChild(document.body.getElementsByClassName("forbiddenZone")[0]);
    document.body.removeChild(document.body.getElementsByClassName("card")[0]);
}
function insertClock(maxTime, answer, timerIsForPlayer) {
    //if this timer is for a player that has already buzzed in
    if(timerIsForPlayer) {
        //put the timer across from the text that tells the player to question the answer
        var timerDiv = document.getElementById("playerTimerDiv");
    //if this timer is being set to set a deadline for any player to buzz in
    } else {
        //center the timer at the bottom of the dialog
        var timerDiv = document.getElementById("questionTimerDiv");
    }
    //create and insert the canvas element that is going to display the timer
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.setAttribute("width", "100px");
    canvas.setAttribute("height", "100px");
    timerDiv.appendChild(canvas);
    //start the clock running
    timer = window.setInterval(updateClock, 50, Date.now(), maxTime, answer, timerIsForPlayer);
}
function removeClock() {
    clearInterval(timer);
    timer = null;
    var canvas = document.getElementById("canvas");
    if(canvas) {
        canvas.parentNode.removeChild(canvas);
    }
}
//draw the timer to reflect how much time is left
function updateClock(startTime, maxElapsedTime, answer, timerIsForPlayer) {
    var fracElapsed = (Date.now() - startTime)/maxElapsedTime;
    //if time is up
    if(fracElapsed > 1) {
        timesUp.play();
        removeClock();
        //if this expired timer was for a player that has already buzzed in
        if(timerIsForPlayer) {
            //remove text that indicated who buzzed in for this answer
            document.getElementById("buzzInName").textContent = "";
            //subract points for this player for buzzing in and not questioning the answer in time
            docBuzzedInPlayer(answer);;
        //if this expired timer had set a deadline for any player to buzz in
        } else {
            //enable players to go to the next answer clue
            revealCorrectQuestion(answer, false);
        }
    //if time is not up
    } else {
        //redraw the timer to reflect how much time is left
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 100, 100);
        ctx.beginPath();
        ctx.arc(50,50,50,-Math.PI/2, 2 * Math.PI * fracElapsed - Math.PI/2)
        ctx.lineTo(50, 50);
        ctx.lineTo(50, 0);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
}
function docBuzzedInPlayer(answer) {
    if(buzzedInPlayer) {
        //subtract the points from the player
        buzzedInPlayer.score -= answer.points
        document.getElementById(buzzedInPlayer.buzzer).textContent = buzzedInPlayer.score;
        //disable the player that answered
        disabledPlayers.push(buzzedInPlayer);
        buzzedInPlayer = null;
    }
    //if there is still a player that is not disabled
    if(disabledPlayers.length !== players.length) {
        //create buzz-in advisory
        createBuzzInAdvisory();
        //make the window listen for buzzes
        window.addEventListener("keydown", buzzerPress, false);
        insertClock(5000, answer, false);
    //if all players have been disabled
    } else {
        disabledPlayers = [];
        revealCorrectQuestion(answer, false);
    }
}
function revealCorrectQuestion(answer, playerWhoGotQuestionCorrect) {
    //clear the buzzed in player
    buzzedInPlayer = null;
    //clear the disabled players
    disabledPlayers = [];
    //remove the question buttons
    for(var i = answer.questions.length; i > 0 ; i--){
        document.getElementsByClassName("questionArea")[0].removeChild(answer.questions[i - 1].button);
    }
    clearBuzzInAdvisory();
    var text = "";
    if(playerWhoGotQuestionCorrect) {
        text += playerWhoGotQuestionCorrect.name + " got it right! "
    }
    text += "The correct question is \"" + answer.questions.find(question => question.isCorrect).text + "\"";
    //replace the answer with the correct question
    document.getElementsByClassName("answerArea")[0].textContent = text;
    //create a new button to initiate the next user action
    var button = document.createElement("button");
    button.className = "btn btn-primary btn-lg btn-block";
    document.getElementsByClassName("questionArea")[0].appendChild(button);
    button.addEventListener("click", removeQuestionDialog, false);
    //If there are still answers left on the board
    if(numberOfAnswers > 0){
        //remind the users whose turn it is
        button.textContent = `It's ${pickingPlayer.name}'s turn to pick a point value from a category.`
    //If there are no more answers left on the board
    } else {
        //determine the winner(s)
        var winners = [];
        var highScore = 0;
        //find the lowest score possible;
        for(var i = 0; i < categories.length; i++){
            var category = categories[i];
            for(var j = 0; j < category.answers.length; j++) {
                highScore -= category.answers[j].points;
            }
        }
        //find the player(s) with the highest score
        for(var i = 0; i < players.length; i++) {
            if(players[i].score > highScore) {
                highScore = players[i].score;
                winners = [players[i]];
            }else if(players[i].score === highScore) {
                winners.push(players[i]);
            }
        }
        var text = "";
        for(var i = 0; i < winners.length; i++) {
            if(i > 0) {
                text += "and "
            }
            text += winners[i].name + " ";
        }
        text += "won.";
        button.textContent = text;
        //put the results for each player on the board
        for(var i = 0; i < players.length; i++) {
            if(winners.includes(players[i])) {
                var text = " won"
            } else {
                var text = " lost"
            }
            document.getElementById(players[i].buzzer).parentNode.parentNode.previousElementSibling.getElementsByClassName("col")[0].textContent = players[i].name + text;
        }
    }
}

