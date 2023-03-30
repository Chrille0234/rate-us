const selectRating = document.querySelectorAll(".rate-us")
var valgt;
var intervalId = window.setInterval(function(){
    valgt = localStorage.setItem("valgt", document.getElementById("active").textContent)
  }, 1);
function select(e) {
    const selected = document.querySelectorAll('.rate-select');
    selected.forEach(function(el) {
      el.id = ""
    });
    e.id = "active"
  }
function submitted(){
  clearInterval(intervalId) 
  valgt = localStorage.getItem("valgt")
  document.getElementById("number").innerText = valgt
  if (valgt <= 2){
    document.getElementById("thankyou").innerText = "Fuck you too."
  }
}
