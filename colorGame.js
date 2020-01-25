var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquareButtons();
    reset();
}

function setupModeButtons(){
    for(var i=0; i<modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares=3 : numSquares=6;
            reset();
        })
    }
}

function setupSquareButtons(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                h1.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset(){
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    var arr = [];
    for(var i = 0; i<num; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return arr;
}