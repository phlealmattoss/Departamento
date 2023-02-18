const menuJs = document.querySelector(".js-menu i")
const nav = document.querySelector("nav")

function abrirMenu() {
  nav.classList.toggle('ativo')
}

menuJs.addEventListener('click', abrirMenu)
