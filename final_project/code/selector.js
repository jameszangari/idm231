// Defining
let zodDateObj = document.getElementById('zodDate');
let computeObj = document.getElementById('compute');
let showMeObj = document.getElementById('showMe');
let showMeDatesObj = document.getElementById('showMeDates');

let playSoundObj = document.getElementById('playSound');
let soundPlayerObj = document.getElementById("soundPlayer");
let targetObj = document.getElementById('target');

let capricornObj = document.getElementById('capricorn');
let ariesObj = document.getElementById('aries');
let scorpioObj = document.getElementById('scorpio');
let sagittariusObj = document.getElementById('sagittarius');
let aquariusObj = document.getElementById('aquarius');
let piscesObj = document.getElementById('pisces');
let taurusObj = document.getElementById('taurus');
let geminiObj = document.getElementById('gemini');
let cancerObj = document.getElementById('cancer');
let libraObj = document.getElementById('libra');
let leoObj = document.getElementById('leo');
let virgoObj = document.getElementById('virgo');

// Date Ranges for Zodiac Signs
function dateToZodiac(whichMonth, whichDayOfMonth) {

  if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    // "Aries"
    playSomething('../audio/mrmeeseeks.wav'); 
    swapZodInfo(1);

} else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    // "Taurus"
    playSomething('../audio/scarryterry.wav');
    swapZodInfo(2);

} else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    // "Gemini"
    playSomething('../audio/kingjellybean.wav');
    swapZodInfo(3);

} else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    // "Cancer"
    playSomething('../audio/jessica.wav');
    swapZodInfo(4);

} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    // "Leo"
    playSomething('../audio/squanch.wav');
    swapZodInfo(5);

} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    // "Virgo"
    playSomething('../audio/zeepxanflorp.wav');
    swapZodInfo(6);

} else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    // "Libra"
    playSomething('../audio/birdperson.wav');
    swapZodInfo(7);

} else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    // "Scorpio"
    playSomething('../audio/krombopulosmichael.wav');
    swapZodInfo(8);

} else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    // "Sagittarius"
    playSomething('../audio/princenebulon.wav');
    swapZodInfo(9);

} else if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) { 
    // "Capricorn"
    playSomething('../audio/janmichaelvincent.wav');
    swapZodInfo(10);

} else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    // "Aquarius"
    playSomething('../audio/gearhead.wav');
    swapZodInfo(11);

} else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    // "Pisces"
    playSomething('../audio/kingflippynips.wav');
    swapZodInfo(12);

} else {
    AstroSign = "Invalid entry"}
  return AstroSign;
}

