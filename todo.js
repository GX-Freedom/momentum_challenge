
const todoForm = document.querySelector(".js-toDoForm"),
    toDoInput = todoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
const butn = document.querySelector(".clicker");
const textform = document.querySelector(".textform");

const TODOS_LS = "toDos";
let toDos = [];
textform.style.display = "none";

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteToDo);
    delBtn.style.color = "red";
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

}

function createbuttn() {
    butn.style.display = "inline";

}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
    textform.style.display = "none";
    createbuttn();
}


function saemthing(toDo) {
    paintTodo(toDo.text);

}
function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);

    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(saemthing);
    }
}

function init() {
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit)

}

init();