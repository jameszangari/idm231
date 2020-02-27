let zodDateObj = document.getElementById('zodDate');
let showMeObj = document.getElementById('showMe');

let targetObj = document.getElementById('target');

function computeZod() {
  let userBday = zodDateObj.value;
  console.log('userBday is ' + userBday);
  // 1998-10-21
  let monStr = userBday.substr(5,2);
  let dayStr = userBday.substr(8,2);
  // convert str into number
  let monNum = parseInt(monStr);
  let dayNum = parseInt(dayStr);

  console.log('monNum = ' + monNum);
  console.log('dayNum = ' + dayNum);

if (isNaN(monNum)) {
    console.log('Please fill out this field.');}

  showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}

function swapZodInfo(whichOne) {
  // swap out zodiac image
  // swap out zodiac description with date range
  // play a zodiac sound

  console.log('swap zod info called ' + whichOne);

  if        (whichOne == 1) {
      targetObj.src = '../images/characters/janmichaelvincent2.png';
      showMeObj.textContent = "Jan-Michael Vincent is an actor who appeared in Interdimensional Cable 2: Tempting Fate. Eight versions of him appeared in the movie Jan Quadrant Vincent 16. Based on the trailer for the movie, it appeared to be an action movie set in a dystopian society where Jan-Michael Vincents helped to maintain order. There is no quadrant P, instead there are 2 quadrants H.";      
  } else if (whichOne == 2) {
      targetObj.src = '../images/characters/mrmeeseeks2.png';
      showMeObj.textContent = "Mr. Meeseeks is the name of all the Meeseeks summoned by activating a Mr. Meeseeks Box. The Meeseeks appear in the fifth episode of the first season, 'Meeseeks and Destroy'. They are known to inhabit planets across the universe.";

  } else if (whichOne == 3) {
      targetObj.src = '../images/characters/krombopulosmichael2.png';
      showMeObj.textContent = "Krombopulos Michael was a Gromflomite assassin that purchased weapons from Rick Sanchez, he was also the husband of Amy. Rick refers to him as his best customer. His final purchase was an anti-matter handgun, to be used to kill Fart, a gaseous target that couldn't be destroyed with normal weapons. When he meets Rick at a garage to purchase the gun, Krombopulos introduces himself to Morty, giving him a business card.";

  } else if (whichOne == 4) {
      targetObj.src = '../images/characters/princenebulon2.png';
      showMeObj.textContent = "Prince Nebulon was the leader of the Zigerions in Rick and Morty. He appears as the main antagonist in M. Night Shaym-Aliens!. He has a long-standing grudge against Rick Sanchez and is committed to stealing the recipe for Concentrated Dark Matter from him. He is apparently concerned with the discoloration of his butthole flaps.";

  } else if (whichOne == 5) {
      targetObj.src = '../images/characters/gearhead2.png';
      showMeObj.textContent = "Revolio Clockberg Jr., more commonly referred to as Gearhead, is a recurring character who first appeared in the episode 'Ricksy Business'. His character is a representative of 'social gearheads', people who know a lot of technical information about gears. In Gearhead's case, it's information about the Gear Wars and engineering. He is a guest at Rick and Summer's party and can play an instrument similar to a lute.";

  } else if (whichOne == 6) {
      targetObj.src = '../images/characters/kingflippynips2.png';
      showMeObj.textContent = "King Flippy Nips is the ruler of Pluto. He first appeared in 'Something Ricked This Way Comes' as the central antagonist. He acts quite self-centered. He is also selfish because he knows everything his son says is real, but keeps quiet about it because he wants to stay king. He is also highly manipulative.";

  } else if (whichOne == 7) {
      targetObj.src = '../images/characters/scaryterry2.png';
      showMeObj.textContent = "Scary Terry is a character that appeared as the former secondary antagonist in the episode 'Lawnmower Dog' and the comic story Morty and Rick in: Mortballs. After a failed attempt at killing them, Scary Terry retreats and heads home. While he is asleep, Rick and Morty incept his dreams and befriend him, he is also the husband of Melissa, and the father of Scary Brandon.";

  } else if (whichOne == 8) {
      targetObj.src = '../images/characters/kingjellybean2.png';
      showMeObj.textContent = "King Jellybean (also referred to as Mr. Jellybean) is the central antagonist of the episode 'Meeseeks and Destroy'. King Jellybean was a giant anthropomorphic jelly bean. It was later revealed that he was the king of a poor village that Rick and Morty agreed to help.";

  } else if (whichOne == 9) {
      targetObj.src = '../images/characters/jessica2.png';
      showMeObj.textContent = "Jessica is a student at Harry Herpson High School. She is a popular girl in Morty Smiths math class who he desires to be with romantically and often has surreal daydreams about, almost exclusively sexual in nature. Much to Morty's dismay, she was already in a relationship with Brad, whom she frequently experienced difficulties with.";

  } else if (whichOne == 10) {
      targetObj.src = '../images/characters/birdperson2.png';
      showMeObj.textContent = "Birdperson, currently known as Phoenixperson, is a recurring character in Rick and Morty. He is an old friend of Rick's and has seemingly known Morty since he was a baby. He attends Rick's party looking for a new mate after ending his soul-bond with his previous spirit-partner. At the end of the episode, he gets back in the saddle with one of Summer's high school friends, Tammy.";

  } else if (whichOne == 11) {
      targetObj.src = '../images/characters/squanchy2.png';
      showMeObj.textContent = "Squanchy is a cat-like anthropomorphic creature that was invited to Rick and Summer's party in 'Ricksy Business'. He is a recurring character in Rick and Morty, and very good friends with Rick, sharing his love for alcohol. Morty and Jessica first meet Squanchy engaging in auto-erotic asphyxiation masturbation in Morty's garage. This marks the first among many things he refers to as 'squanching'";

  } else if (whichOne == 12) {
      targetObj.src = '../images/characters/zeepxanflorp2.png';
      showMeObj.textContent = "Zeep Xanflorp is a scientist within Rick's Microverse Battery who creates his own micro-planet power supply called the Miniverse. His development of a new power supply prevents Rick from using his flying car. Zeep is depicted as arrogant and very intelligent, and in many ways a parallel of Rick Sanchez.";

  } else {
      console.log('error in swapzodinfo');
  }}

