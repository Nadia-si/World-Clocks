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
  let currentDate = `${month} ${day}, ${year}`;

  //Toronto
  let timeToronto = document.querySelector("#timeToronto");
  let torontoTimeZone = time.toLocaleTimeString("en-US", {
    timeZone: "America/Toronto",
  });
  timeToronto.innerHTML = torontoTimeZone;

  let dateToronto = document.querySelector("#dateToronto");
  let torontoDate = time.toLocaleDateString("en-US", {
    timeZone: "America/Toronto",
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  dateToronto.innerHTML = torontoDate;

  //Sydney
  let timeSydney = document.querySelector("#timeSydney");
  let sydneyTimeZone = time.toLocaleTimeString("en-US", {
    timeZone: "Australia/Sydney",
  });
  timeSydney.innerHTML = sydneyTimeZone;

  let dateSydney = document.querySelector("#dateSydney");
  let sydneyDate = time.toLocaleDateString("en-US", {
    timeZone: "Australia/Sydney",
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  dateSydney.innerHTML = sydneyDate;

  //Kigali
  let timeKigali = document.querySelector("#timeKigali");
  timeKigali.innerHTML = realTime;
  let dateKigali = document.querySelector("#dateKigali");
  dateKigali.innerHTML = currentDate;

  //London
  let timeLondon = document.querySelector("#timeLondon");
  timeLondon.innerHTML = time.toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
  });
  let dateLondon = document.querySelector("#dateLondon");
  dateLondon.innerHTML = time.toLocaleDateString("en-US", {
    timeZone: "Europe/London",
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  //Los_Angeles
  let timeLosAngeles = time.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  let dateLosAngeles = time.toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  //New Delhi
  let timeNewDelhi = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  let dateNewDelhi = time.toLocaleDateString("en-US", {
    timeZone: "Asia/Kolkata",
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  //Bangkok
  let timeBangkok = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Bangkok",
  });
  let dateBangkok = time.toLocaleDateString("en-US", {
    timeZone: "Asia/Bangkok",
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  let t = setTimeout(function () {
    currentTime();
  }, 1000);

  function currentLocation(event) {
    let cities = document.querySelector("#cities");
    let value = event.target.value;
    if (value === "current") {
      value = moment.tz.guess();
    }

    if (value.length) {
      let searchTime = moment().tz(value);
      let city = value.split("/")[1].replace("_", " ");
      let time = searchTime.format("h:mm:ss A");
      let currentDate = searchTime.format("MMMM Do YYYY");
      cities.innerHTML = `
		<div class="city">			
				<h2>${city}
        <div class="date">${currentDate}</div>
        </h2>
			<div class="time">${time}</div>
		</div>
		`;
    }
  }

  function losAngelesZone(event) {
    let cities = document.querySelector("#cities");
    let value = event.target.value;

    let cityZone = {
      losAngeles: "Los Angeles",
    };
    let city = cityZone[value];

    if (city) {
      let time = timeLosAngeles;
      let date = dateLosAngeles;
      cities.innerHTML = `
      <div class="city">
      <h2>${city}
      <div class="date">${date}</div>
      </h2>
      <div class="time">${time}</div>
      </div>`;
    }
  }

  function newDelhiZone(event) {
    let cities = document.querySelector("#cities");
    let value = event.target.value;

    let cityZone = {
      newDelhi: "New Delhi",
    };
    let city = cityZone[value];

    if (city) {
      let time = timeNewDelhi;
      let date = dateNewDelhi;
      cities.innerHTML = `
      <div class="city">
      <h2>${city}
      <div class="date">${date}</div>
      </h2>
      <div class="time">${time}</div>
      </div>`;
    }
  }

  function bangkokZone(event) {
    let cities = document.querySelector("#cities");
    let value = event.target.value;

    let cityZone = {
      bangkok: "Bangkok",
    };
    let city = cityZone[value];

    if (city) {
      let time = timeBangkok;
      let date = dateBangkok;
      cities.innerHTML = `
      <div class="city">
      <h2>${city}
      <div class="date">${date}</div>
      </h2>
      <div class="time">${time}</div>
      </div>`;
    }
  }

  let select = document.getElementById("search");
  select.addEventListener("change", currentLocation);
  select.addEventListener("change", losAngelesZone);
  select.addEventListener("change", newDelhiZone);
  select.addEventListener("change", bangkokZone);
}
currentTime();
