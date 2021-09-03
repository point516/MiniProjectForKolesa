const alphabet = document.querySelector("#alphabet");
const category = document.querySelector(".category");
const guessWord = document.querySelector(".guess_word");
const hint = document.querySelector("#hint");
const clue = document.querySelector(".clue");
const livesMessage = document.querySelector(".lives");
const playAgain = document.querySelector("#play_again");
const activeClass = "active";
let guess;
let guesses = [];
let word;
let categoryIndex;
let lives;
let counter;
let space; 
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
const categories = [
    ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
    ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
    ["manchester", "milan", "madrid", "amsterdam", "prague"]
];
const hints = [
    ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
    ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
    ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
];

function buildAlphabet(){
    for (var i = 0; i < letters.length; i++){
        var newNode = document.createElement("div");
        newNode.id = "letter";
        newNode.innerHTML = letters[i];
        alphabet.appendChild(newNode);
    }
}

function selectCategory(){
    categoryIndex = Math.floor(Math.random()*categories.length);
    if (categoryIndex == 0){
        category.innerHTML = "The Chosen Category is Premier League Football Teams";
    }else if (categoryIndex == 1){
        category.innerHTML = "The Chosen Category is Films";
    }else{
        category.innerHTML = "The Chosen Category is Cities"
    }
}

function buildWord(){
    let wordIndex = Math.floor(Math.random()*categories[categoryIndex].length);
    console.log(wordIndex);
    word = categories[categoryIndex][wordIndex];
    console.log(word);
    for (var i = 0; i < word.length; i++){
        let newNode = document.createElement("div");
        newNode.className = "guess";
        if (word[i] === "-"){
            newNode.innerHTML = "-";
            space += 1
        }else{
            newNode.innerHTML = "_";
        }
        guessWord.appendChild(newNode);
        guesses.push(newNode);
    }
}

function comments(){
    if (lives < 1){
        livesMessage.innerHTML = "Game Over";
    }else if(counter + space == guesses.length){
        livesMessage.innerHTML = "You Win";
    }else{
        livesMessage.innerHTML = "You Have " + lives + " lives";
    }
}

function check(){
    temp = document.querySelectorAll("#letter");
    for (var i = 0; i < temp.length; i++){
        temp[i].addEventListener('click', function(e){
            guess = e.target.innerHTML;
            for (var j = 0; j < word.length; j++){
                if (guess === word[j]){
                    guesses[j].innerHTML = guess;
                    counter += 1;
                }
            }
            var index = word.indexOf(guess);
            if (index === -1 && !e.target.classList.contains("active")){
                lives -= 1;
                comments();
            }else{
                comments();
            }
            e.target.classList.add(activeClass);
        })
    }
}

function play(){
    lives = 10;
    counter = 0;
    space = 0;
    buildAlphabet();
    selectCategory();
    buildWord();
    comments();
    check();
}

playAgain.addEventListener("click", function(){
    while(alphabet.firstChild){
        alphabet.removeChild(alphabet.firstChild);
    }
    while(guessWord.firstChild){
        guessWord.removeChild(guessWord.firstChild);
    }
    clue.innerHTML = "";
    lives = 10;
    counter = 0;
    space = 0;
    play()
})

hint.addEventListener("click", function(){
    let wordIndex = categories[categoryIndex].indexOf(word);
    clue.innerHTML = "Clue - " + hints[categoryIndex][wordIndex];
})

play();