const color = document.querySelector("#color");
const message = document.querySelector(".message");
const box = document.querySelector(".square");
const boxes = document.querySelectorAll(".square");
const back = document.querySelector("h1");
const resetButton = document.querySelector(".reset");
const modes = document.querySelectorAll(".mode");
let mode = 6;

const getRGB = () => {
    var newRGB = "rgb" + "(" + blessRNG() + ", " + blessRNG() + ", " + blessRNG() + ")";
    return newRGB;
}

const changeRGB = () => {
    var newRGB = "rgb" + "(" + blessRNG() + ", " + blessRNG() + ", " + blessRNG() + ")";
    color.innerHTML = newRGB;
}

const blessRNG = () => (Math.floor(Math.random()*255).toString());

function colorBoxes(){
    var boxArr = Array.from(boxes);
    boxArr.forEach(box => {
        var newColor = "rgb" + "(" + blessRNG() + "," + blessRNG() + "," + blessRNG() + ")";
        box.style.backgroundColor = newColor});
    boxArr[Math.floor(Math.random()*mode)].style.backgroundColor = color.innerHTML;
}

function win(){
    back.style.backgroundColor = color.innerHTML;
    resetButton.innerHTML = "play again";
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = color.innerHTML;
    })
}

function chooseMode(){
    for (var i=0; i < modes.length; i++){
        modes[i].addEventListener("click", function(e){
            for (var i=0; i < modes.length; i++){
                modes[i].classList.remove("selected");
            }
            e.target.classList.add("selected");
            if(e.target.innerHTML == "easy"){
                mode = 3;
            }else{
                mode = 6;
            }
            reset();
        })
    }
}

function reset(){
    changeRGB();
    for (var i=0; i < boxes.length; i++){
        if (i < mode){
            boxes[i].style.display = "block";
            boxes[i].style.backgroundColor = getRGB();
        }else{
            boxes[i].style.display = "none";
        }
    }
    boxes[Math.floor(Math.random()*mode)].style.backgroundColor = color.innerHTML;
    message.innerHTML = "";
    back.backgroundColor = "#2C8E99";
}

function game(){
    (Array.from(boxes)).forEach(box => {  /* ------------------------- НЕ ОБЯЗАТЕЛЬНО ---------------------*/
        box.addEventListener("click", function(e){
            if(e.target.style.backgroundColor == color.innerHTML){
                message.innerHTML = "Correct";
                win();
            }else{
                message.innerHTML = "try again";
                e.target.style.backgroundColor = "#232323";
            }
        })
    })
}

resetButton.addEventListener("click", reset);

game();
chooseMode();
changeRGB();
colorBoxes();