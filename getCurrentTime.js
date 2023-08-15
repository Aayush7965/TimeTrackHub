function currentTime() {
    const date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";
  
    if (hh == 0) {
      hh = 12;
    }
  
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }
  
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
  
    let time = hh + ":" + mm + " " + session;
  
    document.querySelector("h1").innerHTML = time;
    let t = setTimeout(() => {
      currentTime();
    }, 1000);
  }

  export {currentTime};