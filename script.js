
//days hours minutes seconds - all in main
//one div each insert through dom
// countdown 08, 23, 55, 41 
// function setup(){
//     displayCountdown()
// }


function displayCountdown(){
    let countBox = document.querySelector(".countBox")
   let days = document.createElement("div")
   days.className = "days"
   let hours = document.createElement("div")
   hours.className = "hours"
   let minutes = document.createElement("div")
   minutes.className = "minutes"
   let seconds = document.createElement("div")
   seconds.className = "seconds"

   countBox.appendChild(days)
   countBox.append(hours)
    countBox.append(minutes)
    countBox.append(seconds)
    console.log(countBox)

}



displayCountdown()