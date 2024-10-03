const navBtn = document.querySelector(".navbar__btn")
const menuOpen = document.querySelector(".nav-mobile")

let navOpen = false;
navBtn.addEventListener("click",function () {
    if (navOpen) {
        navBtn.classList.remove("navbar__btn--open")
        menuOpen.classList.remove("nav-mobile--open")
        navOpen = false
    } else {
        navBtn.classList.add("navbar__btn--open")
        menuOpen.classList.add("nav-mobile--open")
        navOpen = true
    }
})