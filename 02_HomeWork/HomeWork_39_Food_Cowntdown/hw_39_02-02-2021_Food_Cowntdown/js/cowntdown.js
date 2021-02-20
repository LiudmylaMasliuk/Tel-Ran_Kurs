const daysBox = document.querySelector('#days'),
      hoursBox = document.querySelector('#hours'),
      minutesBox = document.querySelector('#minutes'),
      secondsBox = document.querySelector('#seconds');

const timerArray = [daysBox, hoursBox, minutesBox, secondsBox];
timerArray.forEach((item) => item.style.fontSize = '2.5rem');
timerArray.forEach((item) => item.style.marginBottom = '5px');


countdown();
  
function countdown(){
  const endDate = new Date('2021-05-20');
  const daysLeft = (endDate - new Date());

  let days = Math.floor(daysLeft / (24 * 60 * 60 * 1000)),
      hours = Math.floor((daysLeft / (60 * 60 * 1000)) % 24),
      minutes = Math.floor((daysLeft / (60 * 1000)) % 60),
      seconds = Math.floor((daysLeft / 1000) % 60);

  daysBox.innerHTML = days;
  hoursBox.innerHTML = hours;
  minutesBox.innerHTML = minutes;
  secondsBox.innerHTML = seconds;

  setTimeout(countdown, 1000); // creates a loop
}



  
