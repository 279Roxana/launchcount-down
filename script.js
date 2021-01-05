
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

function displayTime(){
    let d;
    let h;
    let m;
    let s;

    setInterval(function(){
      // d = 8
      // h = 23
      // m = 55
      // s = 41
      

  

      d = d < 10 ? "0" + d : d;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      if(s == 00){
        s = 59;
        s--;
      }else{
        s= 0;
      }
      if(m == 00 ){
        m = 59;
        m--
      }

      // if(h == 00){
      //     h = 23;
      //     d --;
      // }
      

//       console.log(d)
//       console.log(h)
// console.log(m)
// console.log(s)
    }, 1000)
    console.log(`${d} : ${h} : ${m} : ${s}`)
     return `${d} : ${h} : ${m} : ${s}`
    
}

displayCountdown()
displayTime()