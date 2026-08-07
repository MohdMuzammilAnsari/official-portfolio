const words = ["Frontend Developer", "Backend Developer", "Java Developer", "AI Engineer",];
const typewriterEl = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type(){
    const currentWord = words[wordIndex];

    if(isDeleting){
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if(!isDeleting && charIndex === currentWord.length){
        typeSpeed = 1500; // pause at full word before erasing
        isDeleting = true;
    } else if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // move to next word, loop back to start
        typeSpeed = 300; // small pause before typing next word
    }

    setTimeout(type, typeSpeed);
}

type();