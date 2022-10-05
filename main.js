const listItem = document.querySelector(".instagram-list");
let pressed = false;
let startX = 0;

listItem.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});


window.addEventListener("mouseup", function (e) {
  pressed = false;
});

listItem.addEventListener("mousemove", function (e) {
  if (!pressed) return;
  this.scrollLeft += startX - e.clientX;
  console.log(listItem.scrollLeft)
  console.log(startX - e.clientX)

});
