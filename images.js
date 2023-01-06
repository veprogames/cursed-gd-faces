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
            unrated: await loadImage("./images/faces/na.png"),
            auto: await loadImage("./images/faces/auto.png"),
            easy: await loadImage("./images/faces/easy.png"),
            normal: await loadImage("./images/faces/normal.png"),
            hard: await loadImage("./images/faces/hard.png"),
            harder: await loadImage("./images/faces/harder.png"),
            insane: await loadImage("./images/faces/insane.png"),
            easyDemon: await loadImage("./images/faces/easy_demon.png"),
            mediumDemon: await loadImage("./images/faces/medium_demon.png"),
            hardDemon: await loadImage("./images/faces/hard_demon.png"),
            insaneDemon: await loadImage("./images/faces/insane_demon.png"),
            extremeDemon: await loadImage("./images/faces/extreme_demon.png")
        },
        mouths: {
            easy: await loadImage("./images/mouth/easy.png"),
            normal: await loadImage("./images/mouth/normal.png"),
            hard: await loadImage("./images/mouth/hard.png"),
            harder: await loadImage("./images/mouth/harder.png"),
            insane: await loadImage("./images/mouth/insane.png"),
            easyDemon: await loadImage("./images/mouth/easy_demon.png"),
            mediumDemon: await loadImage("./images/mouth/medium_demon.png"),
            hardDemon: await loadImage("./images/mouth/hard_demon.png"),
            insaneDemon: await loadImage("./images/mouth/insane_demon.png"),
            extremeDemon: await loadImage("./images/mouth/extreme_demon.png")
        }
    };
}