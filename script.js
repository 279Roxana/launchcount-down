
let countBox = document.querySelector(".countBox")
let days = document.createElement("div")
days.className = "days"
let hours = document.createElement("div")
hours.className = "hours"
let minutes = document.createElement("div")
minutes.className = "minutes"
let seconds = document.createElement("div")
seconds.className = "seconds"

countBox.append(days)
countBox.append(hours)
countBox.append(minutes)
countBox.append(seconds)

function displayTime() {
  let d = 8;
  let h = 23;
  let m = 55;
  let s = 41;

  setInterval(function () {

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

    console.log(`${d} : ${h} : ${m} : ${s}`)
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    return `${d} : ${h} : ${m} : ${s}`
  }, 1000)

  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  h = h < 10 ? "0" + h : h;
  d = d < 10 ? "0" + d : d;

}

displayTime()