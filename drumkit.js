const playingClass = "playing";
const crashRide = document.querySelector("#crashRide");
const hihatTop = document.querySelector("#hihatTop");

function animateCrashRide() {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}

function animateHihatTop() {
    hihatTop.style.top = '171px';
}

function playSound(e) {
    var pressedKey = e.keyCode;
    var checkKey = document.querySelector(`kbd[data-key = "${pressedKey}"]`);

    if (!checkKey) return;

    var sound = document.querySelector(`audio[data-key = "${pressedKey}"]`);
    sound.currentTime = 0;
    sound.play();


    switch(pressedKey){
        case 69:
            animateCrashRide();
            break;
        case 82:
            animateCrashRide();
            break;
        case 75:
            animateHihatTop();
            break;
    }

    checkKey.classList.add(playingClass);
        
}

function stopCrashRide(){
    crashRide.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

function stopHihatTop(){
    hihatTop.style.top = '166px';
}

function stopKeyTransition(e){
    e.target.classList.remove(playingClass);
}

const keys = document.querySelectorAll(".key");
Array.from(keys).forEach(key => {key.addEventListener('transitionend', stopKeyTransition)})

crashRide.addEventListener('transitionend', stopCrashRide);
hihatTop.addEventListener('transitionend', stopHihatTop);

window.addEventListener("keydown", playSound );

/*js functions, streams, em? css
transitionend;target*,switch,classlist.add,audio,data-*, css selectors*, var,let,const, addEventistener что передаётся второму значению?,
float, clear (hangman), border-box
we can acces strings with [],
===, addEventListener, .onclick()??? 
display:flex, align-items: center (выравнить вертикально по центру)), justify-content: center (по горизонтали),
flex
justify-content: space between, прилепляет блоки по краям и получется пробел между ними,
border-box?
padding - margin
line-height
.works_item:hover .works_block{
    opacity:1;
} при наводе на айтем поменять блок
overflow:hidden

.teams_img{
    display: block;
    max-width: 100%;
    height: auto;
} адаптивная картинка

<g></g>
svg
top: 0; top,bottom ... for any positions?? displays???
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;  z index for everything?
<button class="burger_button">
    <div class="project_burger"></div>
</button>
задаёшь стили для блока внутри, прописываешь такие же для before after и ставишь для них absolute чтобы правильно их поставить одну сверху и одну снизу
чтобы кнопка нормально нажималась нужно жобавить паддинг для <button>
    */