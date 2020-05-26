const button = document.querySelector(".clicker");
const toForm = document.querySelector(".textform");

button.style.color = "red";


function createtoForm() {
    toForm.style.display = "inline";
}


function handleClick() {
    button.style.display = "none";
    createtoForm();

}

function init() {
    button.addEventListener("click", handleClick);

}

init();