/* JS Code written by FHutchins for Udemy The Complete 2022 Web Development Bootcamp */

var numberOfDrums = document.querySelectorAll(".drum").length;

// Detects button clicks
for(var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
// Detects key pressed events
document.addEventListener("keydown",
    function (event) {
        playSound(event.key);
        buttonAnimation(event.key);
    });

// Switch case function to play audio file for certain buttons/keys
function playSound(key) {
    switch(key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

// Runs a highlight animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}