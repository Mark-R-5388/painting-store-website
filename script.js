//Slide Show
const leftBtn = document.querySelector(".image-slid-show-left-btn");
const rightBtn = document.querySelector(".image-slid-show-right-btn");
const slideShow = document.querySelector(".image-slide-show-container");
const playSlideShow = document.querySelector(".play-image-slide");
const images = document.querySelectorAll(".img");

let slideShowPictures = [
  "./images/slide-show-1.png",
  "./images/slide-show-2.png",
  "./images/slide-show-3.png",
  "./images/slide-show-4.png",
];

let imageEl = document.createElement("img");
let i = 0;
imageEl.src = slideShowPictures[i];
imageEl.alt = `picture ${i}`;
slideShow.append(imageEl);

leftBtn.addEventListener("click", (e) => {
  i -= 1;
  if (i < 0) {
    i = 3;
  }
  imageEl.src = slideShowPictures[i];
  imageEl.alt = `picture ${i}`;
  slideShow.append(imageEl);
});

rightBtn.addEventListener("click", (e) => {
  i += 1;
  if (i > 3) {
    i = 0;
  }
  imageEl.src = slideShowPictures[i];
  imageEl.alt = `picture ${i}`;
  slideShow.append(imageEl);
});

//Link Scroll

function scrollToItem(num) {
  window.scrollTo(0, num);
}

document.querySelector(".gallery-index").addEventListener("click", (e) => {
  scrollToItem(1460);
});

document.querySelector(".about-index").addEventListener("click", (e) => {
  scrollToItem(520);
});

document.querySelector(".contact-index").addEventListener("click", (e) => {
  scrollToItem(2252);
});
