document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
 form.addEventListener("submit",handleSubmit);

function handleSubmit(e){
  console.log(e);
  e.preventDefault();
  handleToDo(e.target[0].value);
form.reset()
  
}
});
function handleToDo(todo){
  const li = document.createElement("li");
  const btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "Delete";
btn.style.margin = "10px";
btn.style.fontSize = "15px"



  li.append(todo);
  li.appendChild(btn)
  let ul = document.getElementById("tasks");
  ul.appendChild(li);
  // console.log(ul)
}
function handleDelete(e){
  e.target.parentNode.remove()
  }
