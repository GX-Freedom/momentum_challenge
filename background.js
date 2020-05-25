
const body = document.querySelector("body");
const html = document.querySelector("html");
const IMG_NUMBER = 12;

function paintImage(IMG_NUMBER) {
    const image = new Image();
    image.src = `./images/${getRandom() + 1}.jpg`;
    image.classList.add("backgroundimg");
    //image.style.height = "100px"
    image.height = body.scrollHeight;
    body.appendChild(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}



function init() {

    const randomNumber = getRandom();
    paintImage(randomNumber);
    window.addEventListener("click", init);

    let img = document.getElementsByClassName("backgroundimg");

    if (img.length > 1) {
        img[0].remove();
    }
}

init();