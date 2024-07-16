document.addEventListener("DOMContentLoaded", () => {
let menuBtn = document.querySelector(".nav-menu");
let menu = document.querySelector(".menu");
let back = document.querySelector(".nav-back");
let navLinks = document.querySelector(".nav-link");
let animals = document.querySelectorAll(".animal");
let modal = document.querySelector(".modalWindow");

let animalSounds = [
    {
        Name: "Bear",
        sound: "./Sounds/Bear/roar.mp3",
        info: ""
    }
];

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    // trigger animation slide when opening menu
});

back.addEventListener("click", () => {
    menu.classList.toggle("show");
});

navLinks.addEventListener("click", () => {
    menu.classList.toggle("show");
});

/* Animals and languages */
animals.forEach(animal => {
    animal.addEventListener("mousedown", () => {
        animal.classList.toggle('selected');
    });

    animal.addEventListener("mouseup", () => {
        animal.classList.toggle('selected');
        modal.classList.toggle('active');
        console.log("mouseup");
    })

});



});




