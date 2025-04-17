// const mobileBtn = document.querySelector("#mobile-btn");
// const mobileMenu = document.querySelector("#mobile-menu");
// mobileBtn.onclick = () => {
//   mobileMenu.classList.toggle("ativo");
//   mobileBtn.classList.toggle("trocar");
// };


const mobileBtn = document.querySelector("#mobile-btn");
  const mobileMenu = document.querySelector("#mobile-menu");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // Função para fechar menu
  function fecharMenu() {
    mobileMenu.classList.remove("ativo");
    mobileBtn.classList.remove("trocar");
    overlay.classList.remove("ativo");
  }

  mobileBtn.onclick = () => {
    mobileMenu.classList.toggle("ativo");
    mobileBtn.classList.toggle("trocar");
    overlay.classList.toggle("ativo");
  };

  // Fecha o menu ao clicar fora
  overlay.onclick = fecharMenu;

  // Fecha o menu ao clicar em qualquer link dentro dele
  const linksMenu = mobileMenu.querySelectorAll("a");
  linksMenu.forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });

//scroll suave
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

//slide imgs animais
const btnNext = document.getElementById("nextSlide");
const btnPrevious = document.getElementById("previousSlide");
const slider = document.querySelector(".slider");
const content = document.querySelector(".content");

const { width: slideWidth } = window.getComputedStyle(slider);
const { width: contentWidth } = window.getComputedStyle(content);
let = currentSlide = 0;

const slideProps = {
  width: parseInt(slideWidth),
  scroll: 0,
};

btnNext.addEventListener("click", controlSlide);
btnPrevious.addEventListener("click", controlSlide);

function setCurrentDot() {
  const dots = document.querySelectorAll(".dot");
  for (let dot of dots) {
    dot.classList.remove("current");
  }
  dots[currentSlide].classList.add("current");
}

function controlSlide({ target: { id } }) {
  const contentLength = content.children.length;
  switch (id) {
    case "nextSlide": {
      if (slideProps.scroll + slideProps.width < parseInt(contentWidth)) {
        slideProps.scroll += slideProps.width;
      }
      if (currentSlide < contentLength - 1) {
        currentSlide += 1;
        setCurrentDot();
      }
      return (slider.scrollLeft = slideProps.scroll);
    }
    case "previousSlide": {
      if (currentSlide > 0) {
        currentSlide -= 1;
        setCurrentDot();
      }
      slideProps.scroll =
        slideProps.scroll - slideProps.width < 0
          ? 0
          : slideProps.scroll - slideProps.width;
      return (slider.scrollLeft = slideProps.scroll);
    }
    default:
      break;
  }
}
window.onload = () => {
  const contentLength = content.children.length;
  for (let index = 0; index < contentLength - 1; index += 1) {
    const newDot = slider.parentElement.querySelector(".dot").cloneNode();
    slider.parentElement.querySelector(".length-dots").appendChild(newDot);
  }
  setCurrentDot();
};
