const btn = document.querySelector("#btn");
const todoList = document.querySelector("#list");
let list = [];

function showList() {
  todoList.innerHTML = "";
  for (i = 0; i < list.length; i++) {
    todoList.innerHTML += `<li>${list[i]} <button id=todo${i} onClick="delBtn(${i})">지우기</button></li>`;
  }
}

function delBtn(i) {
  list.splice(i, 1);
  showList();
}

function addToList() {
  let currentText = document.querySelector(".text");
  list.push(currentText.value);
  //console.log(list);
  currentText.value = "";
  showList();
}

btn.addEventListener("click", addToList);
