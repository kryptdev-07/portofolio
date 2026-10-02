

const roles = [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS Enthusiast"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

function setTheme(theme) {
    document.body.classList.toggle("light", theme === "light");

    themeIcon.classList.toggle("fa-moon", theme !== "light");
    themeIcon.classList.toggle("fa-sun", theme === "light");

    localStorage.setItem("theme", theme);
}

themeBtn.addEventListener("click", () => {
    const currentTheme =
        document.body.classList.contains("light")
            ? "light"
            : "dark";

    setTheme(currentTheme === "light" ? "dark" : "light");
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    setTheme("light");
}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        `Thanks ${name}! Your message has been received.`;

    contactForm.reset();
});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
```
