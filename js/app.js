// Craete Image Click And Slider On This Temoplate
let boxContainer = document.querySelector(".box-container");
// Target Imgs
let myimgs = Array.from(document.querySelectorAll(".box img"));
// For Control
let close = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let imgIndex = 0;

for (let i = 0; i < myimgs.length; i++) {
  myimgs[i].addEventListener("click", function showBox(e) {
    boxContainer.style.transform = "scale(1,1)";
    let imgSrc = e.target.src;
    boxContainer.firstElementChild.style.backgroundImage =
      "url(" + imgSrc + ")";
    imgIndex = myimgs.indexOf(e.target);
  });
}
// For Control
close.addEventListener("click", function hideBox() {
  boxContainer.style.transform = "scale(0,0)";
});
next.addEventListener("click", function goNext() {
  if (imgIndex == myimgs.length) {
    imgIndex = 0;
  }
  imgIndex++;
  boxContainer.firstElementChild.style.backgroundImage =
    "url(" + myimgs[imgIndex].src + ")";
});
prev.addEventListener("click", function goPrev() {
  if (imgIndex < 0) {
    imgIndex = myimgs.length - 1;
  }
  imgIndex--;
  boxContainer.firstElementChild.style.backgroundImage =
    "url(" + myimgs[imgIndex].src + ")";
});
