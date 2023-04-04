function currentTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  newformat = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  let realTime = hours + ":" + minutes + ":" + seconds + " " + newformat;
  let timeToronto = document.querySelector("#timeToronto");
  let timeKigali = document.querySelector("#timeKigali");
  let timeCape = document.querySelector("#timeCape");
  let timeSydney = document.querySelector("#timeSydney");
  timeToronto.innerHTML = time.toLocaleTimeString("en-US", {
    timeZone: "America/Toronto",
  });
  timeSydney.innerHTML = time.toLocaleTimeString(undefined, {
    timeZone: "Australia/Sydney",
  });
  timeKigali.innerHTML = realTime;
  timeCape.innerHTML = realTime;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

let time = new Date();
let day = time.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[time.getMonth()];
let year = time.getFullYear();
let currentDate = `${month} ${day}th ${year}`;

let dateToronto = document.querySelector(".dateToronto");
dateToronto.innerHTML = currentDate;
let dateKigali = document.querySelector(".dateKigali");
dateKigali.innerHTML = currentDate;
let dateCape = document.querySelector(".dateCape");
dateCape.innerHTML = currentDate;
let dateSydney = document.querySelector(".dateSydney");
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
dateSydney.innerHTML = time.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
  day: "numeric",
});
//dateSydney.innerHTML = month[sydneyDate];

/*
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
document.write("The current month is " + monthNames[d.getMonth()]);

let year = date.getFullYear();
let day = date.getDate();

let currentDate = `${day}-${month}-${year}`;

*/
