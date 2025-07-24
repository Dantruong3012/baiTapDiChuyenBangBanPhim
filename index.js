let myimage = null;
function int() {
  myimage = document.getElementById("d");
  myimage.style.position = "absolute";
  myimage.style.left = "0px";
  myimage.style.top = "0px";
  window.addEventListener("keydown", myFunction);
}

function moveUp() {
  myimage.style.top = parseInt(myimage.style.top) - 10 + "px";
}

function moveDown() {
  myimage.style.top = parseInt(myimage.style.top) + 10 + "px";
}

function moveLeft() {
  myimage.style.left = parseInt(myimage.style.left) - 10 + "px";
}

function moveRight() {
  myimage.style.left = parseInt(myimage.style.left) + 10 + "px";
}

function myFunction(evt) {
  switch (evt.keyCode) {
    case 37: // Left arrow
      moveLeft();
      break;
    case 38: // Up arrow
      moveUp();
      break;
    case 39: // Right arrow
      moveRight();
      break;
    case 40: // Down arrow
      moveDown();
      break;
  }
}
window.onload = int;
