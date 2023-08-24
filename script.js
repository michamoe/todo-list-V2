const todolist = document.querySelector("#todoList");
const todoText = document.querySelector("#todoText");
const list = document.querySelector("#list");
const doneList = document.querySelector("#donelist");

todolist.addEventListener("submit", (e) => {
    e.preventDefault();
    addToList();
});

function addToList(){
    let listItem = document.createElement("li");
    let buttons = document.createElement("div");
    listItem.textContent = todoText.value;
    list.appendChild(listItem);
    todoText.value = "";
    let deleteListItem = document.createElement("button");
    deleteListItem.setAttribute("id", "deleteButton")
    deleteListItem.textContent = "Delete";
    buttons.appendChild(deleteListItem);
    let editListItem = document.createElement("button");
    editListItem.setAttribute("id", "editButton")
    editListItem.textContent = "Edit";
    buttons.appendChild(editListItem);
    editListItem.addEventListener("click", (e) => {
        //e.target.parentElement.innerHTML += "Hallo"; //div
        let currentLi = e.target.parentElement.parentElement;
        let buttonDiv = currentLi.removeChild(e.target.parentElement);
        let editInput = document.createElement("input");
        editInput.setAttribute("type", "text");
        editInput.value = currentLi.innerText;
        currentLi.appendChild(editInput);
        currentLi.appendChild(buttonDiv);

    });
    deleteListItem.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
    })
    let doneListItem = document.createElement("button");
    doneListItem.setAttribute("id", "doneButton")
    doneListItem.textContent = "Done";
    buttons.appendChild(doneListItem);
    doneListItem.addEventListener("click", (e) => {
        doneList.appendChild(list.removeChild(e.target.parentElement.parentElement));
        e.target.remove();  //remove of done button
    });
    listItem.appendChild(buttons)
}




