const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let images = {};

function draw(){
    ctx.drawImage(images.faces.easy, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(images.mouths.extremeDemon, 0, 0, canvas.width, canvas.height);
}

getAllImages().then(img => {
    images = img;
    draw();
});