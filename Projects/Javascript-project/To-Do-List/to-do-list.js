let todoList = [];

rendertodo()

function rendertodo() {

  let todoListHTML = '';
  
  for (let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoListHTML += html;
  
  }
  console.log(todoListHTML);
  
  document.querySelector('.js-to-do-list').innerHTML = todoListHTML
  
}

function todoadd() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  todoList.push(name);

  console.log(todoList);

  
  rendertodo()
  inputElement.value = '';

}