const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");
mobileBtn.onclick = () => {
  mobileMenu.classList.toggle("ativo");
  mobileBtn.classList.toggle("trocar");
};
