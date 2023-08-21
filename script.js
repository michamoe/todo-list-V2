const todolist = document.querySelector("#todoList");
const todoText = document.querySelector("#todoText");
const list = document.querySelector("#list");

todolist.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)
    addToList();
});

function addToList(){
    console.log("test", todoText.value)
    let listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    list.appendChild(listItem);
    todoText.value = "";
    let listDelete = document.createElement("button");
    listDelete.textContent = "Delete";
    listItem.appendChild(listDelete);
    listDelete.addEventListener("click", (e) => {
        console.log("Hallo",e);
        e.preventDefault();
    })
}




