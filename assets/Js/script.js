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

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
const startGame = () => {
const gameContainer = document.getElementById('gameContainer');
gameContainer.innerHTML = '';
var scoreDiv = document.getElementById('score');
const level = document.getElementById('level').value;
var score = 0, difficulty;

if (level == 'easy') difficulty = 4;
else if (level == 'medium') difficulty = 6;
else if (level == 'hard') difficulty = 8;
else if (level == 'expert') difficulty = 10;

var brands2 = JSON.parse(JSON.stringify(brands));
var selectedBrand = [];

for (var i = (difficulty*difficulty)/2;i>0;--i) {
var randomBrand = brands2.splice(Math.floor(Math.random()*brands2.length),1);

selectedBrand.push(randomBrand);
selectedBrand.push(randomBrand);

}

for (var i = difficulty;i>0;--i){
var row = document.createElement('div')
for(var j = difficulty;j>0;--j){
var col = document.createElement('i');
col.classList.add('fab');
col.classList.add('fa-'+ selectedBrand.splice(Math.floor(Math.random()*selectedBrand.length), 1));

col.addEventListener('click', function(event) {
var revealed = document.querySelectorAll('.isShown');

if(revealed.length == 2) {
    if(revealed[0].getAttribute('class') == revealed[1].getAttribute('class')) {
        revealed[0].classList.add('isMatched');
        revealed[1].classList.add('isMatched');
    }
    
    revealed[0].classList.remove('isShown');
    revealed[1].classList.remove('isShown');

}
event.currentTarget.classList.add('isShown');


if(revealed.length == 1) {
    if(revealed[0].getAttribute('class') == event.currentTarget.getAttribute('class'))
    ++score;
}

scoreDiv.innerHTML = `Score ${score}`;
if(score == (difficulty*difficulty)/2) {
    alert('Congrats! You Won!!')
    window.location.reload();

}

})





row.append(col);

}
gameContainer.append(row);

}

return false;


}


// <i class='fab fa-smile'/>


