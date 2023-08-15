function getSleep() {
  var noSleep = new NoSleep();
  var wakeLockEnabled = false;
  var buttonId = document.querySelector("#toggle");

  buttonId.addEventListener(
    "click",
    () => {
      if (!wakeLockEnabled) {
        noSleep.enable(); // keep the screen on!
        wakeLockEnabled = true;
      }
    },
    false
  );
}

export {getSleep};