//SlideShow
const [nextButton, previousButton, playButton, stopButton, current] = [
  document.querySelector(".next-button"),
  document.querySelector(".previous-button"),
  document.querySelector(".play-button"),
  document.querySelector(".stop-button"),

  document.querySelector("#current"),
];

const imgs = [
  { id: 0, src: "./images/slider/Dark2Light3.jpg", alt: "Dark2Light" },
  { id: 1, src: "./images/slider/Dark2Light5.jpg", alt: "Dark2Light 2" },
  { id: 2, src: "./images/slider/Electric Pride.JPG", alt: "Electric Pride" },
  {
    id: 3,
    src: "./images/slider/Electric Pride2.JPG",
    alt: "Electric Pride 2",
  },
  {
    id: 4,
    src: "./images/slider/Electric Pride3.JPG",
    alt: "Electric Pride 3",
  },
  {
    id: 5,
    src: "./images/slider/Exploding Unicorns3.JPG",
    alt: "Exploding Unicorns",
  },
  { id: 6, src: "./images/slider/G_Black Sands.JPG", alt: "G_Black Sands" },
  { id: 7, src: "./images/slider/G_CelebrateLove.JPG", alt: "G_CelebrateLove" },
  { id: 8, src: "./images/slider/GoldRush.JPG", alt: "GoldRush" },
  { id: 9, src: "./images/slider/Graphiti Blue.JPG", alt: "Graphiti Blue" },
  { id: 10, src: "./images/slider/Kimono1.JPG", alt: "Kimono" },
  { id: 11, src: "./images/slider/Kimono2.JPG", alt: "Kimono 2" },
  { id: 12, src: "./images/slider/Magma.JPG", alt: "Magma" },
  {
    id: 13,
    src: "./images/slider/Maleficents Dragon1.JPG",
    alt: "Maleficent's Dragon",
  },
  { id: 14, src: "./images/slider/Parrot.JPG", alt: "Parrot" },
  { id: 15, src: "./images/slider/parrot2.JPG", alt: "Parrot 2" },
  { id: 16, src: "./images/slider/Queen2.JPG", alt: "Queen" },
  { id: 17, src: "./images/slider/RainOnAsphalt.jpg", alt: "Rain On Asphalt" },
  { id: 18, src: "./images/slider/Ribbons2.jpg", alt: "Ribbons" },
  { id: 19, src: "./images/slider/rosepetal.JPG", alt: "Rosepetal" },
  { id: 20, src: "./images/slider/rosepetal2.JPG", alt: "Rosepetal 2" },
  { id: 21, src: "./images/slider/rosepetal3.JPG", alt: "Rosepetal 3" },
  {
    id: 22,
    src: "./images/slider/RustyRainbowPatina2.JPG",
    alt: "Rusty Rainbow Patina ",
  },
  { id: 23, src: "./images/slider/SlapDash.JPG", alt: "Slap Dash" },
  { id: 24, src: "./images/slider/Spumoni1.JPG", alt: "Spumoni" },
  { id: 25, src: "./images/slider/Spumoni5.JPG", alt: "Spumoni 2" },
  { id: 26, src: "./images/slider/StreamOfConsc3.JPG", alt: "Stream Of Consc" },
  { id: 27, src: "./images/slider/swipe for love.JPG", alt: "swipe for love" },
  {
    id: 28,
    src: "./images/slider/swipe for more love.JPG",
    alt: "swipe for more love",
  },
];
const opacity = 0.6;
let id = 0;

current.src = imgs[0].src;

nextButton.addEventListener("click", () => {
  id++;
  if (id > 28) {
    id = 1;
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
    id = 28;
  }
  current.src = imgs[id].src;
  current.classList.add("fade-in");
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 1000);
});

let playInterval;

const playSlideShow = () => {
  current.src = imgs[id].src;
  playInterval = setInterval(() => {
    id++;
    if (id > 28) {
      id = 0;
    }
    current.src = imgs[id].src;
    current.classList.add("fade-in");
    setTimeout(() => {
      current.classList.remove("fade-in");
    }, 1000);
  }, 3000);
};

