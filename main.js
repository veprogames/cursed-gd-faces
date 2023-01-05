const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const loadingText = document.getElementById("loading");

let images = {};

const rand = obj => Object.values(obj)[Math.floor(Math.random() * Object.values(obj).length)];
const randKey = obj => Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
const BPM = 172;
let prevK1, prevK2;

//key names to readable names
const translations = {
    easyDemon: "easy demon",
    mediumDemon: "medium demon",
    hardDemon: "hard demon",
    insaneDemon: "insane demon",
    extremeDemon: "extreme demon"
}

function translate(k){
    return translations[k] ? translations[k] : k;
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let k1, k2;
    do {
        k1 = randKey(images.faces);
        k2 = randKey(images.mouths);
    } while (k1 === k2 || (prevK1 == k1 && prevK2 == k2));

    prevK1 = k1;
    prevK2 = k2;

    const t1 = translate(k1);
    const t2 = translate(k2).replace("demon", "");
    let diffName = (t1.substring(0, t1.length / 2) + t2.substring(t2.length / 2)).replace(/ /g, "");
    diffName = diffName.replace(/([^aeiou])([^aeiou])/, "$1e$2"); //add flow to word by adding vowels between 2 consonants
    diffName = diffName[0].toUpperCase() + diffName.substring(1); //capitalize
    document.title = diffName;

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