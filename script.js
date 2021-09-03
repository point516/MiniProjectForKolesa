const burger = document.querySelector(".burger_button");
const navigation = document.querySelector(".navigation");

burger.addEventListener("click", function(){
    document.body.classList.toggle("nav_open");
})