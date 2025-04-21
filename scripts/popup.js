const welcomeButtonModal = document.querySelector(".cards__btn");
const modalAplication = document.querySelector(".link");
const closeModalButton = document.querySelector(".link__close");
const closeDialogButtons = dialogLayout.querySelectorAll('[data-close]');

if (welcomeButtonModal && modalAplication) {
    welcomeButtonModal.addEventListener ("click", () => {
        modalAplication.removeAttribute("hidden");
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalAplication) {
        modalAplication.setAttribute("hidden", true)
    }
});

closeModalButton.addEventListener("click", () => {
    modalAplication.setAttribute("hidden", true)
})
 

