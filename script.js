const body = document.body;

// Modificarea stilului grupului de elemente .trophies figcaption
const trofee = document.querySelectorAll(".trophies figcaption");
trofee.forEach(figcaption => {
    figcaption.style.color = 'blue';        
    figcaption.style.fontSize = '20px';    
    figcaption.style.fontStyle = 'italic'; 
});

// stergerea iconitelor de social media si adaugarea altora
const socialMedia = document.querySelector(".icons");
socialMedia.remove();

const newIconsDiv = document.createElement("div");
newIconsDiv.className = "icons";
newIconsDiv.style.display = "grid";
newIconsDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
newIconsDiv.style.gap = "10px";
newIconsDiv.style.justifyContent = "end";
newIconsDiv.style.marginLeft = "auto";
newIconsDiv.style.width = "max-content";

const icons = [
    { src: "img/telegram.png", alt: "Telegram" },
    { src: "img/social.png", alt: "Social" },
    { src: "img/facebook.png", alt: "Facebook" },
    { src: "img/tiktok.png", alt: "Tiktok" },

];

icons.forEach(icon => {
    const img = document.createElement("img");
    img.src = icon.src;
    img.alt = icon.alt;
    newIconsDiv.appendChild(img);
});

body.appendChild(newIconsDiv);

// folosirea și modificarea evenimentelor generate de mouse si tastatură + getComputedStyle

const button = document.querySelector("#buton button");

button.addEventListener("click", function () {
    const styles = getComputedStyle(button);
    const backgroundColor = styles.backgroundColor;

    console.log(`Culoarea actuală: ${backgroundColor}`);

    if (backgroundColor === "rgb(0, 0, 255)") { 
        button.style.backgroundColor = "red";
    } else {
        button.style.backgroundColor = "blue";
    }
});

// localStorage


const buttonw = document.getElementById("buttonw");

const counter = document.getElementById("counter");

let contor = localStorage.getItem("clickCount") || 0;

counter.innerText = contor;

window.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "W") {
        contor++;
        counter.innerText = contor;
        this.localStorage.setItem("clickCount", contor);
    }
});

// inputuri funcționale: text si range

const inputRange = document.getElementById('inputRange');
  const rangeValue = document.getElementById('rangeValue');
  inputRange.addEventListener('input', function() {
    rangeValue.textContent = inputRange.value;
  });

// schimbarea aleatoare a valorilor unei proprietăți (de exemplu: culoare, dimensiuni, poziție) + folosirea MATH + setInterval

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeProperties() {
    const element = document.getElementById("realmadrid");
    element.style.backgroundColor = getRandomColor();
};

setInterval(changeProperties, 3000);


// canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// cerc
ctx.beginPath();
ctx.arc(200, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// dreptunghi
ctx.beginPath();
ctx.rect(100, 250, 200, 100);
ctx.fillStyle = "green";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
