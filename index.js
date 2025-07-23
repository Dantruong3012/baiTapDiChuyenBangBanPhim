function moveUp() {
  let moveup = document.getElementById("d");
  moveup.style.top = "0px";
  moveup.style.top = parseInt(moveup.style.top) + 5 + "px";
}

function moveDown() {
  let movedown = document.getElementById("d");
  movedown.style.top = "0px";
  movedown.style.top = parseInt(movedown.style.top) - 5 + "px";
}

function moveLeft() {
  let moveleft = document.getElementById("d");
  moveleft.style.top = "0px";
  moveleft.style.top = parseInt(moveleft.style.top) - 5 + "px";
}

function moveRight() {
  let moveright = document.getElementById("d");
  moveright.style.top = "0px";
  moveright.style.top = parseInt(moveright.style.top) + 5 + "px";
}

function myFuncation(evt) {
  switch (evt.keycode) {
    case 37:
      moveLeft();
      break;

    case 38:
      moveUp();
      break;

    case 39:
      moveRight();
      break;

    case 40:
      moveDown();
      break;
  }
  function letMove() {
    window.addEventListener("keydown", myFuncation);
  }
}
window.onload = letMove;
