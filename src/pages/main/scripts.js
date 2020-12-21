// var html = document.querySelector("html");
// var popupButtonOpen = document.querySelector(".about__button_js");
// var popupButtonClose = document.querySelector(".popup-form-button-close_js");

// popupButtonOpen.addEventListener("click", function() {
//     html.classList.add("popup-open");
//     popupButtonClose.focus();
// });

// popupButtonClose.addEventListener("click", function() {
//     html.classList.remove("popup-open");
// });

// window.addEventListener("keydown", function(event) {
//     if (event.code === "Escape" && html.classList.contains("popup-open")) {
//         html.classList.remove("popup-open");
//     }
// })

var mobileHeader = document.querySelector(".mobile-header_js");
var headerMobileButton = document.querySelector(".header__mobile-button_js");
var mobileCloseButton = document.querySelector(".mobile-header__close-button_js");

headerMobileButton.addEventListener("click", function() {
    mobileHeader.classList.add("mobile-header_open");
});


mobileCloseButton.addEventListener("click", function() {
    mobileHeader.classList.remove("mobile-header_open");
});
