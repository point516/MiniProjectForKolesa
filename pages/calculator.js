var numbers = document.querySelectorAll(".numbers .box");
var operators = document.querySelectorAll(".operators .box");
var input = document.querySelector("#input");
var result = document.querySelector("#equal");
var clear = document.querySelector("#clear");
var resultDisplayed = false;
input.innerHTML = "";

for (var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(e){
        if (input.innerHTML.length > 16 ){
            input.innerHTML = "Too Much Numbers ";
        }else{
            var inputString = input.innerHTML;
            var lastChar = inputString[inputString.length - 1];
            if (resultDisplayed === false){
                input.innerHTML += e.target.innerHTML; ////////////////// e.target /////////////////
            }else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "÷" || lastChar === "×"){
                resultDisplayed === false;
                input.innerHTML += e.target.innerHTML;
            }else{
                resultDisplayed === false;
                inputString = "";
                input.innerHTML += e.target.innerHTML;
            }
        }
    })
}

for (var i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(e){
        if (input.innerHTML.length > 16 ){
            input.innerHTML = "Too Much Numbers ";
        }else{
            var inputString = input.innerHTML;
            var lastChar = inputString[inputString.length - 1];  
            if (lastChar === "+" || lastChar === "-" || lastChar === "÷" || lastChar === "×"){
                var newString = inputString.slice(0,inputString.length - 1) + e.target.innerHTML;
                input.innerHTML = newString;
            }else if (inputString.length == 0){
                input.innerHTML = "";
            }else{
                input.innerHTML += e.target.innerHTML;
            }
        }
    })
}

result.addEventListener("click", function(e){
    var inputString = input.innerHTML;
    var nums = inputString.split(/\+|\-|\×|\÷/g);
    var ops = inputString.replace(/[0-9]|\./g, "").split("");

    var index = ops.indexOf("÷");
    while (index != -1){
        nums.splice(index, 2, nums[index] / nums[index + 1]);
        ops.splice(index,1);
        index = ops.indexOf("÷");
    }

    index = ops.indexOf("×");
    while (index != -1){
        nums.splice(index, 2, nums[index] * nums[index + 1]);
        ops.splice(index,1);
        index = ops.indexOf("×");
    }

    index = ops.indexOf("-");
    while (index != -1){
        nums.splice(index, 2, nums[index] - nums[index + 1]);
        ops.splice(index,1);
        index = ops.indexOf("-");
    }

    index = ops.indexOf("+");
    while (index != -1){
        nums.splice(index, 2, parseFloat(nums[index]) + parseFloat(nums[index+ 1]));
        ops.splice(index,1);
        index = ops.indexOf("+");
    }

    
    if (nums[0].length > 17){
        input.innerHTML = "Too Much Numbers ";
    }
    input.innerHTML = nums[0];
    resultDisplayed = true;

})

clear.addEventListener("click", function(e){
    input.innerHTML = "";
})