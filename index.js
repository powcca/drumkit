
function makeVoice(url) {
  var v = new Audio(url);
  v.play();
}

function helper(k) {
  switch (k) {
      case "w":
      makeVoice("sounds/tom-1.mp3");
      break;
      case "a":
      makeVoice("sounds/tom-2.mp3");
      break;
      case "s":
      makeVoice("sounds/tom-3.mp3");
      break;
      case "d":
      makeVoice("sounds/tom-4.mp3");
      break;
      case "j":
      makeVoice("sounds/snare.mp3");
      break;
      case "k":
      makeVoice("sounds/crash.mp3");
      break;
      case "l":
      makeVoice("sounds/kick-bass.mp3");
      break;
    default:
  }
}

function animation(k) {
  var b = document.querySelector("." + k);
  b.classList.add("pressed");
  setTimeout(function() {
    b.classList.remove("pressed"), 200
  })
}


var arr = document.querySelectorAll(".drum");
for (var i = 0; i < 7; i++) {
  arr[i].addEventListener("click", function() {
    helper(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.addEventListener("keypress", function(e) {
  helper(e.key);
  animation(e.key);
});
