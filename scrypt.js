const responseNav = document.querySelector(".navUl");


function burgerManu() {
    responseNav.classList.toggle("visibilityHidden");
}
responseNav.addEventListener("click", () => {
    responseNav.classList.remove("visibilityHidden")
})