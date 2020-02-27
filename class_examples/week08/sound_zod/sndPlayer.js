let but1Obj = document.getElementById("but1");
let but2Obj = document.getElementById("but2");
let but3Obj = document.getElementById("but3");

let soundPlayerObj = document.getElementById("soundPlayer");

but1Obj.addEventListener('click', function () {
    playSomething('sounds/bullet.mp3');
}, false);

but2Obj.addEventListener('click', function () {
    playSomething('sounds/heatseeker.mp3');   
}, false);

but3Obj.addEventListener('click', function () {
     playSomething('sounds/roger.mp3');   
}, false);

function playSomething(whichOne) {
    console.log('playSomething called' + whichOne)
    soundPlayerObj.src = whichOne;
    soundPlayerObj.play();
}