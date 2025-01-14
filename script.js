const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"
}

window.addEventListener('scroll', () => {
    const element = document.querySelector(".jo");
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        element.classList.add("animate");
    }
});
window.addEventListener('scroll', () => {
    const elementOne = document.querySelector(".nh");
    const rect = elementOne.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementOne.classList.add("animateOne");
    }
});
window.addEventListener('scroll', () => {
    const elementTwo = document.querySelector(".vt");
    const rect = elementTwo.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTwo.classList.add("animateTwo");
    }
});
window.addEventListener('scroll', () => {
    const elementThree = document.querySelector("et.");
    const rect = elementThree.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementThree.classList.add("animateThree");
    }
});
window.addEventListener('scroll', () => {
    const elementFour = document.querySelector(".im");
    const rect = elementFour.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementFour.classList.add("animateFour");
    }
});
window.addEventListener('scroll', () => {
    const elementFive = document.querySelector(".an");
    const rect = elementFive.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementFive.classList.add("animateFive");
    }
});
window.addEventListener('scroll', () => {
    const elementSix = document.querySelector(".jp");
    const rect = elementSix.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementSix.classList.add("animateSix");
    }
});
window.addEventListener('scroll', () => {
    const elementSeven = document.querySelector(".mw");
    const rect = elementSeven.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementSeven.classList.add("animateSeven");
    }
});
window.addEventListener('scroll', () => {
    const elementEight = document.querySelector(".jb");
    const rect = elementEight.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementEight.classList.add("animateEight");
    }
});
window.addEventListener('scroll', () => {
    const elementNine = document.querySelector(".jc");
    const rect = elementNine.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementNine.classList.add("animateNine");
    }
});
window.addEventListener('scroll', () => {
    const elementTen = document.querySelector(".js");
    const rect = elementTen.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen.classList.add("animateTen");
    }
});
window.addEventListener('scroll', () => {
    const elementEleven = document.querySelector(".nd");
    const rect = elementEleven.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementEleven.classList.add("animateEleven");
    }
});
window.addEventListener('scroll', () => {
    const elementTen1 = document.querySelector(".ou");
    const rect = elementTen1.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen1.classList.add("animateTen1");
    }
});
window.addEventListener('scroll', () => {
    const elementTen2 = document.querySelector(".o");
    const rect = elementTen2.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen2.classList.add("animateTen2");
    }
});
window.addEventListener('scroll', () => {
    const elementTen3 = document.querySelector(".gt");
    const rect = elementTen3.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen3.classList.add("animateTen3");
    }
});
window.addEventListener('scroll', () => {
    const elementTen4 = document.querySelector(".pg");
    const rect = elementTen4.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen4.classList.add("animateTen4");
    }
});
window.addEventListener('scroll', () => {
    const elementTen5 = document.querySelector(".gp");
    const rect = elementTen5.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen5.classList.add("animateTen5");
    }
});
window.addEventListener('scroll', () => {
    const elementTen6 = document.querySelector(".nt");
    const rect = elementTen6.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen6.classList.add("animateTen6");
    }
});
window.addEventListener('scroll', () => {
    const elementTen7 = document.querySelector(".el");
    const rect = elementTen7.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen7.classList.add("animateTen7");
    }
});
window.addEventListener('scroll', () => {
    const elementTen8 = document.querySelector(".li");
    const rect = elementTen8.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen8.classList.add("animateTen8");
    }
});
window.addEventListener('scroll', () => {
    const elementTen9 = document.querySelector(".mj");
    const rect = elementTen9.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen9.classList.add("animateTen9");
    }
});

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {

    link.addEventListener("click", event => {
        event.preventDefault();

        const sectionId = link.getAttribute("href");

        const section = document.querySelector(sectionId);

        section.scrollIntoView({ behaviour: "smooth" })
    });
});
