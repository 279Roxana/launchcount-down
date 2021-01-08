
let countBox = document.querySelector(".countBox")
let days = document.createElement("div")
days.className = "days"
let hours = document.createElement("div")
hours.className = "hours"
let minutes = document.createElement("div")
minutes.className = "minutes"
let seconds = document.createElement("div")
seconds.className = "seconds"


let daysCount = document.createElement("p")
    let hoursCount = document.createElement("p")
    let minutesCount = document.createElement("p")
    let secondsCount = document.createElement("p")

    let daysText = document.createElement("div")
    daysText.innerHTML = "DAYS"
    let hoursText = document.createElement("p")
    hoursText.innerHTML = "HOURS"
    let minutesText = document.createElement("p")
    minutesText.innerHTML = "MINUTES"
    let secondsText = document.createElement("p")
    secondsText.innerHTML = "SECONDS"



countBox.append(days)
countBox.append(hours)
countBox.append(minutes)
countBox.append(seconds)


days.append(daysCount)
hours.append(hoursCount)
minutes.append(minutesCount)
seconds.append(secondsCount)
days.append(daysText)
hours.append(hoursText)
minutes.append(minutesText)
seconds.append(secondsText)


function displayTime() {
  let d = 8;
  let h = 23;
  let m = 55;
  let s = 41;

  setInterval(function () {

 
    console.log(`${d} : ${h} : ${m} : ${s}`)


    
    daysCount.innerHTML = d
    hoursCount.innerHTML = h
    minutesCount.innerHTML = m
    secondsCount.innerHTML = s


    s--

    if (s == 00) {
      m -= 1;
      s = 59;
      s--;
    }

    if (m == 00) {
      h -= 1
      m = 59;
      m--
    }

    if (h == 00) {
      d -= 1

    }





    // return `${d} : ${h} : ${m} : ${s}`
  }, 1000)


  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  h = h < 10 ? "0" + h : h;
  d = d < 10 ? "0" + d : d;

}

displayTime()