const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const loadingText = document.getElementById("loading");

let images = {};

const rand = obj => Object.values(obj)[Math.floor(Math.random() * Object.values(obj).length)];
const BPM = 172;

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(rand(images.faces), 0, 0, canvas.width, canvas.height);
    ctx.drawImage(rand(images.mouths), 0, 0, canvas.width, canvas.height);
}

canvas.style.display = "none";

getAllImages().then(img => {
    loadingText.style.display = "none";
    canvas.style.display = "block";
    images = img;
    draw();
    setInterval(draw, 60000 / BPM);
});