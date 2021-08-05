var emojis = [
    "angry",
    "dizzy",
    "flushed",
    "frown",
    "grimace",
    "grin-alt",
    "grin-beam",
    "grin-beam-sweat",
    "grin-hearts",
    "grin-squint",
    "grin-squint-tears",
    "grin-stars",
    "grin-tears",
    "grin-tongue-squint",
    "grin-wink",
    "kiss",
    "meh",
    "meh-rolling-eyes",
    "smile-beam",
    "surprise",
    "tired",
    "smile",
];

const startGame = () => {
    const startGameContainer = document.getElementById('gameContainer');
    var scoreDiv = document.getElementById('level').value;
    var score = 0, difficulty;
    
    if (level == 'easy') difficulty = 4;
    else if (level == 'medium') difficulty = 6;
    else if (level == 'hard') difficulty = 8;
    else if (level == 'expert') difficulty = 10;

    var emojis2 = JSON.parse(JSON.stringify(emojis));
    var selectedEmoji = [];

    for(var i = (difficulty*difficulty)/2;i>0;--i){
        var randomEmoji = emojis2.splice(Math.floor(Math.random()*emojis2.length, 1);

        selectedEmoji.push(randomEmoji);
        selectedEmoji.push(randomEmoji);
        
    }


    
    return false;
}

// <i class='fab fa-smile'/>


