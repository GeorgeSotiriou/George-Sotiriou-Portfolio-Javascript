function clock() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if(hours < 10) {
    hours = "0" + hours;
  }
   if(minutes <10) {
    minutes = "0" + minutes;
  }

  document.getElementById('hour-top').innerHTML = hours;
  document.getElementById('minute-top').innerHTML = minutes;
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minutes

}

setInterval(clock,100);