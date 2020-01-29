let zodInfoObj = document.getElementById('zodInfo');
let showMeObj = document.getElementById('showMe');

let zods = [
  'Cap',
  'Sag',
  'Sco',
  'Lib',
  'Vir',
  'Leo',
  'Can',
  'Gem',
  'Tau',
  'Ari',
  'Pis',
  'Aqu'
];

let zodDates = [
  'Dec 22.. Jan 19',
  'Nov 22.. Dec 21',
  'Oct 24.. Nov 21',
  'Sep 23.. Oct 23',
  'Aug 23.. Sep 22',
  'Jul 23.. Aug 22',
  'Jun 22.. Jul 22',
  'May 21.. Jun 21',
  'Apr 20.. May 20',
  'Mar 21.. Apr 19',
  'Feb 19.. Mar 20',
  'Jan 20.. Feb 18'
];

function computeZod() {
    console.log('computeZod called');
    let userPicked = zodInfoObj.value;
    console.log('User picked: ' + userPicked);
    // showMeObj.innerHTML = 'User lucky number is: ' + userPicked;
    // showMeObj.innerHTML = zods[userPicked - 1];
    showMeObj.innerHTML = zods[userPicked - 1] + '' + zodDates[userPicked - 1];
}
