let noOfSquares = 6;
let arr = [];
let picked;
let squares = document.getElementsByClassName("square");
let targetColor = document.getElementById("targetColor");
let message = document.getElementById("message");
let head = document.querySelector("h1");
let reset = document.getElementById("NewColor");

init();

function init() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
        {
            squares[i].style.backgroundColor = arr[i];
            squares[i].addEventListener("click", function () {
                if (picked === this.style.backgroundColor) {
                    message.textContent = "Correct";
                    message.style.color = "green";
                    changeColor(this.style.backgroundColor);
                    reset.textContent = "Play Again?";
                } else {
                    message.textContent = "Try Again";
                    message.style.color = "red";
                    this.style.backgroundColor = "#232323";
                }
            });
        }
    }
}

reset.addEventListener("click", resetIn);

function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++)
        color.push(rgbGenerator());
    return color;
}

function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(color) {

    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
    head.style.backgroundColor = color;

}

function resetIn() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    head.style.backgroundColor = "steelblue";

    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = arr[i];

}

