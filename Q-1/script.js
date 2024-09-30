var prg = document.querySelector("#progress");
var h3 = document.querySelector("h3");
var int;
var count = 0;

var int = setInterval(function () {
  if (count == 100) {
    h3.textContent = "DONWLOAD COMPLETED.✔";
    clearInterval(int);
  }
  count++;
  prg.style.width = count + "%";
}, 50);
