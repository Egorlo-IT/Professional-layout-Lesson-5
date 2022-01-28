function menuToggle() {
  let menu = document.querySelector(".menu")
  menu.hidden === false ? menu.hidden = true : menu.hidden = false
}

function closeMenu() {
  let menu = document.querySelector(".menu")
  menu.hidden = true
}