document.onload = ScrollHeight();
window.addEventListener("resize", function (event) {
  ScrollHeight();
});

function ScrollHeight() {
  var content = document.querySelector("#oldscrolls");
  var container = document.querySelector("#oldscrolls-content");
  content.style.height = container.offsetHeight + "px";
}
