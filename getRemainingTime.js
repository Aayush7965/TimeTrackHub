let timeRemainingTimeoutId;

function remainingTime() {
    let date = new Date();
    let nextMidnight = new Date(date);
    nextMidnight.setHours(24, 0, 0, 0);
    let timeDifference = nextMidnight - date;
    let hh = Math.floor(timeDifference / (1000 * 60 * 60));
    let mm = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
    let time = hh + "h " + mm + "m";
    document.querySelector(".remainingTime").innerHTML = time;
    timeRemainingTimeoutId = setTimeout(() => {
      remainingTime();
    }, 1000);
  }

export {remainingTime, timeRemainingTimeoutId};