// On-Click: image, text, and audio load
function swapZodInfo(whichOne) {

  console.log('swapZodInfo called ' + whichOne);
    if        (whichOne == 1) {
      targetObj.src = '../images/characters/mrmeeseeks_icon.png';
      showMeDatesObj.textContent = "Aries (March 21 - April 19)"
      showMeObj.textContent = "Mr. Meeseeks is the name of all the Meeseeks summoned by activating a 'Mr. Meeseeks Box'. Their motivation to help others comes from the fact that existence is painful to a Meeseeks, and the only way to be removed from existence is to complete the task they were called to perform.";
  
    } else if (whichOne == 2) {
      targetObj.src = '../images/characters/scaryterry_icon.png';
      showMeDatesObj.textContent = "Taurus (April 20 – May 20)"
      showMeObj.textContent = "Scary Terry is a misunderstood character who appears to be bloodthirsty and nightmarish. He puts pressure on himself because he is very self-conscious about how scary he is and fears that he may not be terrifying enough to scare people.";
  
    } else if (whichOne == 3) {
      targetObj.src = '../images/characters/kingjellybean_icon.png';
      showMeDatesObj.textContent = "Gemini (May 21 – June 20)"
      showMeObj.textContent = "King Jellybean is a giant anthropomorphic jelly bean who appears to be a kind and friendly individual. However, this just a ruse, which he uses to lure in his victims. King Jellybean was a pedophile, he had a kind and friendly appearance, masking his true nature. ";

    } else if (whichOne == 4) {
      targetObj.src = '../images/characters/jessica_icon.png';
      showMeDatesObj.textContent = "Cancer (June 21 – July 22)"
      showMeObj.textContent = "Jessica is the popular girl at school. Morty Smith desires to be with her romantically and often has surreal daydreams about. Much to Morty's dismay, she was already in a relationship with Brad, whom she frequently experienced difficulties with.";   

    } else if (whichOne == 5) {
      targetObj.src = '../images/characters/squanchy_icon.png';
      showMeDatesObj.textContent = "Leo (July 23 – August 22)"
      showMeObj.textContent = "Squanchy is a cat-like anthropomorphic creature that is good friends with Rick, and shares his love for alcohol. Morty and Jessica first meet Squanchy engaging in auto-erotic asphyxiation masturbation in Morty's garage. This marks the first among many things he refers to as 'squanching'";

    } else if (whichOne == 6) {
      targetObj.src = '../images/characters/zeepxanflorp_icon.png';
      showMeDatesObj.textContent = "Virgo (August 23 – September 22)"
      showMeObj.textContent = "Zeep Xanflorp is a scientist within Rick's Microverse Battery who creates his own micro-planet power supply called the Miniverse. His development of a new power supply prevents Rick from using his flying car. Zeep is depicted as arrogant and very intelligent, and in many ways a parallel of Rick Sanchez.";

    } else if (whichOne == 7) {
      targetObj.src = '../images/characters/birdperson_icon.png';
      showMeDatesObj.textContent = "Libra (September 23 – October 22)"
      showMeObj.textContent = "Birdperson is an old friend of Rick's and has seemingly known Morty since he was a baby. Birdperson is very wise, having experienced so much about the universe with his best friend, Rick. He offers well-meaning advice to anyone willing to listen to him.";

    } else if (whichOne == 8) {
      targetObj.src = '../images/characters/krombopulosmichael_icon.png';
      showMeDatesObj.textContent = "Scorpio (October 23 – November 21)"
      showMeObj.textContent = "Krombopulos Michael was a Gromflomite assassin that purchased weapons from Rick Sanchez. His final purchase was an anti-matter handgun, to be used to kill Fart, a gaseous target that couldn't be destroyed with normal weapons.";

    } else if (whichOne == 9) {
      targetObj.src = '../images/characters/princenebulon_icon.png';
      showMeDatesObj.textContent = "Sagittarius (November 22 – December 21)"
      showMeObj.textContent = "Prince Nebulon was the leader of the Zigerions. He has a long-standing grudge against Rick Sanchez and is committed to stealing the recipe for Concentrated Dark Matter from him. After believing he has all of the ingredients, the bomb explodes, killing Nebulon and his entire crew as Jerry observes while in safety in Rick's escape pod.";

    } else if (whichOne == 10) {
      targetObj.src = '../images/characters/janmichaelvincent_icon.png';
      showMeDatesObj.textContent = "Capricorn (December 22 – January 19)"
      showMeObj.textContent = "Jan-Michael Vincent is an actor who appeared on Interdimensional Cable. Eight versions of him appeared in the movie 'Jan Quadrant Vincent Sixteen'. The action movie trailer was set in a dystopian society where Jan-Michael Vincents helped to maintain order. There is no quadrant P, instead there are two quadrants H.";   

    } else if (whichOne == 11) {
      targetObj.src = '../images/characters/gearhead_icon.png';
      showMeDatesObj.textContent = "Aquarius (January 20 – February 18)"
      showMeObj.textContent = "Revolio Clockberg Jr., more commonly referred to as Gearhead, is a representative of 'social gearheads', people who know a lot of technical information about gears. In Gearhead's case, it's information about the Gear Wars and engineering.";   
      
    } else if (whichOne == 12) {
      targetObj.src = '../images/characters/kingflippynips_icon.png';
      showMeDatesObj.textContent = "Pisces (February 19 – March 20)"
      showMeObj.textContent = "King Flippy Nips is the highly manipulative, self-centered ruler of Pluto who denies thr truth about his 'planet', but keeps quiet about it because he wants to stay king.";      

  } else {
      console.log('error in swapZodInfo');
  }}

// Play Audio Function  
function playSomething(whichOne) {
    console.log('playSomething called' + whichOne)
    soundPlayerObj.src = whichOne;
    soundPlayerObj.play();
}

// Event Listeners for Audio
ariesObj.addEventListener('click', function () {
  swapZodInfo(1);
  playSomething('../audio/mrmeeseeks.wav');
}, false);

taurusObj.addEventListener('click', function () {
  swapZodInfo(2);
  playSomething('../audio/scaryterry.wav');
}, false);

geminiObj.addEventListener('click', function () {
  swapZodInfo(3);
  playSomething('../audio/kingjellybean.wav');
}, false);

cancerObj.addEventListener('click', function () {
  swapZodInfo(4);
  playSomething('../audio/jessica.wav');
}, false);

leoObj.addEventListener('click', function () {
  swapZodInfo(5);
  playSomething('../audio/squanch.wav');
}, false);

virgoObj.addEventListener('click', function () {
  swapZodInfo(6);
  playSomething('../audio/zeepxanflorp2.wav');
}, false);

libraObj.addEventListener('click', function () {
  swapZodInfo(7);
  playSomething('../audio/birdperson.wav');
}, false);

scorpioObj.addEventListener('click', function () {
  swapZodInfo(8);
  playSomething('../audio/krombopulosmichael2.wav');
}, false);

sagittariusObj.addEventListener('click', function () {
  swapZodInfo(9);
  playSomething('../audio/princenebulon2.wav');
}, false);

capricornObj.addEventListener('click', function () {
  swapZodInfo(10);
  playSomething('../audio/janmichaelvincent2.wav');
}, false);

aquariusObj.addEventListener('click', function () {
  swapZodInfo(11);
  playSomething('../audio/gearhead2.wav');
}, false);

piscesObj.addEventListener('click', function () {
  swapZodInfo(12);
  playSomething('../audio/kingflippynips.wav');
}, false);


function computeZod() {
  let userBday = zodDateObj.value;
  // console.log('userBday is ' + userBday);
  // 1998-10-21
  let monStr = userBday.substr(5,2);
  let dayStr = userBday.substr(8,2);
  // convert str into number
  let monNum = parseInt(monStr);
  let dayNum = parseInt(dayStr);

  // console.log('monNum = ' + monNum);
  // console.log('dayNum = ' + dayNum);

if (isNaN(monNum)) {
    console.log('Please fill out this field.');}

  showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}