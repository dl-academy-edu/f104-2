var html = document.querySelector("html");
var popupButtonOpen = document.querySelector(".about__button_js");
var popupButtonClose = document.querySelector(".popup-form-button-close_js");

popupButtonOpen.addEventListener("click", function() {
    html.classList.add("popup-open");
    popupButtonClose.focus();
});

popupButtonClose.addEventListener("click", function() {
    html.classList.remove("popup-open");
});

window.addEventListener("keydown", function(event) {
    if (event.code === "Escape" && html.classList.contains("popup-open")) {
        html.classList.remove("popup-open");
    }
})
