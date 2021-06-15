//SlideShow
const [nextButton, previousButton, current] = [
  document.querySelector(".next-button"),
  document.querySelector(".previous-button"),
  document.querySelector("#current"),
];

const imgs = [
  { id: 0, src: "./images/scroller/Black Sands.JPG", alt: "black sands" },
  { id: 1, src: "./images/scroller/BlueCrush.JPG", alt: "blue crush" },
  { id: 2, src: "./images/scroller/Dark2Light3.jpg", alt: "dark2light" },
  { id: 3, src: "./images/scroller/Kimono2.jpg", alt: "kimono" },
];
const opacity = 0.6;
let id = 0;
// imgs[0].style.opacity = opacity;

current.src = imgs[0].src;

nextButton.addEventListener("click", () => {
  id++;
  if (id > 3) {
    id = 0;
  }
  current.src = imgs[id].src;
  current.classList.add("fade-in");
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);
});

previousButton.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = 3;
  }
  current.src = imgs[id].src;
  current.classList.add("fade-in");
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);
});
// imgs.forEach((img) => {
//   img.addEventListener("click", imageClick);
// });

// function imageClick(e) {
//   imgs.forEach((img) => (img.style.opacity = 1));

//   current.src = e.target.src;

//   current.classList.add("fade-in");
//   setTimeout(() => {
//     current.classList.remove("fade-in");
//   }, 500);

//   e.target.style.opacity = opacity;
// }

//Modal Section
