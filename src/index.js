document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("create-task-form")
    form.addEventListener("submit", (e) => {
      
      e.preventDefault()
      addToDo(e.target.querySelector('#new-task-description').value)
      form.reset()
    })   
});

function addToDo(item) {
  let list=document.getElementById("tasks")
  let listItem=document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent="X" 
  btn.addEventListener('click',deleteToDo)
  listItem.textContent=`${item} `
  listItem.appendChild(btn)
  list.appendChild(listItem)
}

function deleteToDo(e) {
  e.target.parentNode.remove();
}
