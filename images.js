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
            insane: await loadImage("./images/faces/insane.png"),
            easyDemon: await loadImage("./images/faces/easy_demon.png"),
            mediumDemon: await loadImage("./images/faces/medium_demon.png"),
            hardDemon: await loadImage("./images/faces/hard_demon.png"),
            insaneDemon: await loadImage("./images/faces/insane_demon.png"),
            extremeDemon: await loadImage("./images/faces/extreme_demon.png")
        },
        mouths: {
            insane: await loadImage("./images/mouth/insane.png"),
            extremeDemon: await loadImage("./images/mouth/extreme_demon.png"),
            easyDemon: await loadImage("./images/mouth/easy_demon.png"),
            mediumDemon: await loadImage("./images/mouth/medium_demon.png"),
            hardDemon: await loadImage("./images/mouth/hard_demon.png"),
            insaneDemon: await loadImage("./images/mouth/insane_demon.png"),
            extremeDemon: await loadImage("./images/mouth/extreme_demon.png")
        }
    };
}