function dateToZodiac(whichMonth, whichDayOfMonth) {
  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) { 
    swapZodInfo(1);

  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    swapZodInfo(4);

  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    swapZodInfo(3);

  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    swapZodInfo(10);

  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    swapZodInfo(12);

  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    swapZodInfo(11);

  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    swapZodInfo(9);

  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    swapZodInfo(8);

  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    swapZodInfo(7);

  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    swapZodInfo(2);

  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    swapZodInfo(6);

  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    swapZodInfo(5);

  } else {
    AstroSign = "Invalid entry"
  }
  return AstroSign;
}

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

capricornObj.addEventListener('click', function () {
  swapZodInfo(1);
}, false);

ariesObj.addEventListener('click', function () {
  swapZodInfo(2);
}, false);

scorpioObj.addEventListener('click', function () {
  swapZodInfo(3);
}, false);

sagittariusObj.addEventListener('click', function () {
  swapZodInfo(4);
}, false);

aquariusObj.addEventListener('click', function () {
  swapZodInfo(5);
}, false);

piscesObj.addEventListener('click', function () {
  swapZodInfo(6);
}, false);

taurusObj.addEventListener('click', function () {
  swapZodInfo(7);
}, false);

geminiObj.addEventListener('click', function () {
  swapZodInfo(8);
}, false);

cancerObj.addEventListener('click', function () {
  swapZodInfo(9);
}, false);

libraObj.addEventListener('click', function () {
  swapZodInfo(10);
}, false);

leoObj.addEventListener('click', function () {
  swapZodInfo(11);
}, false);

virgoObj.addEventListener('click', function () {
  swapZodInfo(12);
}, false);