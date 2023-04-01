function displayTime() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("checkSeconds()", refresh);
}
displayTime();

let currentTime = new Date();
function checkHour() {
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  newformat = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return hours;
}
function checkMinutes() {
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes;
}
function checkSeconds() {
  let seconds = currentTime.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return seconds;
}

let todayTime = document.querySelector("#realTime");
let timeNow = document.querySelector("#timeNow");
todayTime.innerHTML = ` ${checkHour()}:${checkMinutes()}:${checkSeconds()} ${newformat}`;
timeNow.innerHTML = ` ${checkHour()}:${checkMinutes()}:${checkSeconds()}`;
