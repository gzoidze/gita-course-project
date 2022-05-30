const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberofImages = slideImage.length;
let slideWidth = 1000;
let currentSlide = 0;

export function initializeSlider() {
  slideImage.forEach((image, index) => {
    image.style.left = index * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

function createNavigationDots() {
  for (let i = 0; i < numberofImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

function setActiveClass() {
  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}

function onArrowButtonClick(buttonType) {
  if (buttonType === "next") {
    if (currentSlide >= numberofImages - 1) {
      goToSlide(0);
      return;
    }
    currentSlide++;
  }

  if (buttonType === "prev") {
    if (currentSlide <= 0) {
      goToSlide(numberofImages - 1);
      return;
    }
    currentSlide--;
  }

  goToSlide(currentSlide);
}

nextBtn.addEventListener("click", onArrowButtonClick.bind(this, "next"));
prevBtn.addEventListener("click", onArrowButtonClick.bind(this, "prev"));
