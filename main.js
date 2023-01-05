const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let images = {};

const rand = obj => Object.values(obj)[Math.floor(Math.random() * Object.values(obj).length)];

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(rand(images.faces), 0, 0, canvas.width, canvas.height);
    ctx.drawImage(rand(images.mouths), 0, 0, canvas.width, canvas.height);
}

getAllImages().then(img => {
    images = img;
    setInterval(draw, 400);
});