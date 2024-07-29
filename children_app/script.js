document.addEventListener("DOMContentLoaded", () => {

// Use texttospeech to vocalize the words of the animal and 
const synth = window.speechSynthesis;

let menuBtn = document.querySelector(".nav-menu");
let menu = document.querySelector(".menu");
let back = document.querySelector(".nav-back");
let showOptions = document.querySelector(".options");
let learnOptions = document.querySelector(".learn-options")
let navLinks = document.querySelector(".nav-link");
let animals = document.querySelectorAll(".animal");
let modal = document.querySelector(".modalWindow");
let openModal = document.querySelector(".modal-open");
let closeModal = document.querySelector(".closeModal")
let speech = document.querySelector(".en-tts");
let spanish = document.querySelector(".esp-tts")
let animalSound = document.querySelector(".roar");
let voices = [];

let animalSounds = [
    {
        Name: "Bear",
        sound: new Audio("./Sounds/Bear/roar.mp3"),
        info: ""
    }, 
    {
        name: "bull",
        sound: new Audio("./Sounds/Bear/roar.mp3"),
        info: ""
    }
];

let toggle = (index, apply) => {
    index.classList.toggle(apply);
}

let toggleMenu = () => {
    toggle(menu, "show");
    if (learnOptions.style.display === "block") {
        learnOptions.style.display = "none";
    }
}

menuBtn.addEventListener("click", toggleMenu)
back.addEventListener("click", toggleMenu)
navLinks.addEventListener("click", toggleMenu)

/* Animals and languages */
animals.forEach(animal => {
    animal.addEventListener("mousedown", () => {
        animal.classList.toggle('selected');
        console.log(animal);
    });

    animal.addEventListener("mouseup", () => {
        animal.classList.toggle('selected');
        modal.style.display = "block";
        console.log("mouseup");
    });

    animalSound.addEventListener("click", () => {
        let name = animal.dataset.type;
        console.log(name);
        
       for (let i = 0; i < animalSounds.length; i++) {
        let audioOn = false;
            console.log("True");
            animalSounds[i].sound.play();
            audioOn = true;
        }

    });
});




const loadVoices = () => {
    voices = synth.getVoices();
        if (voices.length > 0) {
            console.log('Voices list:', voices);
            addSpeechEventListeners();
        }

};
    const addSpeechEventListeners = () => {
        speech.addEventListener('click', () => {
           const utterance = new SpeechSynthesisUtterance("Bear");
           /* utterance.voice = voice.find(voice => voice.name === "Google US English"); */
           utterance.pitch = 1;
           utterance.rate = 1;
           utterance.volume = 1;
          /*  utterance.voice = "Google US English"; */
           synth.speak(utterance);
           console.log("clicked");
        });

        spanish.addEventListener('click', () => {
            const utterance = new SpeechSynthesisUtterance("Oso");
           /* utterance.voice = voice.find(voice => voice.name === "Google US English"); */
           utterance.pitch = 1;
           utterance.rate = 1;
           utterance.volume = 1;
           utterance.voice = voices.find(voice => voice.lang == 'es-ES');
          /*  utterance.voice = "Google US English"; */
           synth.speak(utterance);
           console.log("clicked");
        })
    };
    


    loadVoices();
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    } else {
    console.log('Text-to-Speech is not supported in this browser.');
    };

        

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

showOptions.addEventListener("click", () => {
    learnOptions.style.display = "block";
});

/* user clicks outside of modal close the modal */
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


});
