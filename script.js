/* No need to edit */

function open_card() {
  document.getElementById("outside").className = "open-card";
}

function close_card() {
  document.getElementById("outside").className = "close-card";
}

function changeColor() {
  var element = document.getElementById("button");
  element.style.color = "green";
}
