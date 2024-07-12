/* Shape */
// Collect the elements
let shape = document.querySelector(".shapeDiv");
let btnSquare = document.querySelector(".btnsquare");
let btnRectangle = document.querySelector(".btnrectangle");
let btnCircle = document.querySelector(".btncircle");
let btnCollapse = document.querySelector(".menuBtn")
let collapseMenu = document.querySelector(".collapseMenu");
btnSquare.addEventListener("click", () => {
    shape.classList = "square";
    shape.innerHTML = btnSquare.innerHTML.toUpperCase();
});

btnRectangle.addEventListener("click", () => {
    shape.classList = "rectangle";
    shape.innerHTML = btnRectangle.innerHTML.toUpperCase();
});

btnCircle.addEventListener("click", () => {
    shape.classList = "circle";
    shape.innerHTML = btnCircle.innerHTML.toUpperCase();
});

btnCollapse.addEventListener("click", () => {
   collapseMenu.classList.toggle( "collapse");

})

/* Modal Window*/
let card = document.querySelector(".card");
let modalWindow = document.querySelector(".modalWindow");
let closeModal = document.querySelector(".closeModal");

// click open modal window
card.addEventListener("click", () => {
    modalWindow.style.display = "block";
})

closeModal.addEventListener("click", () => {
    modalWindow.style.display = "none";
})

/* user clicks outside of modal close the modal */
window.addEventListener("click", (event) => {
    if (event.target == modalWindow) {
        modalWindow.style.display = "none";
    }
})