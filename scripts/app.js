const navBtn = document.querySelector(".navbar__btn")
let navOpen = false;
navBtn.addEventListener("click",function () {
    if (navOpen) {
        navBtn.classList.remove("navbar__btn--open")
        navOpen = false
    } else {
        navBtn.classList.add("navbar__btn--open")
        navOpen = true
    }
})