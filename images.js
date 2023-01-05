async function loadImage(path){
    return new Promise((res, rej) => {
        const img = new Image();
        img.src = path;
        img.onload = e => res(img);
        img.onerror = err => rej(err);
    });
}

async function getAllImages(){
    return {
        faces: {
            easy: await loadImage("./images/faces/easy.png"),
            extremeDemon: await loadImage("./images/faces/extreme_demon.png")
        },
        mouths: {
            extremeDemon: await loadImage("./images/mouth/extreme_demon.png")
        }
    };
}