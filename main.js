const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const loadingText = document.getElementById("loading");

let images = {};

const rand = obj => Object.values(obj)[Math.floor(Math.random() * Object.values(obj).length)];
const randKey = obj => Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
const BPM = 172;
let prevK1, prevK2;

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let k1, k2;
    do {
        k1 = randKey(images.faces);
        k2 = randKey(images.mouths);
    } while (k1 === k2 || (prevK1 == k1 && prevK2 == k2));

    prevK1 = k1;
    prevK2 = k2;

    ctx.drawImage(images.faces[k1], 0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.mouths[k2], 0, 0, canvas.width, canvas.height);
}

canvas.style.display = "none";

getAllImages().then(img => {
    loadingText.style.display = "none";
    canvas.style.display = "block";
    images = img;
    draw();
    setInterval(draw, 60000 / BPM);
});