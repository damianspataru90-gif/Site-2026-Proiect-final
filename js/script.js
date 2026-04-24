function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

if (calcBtn) {
  calcBtn.addEventListener("click", function () {
    const units = Number(document.getElementById("units").value);
    const price = Number(document.getElementById("price").value);
    const days = Number(document.getElementById("days").value);

    if (!units || !price || !days) {
      calcResult.textContent = "Completează toate câmpurile pentru calcul.";
      return;
    }

    const total = units * price * days;
    calcResult.textContent = `Valoarea estimată a producției este ${total.toFixed(2)} lei.`;
  });
}

const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");

const quotes = [
  "Calitatea este rezultatul muncii făcute cu grijă și responsabilitate.",
  "Producția eficientă începe cu materiale bune și o organizare corectă.",
  "Un produs ecologic bun protejează atât clientul, cât și natura.",
  "Succesul unei companii începe cu respectul față de mediu."
];

if (quoteBtn) {
  quoteBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteOutput.textContent = quotes[randomIndex];
  });
}

const contactForm = document.getElementById("contactForm");
const formOutput = document.getElementById("formOutput");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !department || !message) {
      formOutput.textContent = "Te rog completează toate câmpurile formularului.";
      return;
    }

    formOutput.textContent = `Mulțumim, ${name}! Mesajul tău pentru departamentul ${department} a fost înregistrat.`;
    contactForm.reset();
  });
}
