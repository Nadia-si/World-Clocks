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
  timeToronto.innerHTML = time.toLocaleTimeString("en-US", {
    timeZone: "America/Toronto",
  });
  let dateToronto = document.querySelector("#dateToronto");
  dateToronto.innerHTML = time.toLocaleDateString("en-US", {
    timeZone: "America/Toronto",
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  //Sydney
  let timeSydney = document.querySelector("#timeSydney");
  timeSydney.innerHTML = time.toLocaleTimeString("en-US", {
    timeZone: "Australia/Sydney",
  });
  let dateSydney = document.querySelector("#dateSydney");
  dateSydney.innerHTML = time.toLocaleDateString("en-US", {
    timeZone: "Australia/Sydney",
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  //Kigali
  let timeKigali = document.querySelector("#timeKigali");
  timeKigali.innerHTML = realTime;
  let dateKigali = document.querySelector("#dateKigali");
  dateKigali.innerHTML = currentDate;
  //Cape Town
  let timeCape = document.querySelector("#timeCape");
  timeCape.innerHTML = realTime;
  let dateCape = document.querySelector("#dateCape");
  dateCape.innerHTML = currentDate;

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

  function africaZone(event) {
    let cities = document.querySelector("#cities");
    let value = event.target.value;

    let cityZone = {
      kigali: "Kigali",
      cape: "Cape Town",
    };

    let city = cityZone[value];

    if (city) {
      let time = realTime;
      let date = currentDate;
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
  select.addEventListener("change", africaZone);
}
currentTime();