const stopSlideShow = () => {
  clearInterval(playInterval);
};

playButton.addEventListener("click", () => {
  playSlideShow();
  playButton.disabled = true;
});

stopButton.addEventListener("click", () => {
  stopSlideShow();
  playButton.disabled = false;
});

//galery section
const galleryItems = [
  {
    src: "./images/gallery images/Butterfly Magic1.JPG",
    alt: "Butterfly Magic",
  },
  { src: "./images/gallery images/colorwave.JPG", alt: "Colorwave" },
  { src: "./images/gallery images/electric slide.JPG", alt: "Electric Pride" },
  {
    src: "./images/gallery images/Exploding Unicorns1.JPG",
    alt: "Exploding Unicorns",
  },
  { src: "./images/gallery images/fluid1.JPG", alt: "Fluid" },
  { src: "./images/gallery images/G_continental.JPG", alt: "Continental" },
  { src: "./images/gallery images/Kill Bill.JPG", alt: "Kill Bill" },
  { src: "./images/gallery images/Kimono.JPG", alt: "Kimono" },
  { src: "./images/gallery images/magma.JPG", alt: "Magma" },
  {
    src: "./images/gallery images/Maleficent's Dragon2.JPG",
    alt: "Maleficent's Dragon",
  },
  {
    src: "./images/gallery images/melted ice cream.JPG",
    alt: "Melted Ice Cream",
  },
  { src: "./images/gallery images/parrot3.JPG", alt: "Parrot" },
  { src: "./images/gallery images/parrote1a.jpg", alt: "Parrotela" },
  { src: "./images/gallery images/Peacock.JPG", alt: "Peacock" },
  { src: "./images/gallery images/rainbow swipe.JPG", alt: "Rainbow Swipe" },
  { src: "./images/gallery images/Ribbons1.jpg", alt: "Ribbons" },
  { src: "./images/gallery images/RosePetals4.JPG", alt: "Rose Petals" },
  {
    src: "./images/gallery images/RustyRainbowPatina1.JPG",
    alt: "Rusty Rainbow Patina",
  },
  { src: "./images/gallery images/S4Love.JPG", alt: "S4Love" },
  {
    src: "./images/gallery images/StreamOfConsc1.JPG",
    alt: "Stream of Consciousness",
  },
  {
    src: "./images/gallery images/StreamOfConsc4.JPG",
    alt: "Stream of Consciousness",
  },
  { src: "./images/gallery images/waves on fire2.JPG", alt: "Waves on Fire" },
];

galleryItems.forEach((item) => {
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image-container");
  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt;
  imageDiv.append(image);
  document.querySelector(".gallery-container").append(imageDiv);
});

//Modal Section
const galleryContainer = document.querySelector(".gallery-container");
const body = document.querySelector(".main-container");
const modal = document.createElement("div");
modal.classList.add("modal-div");

const modalImageContainer = document.createElement("div");
modalImageContainer.classList.add("modal-image-container");

const modalImage = document.createElement("img");
modalImage.src = "";
modalImage.alt = "";
modalImage.classList.add("modal-image");

const modalTextContainer = document.createElement("div");
modalTextContainer.classList.add("modal-text-container");
const modalText = document.createElement("p");
modalText.classList.add("modal-text");
modalTextContainer.append(modalText);

const closeModal = document.createElement("button");
closeModal.classList.add("btn", "close-modal-btn");
closeModal.addEventListener("click", (e) => {
  body.removeChild(modal);
});
closeModal.innerText = "X";

galleryContainer.childNodes.forEach((image) => {
  image.addEventListener("click", (e) => {
    modalImage.src = e.target.src;
    modalImage.alt = e.target.alt;
    modalImageContainer.append(modalImage);
    modalText.innerText = e.target.alt;
    modal.append(modalImageContainer, modalTextContainer, closeModal);
    body.append(modal);
  });
});

// Window Scroll
const scrollLinks = document.querySelectorAll(".nav-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 130;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

const topPageLink = document.querySelector(".top");
topPageLink.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
