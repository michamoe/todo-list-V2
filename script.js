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
    listItem.textContent = todoText.value;
    list.appendChild(listItem);
    todoText.value = "";
    let deleteListItem = document.createElement("button");
    deleteListItem.textContent = "Delete";
    listItem.appendChild(deleteListItem);
    deleteListItem.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })
    let doneListItem = document.createElement("button");
    doneListItem.textContent = "Done";
    listItem.appendChild(doneListItem);
    doneListItem.addEventListener("click", (e) => {
        list.removeChild(e.target.parentElement); 
        doneList.appendChild(e.target.parentElement);
        e.target.remove();
    })
}




