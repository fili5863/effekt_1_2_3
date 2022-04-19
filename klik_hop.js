window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  document
    .querySelector("#blue_container")
    .addEventListener("click", blueClickHandler);
}

function blueClickHandler() {
  document.querySelector("#blue_container").classList.add("hop");
}
