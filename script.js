let addButton = document.getElementById("add-button");
let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");

addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
  alert("Add Button Clicked!");
  var itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
  console.log("masuk");
}

function newToDoItem(itemText, completed) {
  let toDoItem = document.createElement("li");
  let toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItem);
}

function toggleToDoItem() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}
