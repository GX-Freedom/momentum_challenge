
const body = document.querySelector("body");

const IMG_NUMBER = 12;


function paintImage(IMG_NUMBER) {
    const image = new Image();
    image.src = `../images/${genRandom() + 1}.jpg`;
    image.classList.add("backgroundimg");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);

    return number;
}



function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
    window.addEventListener("click", init);
}

init();