var brands=[
"angular",
"android",
"audible",
"amazon",
"apple",
"bitcoin",
"chrome",
"css3",
"docker",
"edge",
"dropbox",
"elementor",
"ethereum",
"figma",
"google",
"github",
"gitlab",
"gulp",
"hackerrank",
"hotjar",
"html5",
"java",
"js",
"kaggle",
"laravel",
"linkedin",
"linux",
"mailchimp",
"medium",
"microsoft",
"napster",
"opencart",
"palfed",
"safari",
"skype",
"slack",
"sketch",
"snapchat",
"spotify",
"swift",
"tiktok",
"playstation",
"qq",
"rebel",
"vimeo",
"waze",
"windows",
"youtube",
"xbox",
"twitch",
];
var timer;
var secondsTimer = 180;
var score = 0;


function startTimer(secondsTimer){
    timer = setInterval(function(){
        minutes = Math.floor(secondsTimer / 60);
        seconds = secondsTimer - minutes * 60;
        document.getElementById('time').innerHTML = minutes +':'+ seconds;
        secondsTimer = secondsTimer - 1;
    }, 1000);
}


function setDifficulty(level){
    if (level == 'easy') {
        difficulty = 4;
    }
    if (level == 'medium') {
        difficulty = 6;
    }
    if (level == 'hard') {
        difficulty = 8;
    }
    if (level == 'expert') {
        difficulty = 10;
    }
    return difficulty;
}


function getRandomGrid(difficulty){
    let brands2 = JSON.parse(JSON.stringify(brands));
    let selectedBrand = [];
    let index = (difficulty*difficulty)/2;
    for (index; index>0; --index) {
        var randomBrand = brands2.splice(Math.floor(Math.random()*brands2.length), 1);
        selectedBrand.push(randomBrand);
        selectedBrand.push(randomBrand);
    }
    return selectedBrand;
}

function checkForMatch(revealed){
    if(revealed[0].getAttribute('class') == revealed[1].getAttribute('class')) {
        revealed[0].classList.add('isMatched');
        revealed[1].classList.add('isMatched');
        ++score;
    }
    setTimeout(function(){
        revealed[0].classList.remove('isShown');
        revealed[1].classList.remove('isShown');
    }, 1000);
    
}

function onCardClick(event){
    event.currentTarget.classList.add('isShown');
    var revealed = document.querySelectorAll('.isShown');
    var scoreDiv = document.getElementById('score');
    
    if(revealed.length == 2) {
        checkForMatch(revealed);
    }
    scoreDiv.innerHTML = `Score ${score}`;
    if(score == (difficulty*difficulty)/2) {
        alert('Congrats! You Won!!')
        window.location.reload();
    }
}


function showGrid(selectedBrand, difficulty){
    for (var i = difficulty;i>0;--i){
        var row = document.createElement('div')
        for(var j = difficulty;j>0;--j){
            var col = document.createElement('i');
            col.classList.add('fab');
            col.classList.add('fa-'+ selectedBrand.splice(Math.floor(Math.random()*selectedBrand.length), 1));
            col.addEventListener('click', onCardClick)        
            row.append(col);
        
        }
        gameContainer.append(row);
        
    }
        



}


const startGame = () => {
    const gameContainer = document.getElementById('gameContainer');
    const level = document.getElementById('level').value;
    var difficulty = setDifficulty(level);
    var selectedBrand = getRandomGrid(difficulty);
    
    startTimer(secondsTimer);
    gameContainer.innerHTML = '';
    showGrid(selectedBrand, difficulty);
    return false;
}



