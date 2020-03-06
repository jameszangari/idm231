// Optimized

const sounds = {
    Bullet: new Audio("sounds/bullet.mp3"),
    Roger: new Audio("sounds/roger.mp3"),
    Heatseeker: new Audio("sounds/heatseeker.mp3")
}

const playSomething = whichSound => {
    whichSound.play();
}

// Loop thru all ".sndButton" buttons
const soundButtonObjs = document.querySelectorAll(".sndButton");
for (var i = 0; i < soundButtonObjs.length; i++) {
//    console.log(soundButtonObjs[i]);
    soundButtonObjs[i].addEventListener("click", function(event) {
        const soundName = event.target.innerHTML;
        playSomething(sounds[soundName])
    }, false)
}