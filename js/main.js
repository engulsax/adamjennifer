window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("map").addEventListener("click", (e) => {
    console.log("pop");

    window.location.href =
      'https://www.google.com/maps/place/Lustfyllt/@57.9169998,14.1237888,15z/data=!4m5!3m4!1s0x0:0xb0d56ea69d91038!8m2!3d57.9170019!4d14.1237751"';
  });

  var countDownDate = new Date("Jul 17, 2021 16:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timebox-d").innerHTML = days;
    document.getElementById("timebox-h").innerHTML = hours;
    document.getElementById("timebox-m").innerHTML = minutes;
    document.getElementById("timebox-s").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});
