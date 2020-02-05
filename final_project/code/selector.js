let zodDateObj = document.getElementById('zodDate');
let showMeObj = document.getElementById('showMe');

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
    console.log('Please fill out this field.');
  }

  showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}

function dateToZodiac(whichMonth, whichDayOfMonth) {
  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Capricorn // Mr. Poopybutthole";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sagittarius // Glootie";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Scorpio // Beebo";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Libra // Krombopulos Michael";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Virgo // Jagoff";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo // King Flippy Nips";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Cancer // Tony";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gemini // Morty Jr.";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Taurus // Arthricia";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Aries // Chachi";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pisces // Gazorpazorpfield";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aquarius // Zeep Xanflorp";
  } else {
    AstroSign = "Invalid entry"
  }
  return AstroSign;
}