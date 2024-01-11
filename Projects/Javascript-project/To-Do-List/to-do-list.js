const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];



rendartodo()

function rendartodo() {

  let todoListHTML = '';

  todoList.forEach(function (todoObject) {

    const { name, dueDate } = todoObject;
  
    const html = `
                  <div>${name}</div>
  
                  <div>${dueDate}</div>
  
                  <button class = "deleteButton js-delete-todo-button"
                    >Delete</button>
                  `;
    todoListHTML += html;
  })
  
  document.querySelector('.js-to-do-list').innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        console.log(index);
        todoList.splice(index, 1);
        rendartodo();
    });
  });

}

document.querySelector('.js-add-button').addEventListener('click', () => {
  todoadd();
});


function todoadd() {
  const inputElement = document.querySelector('.js-name-input');

  const dateinputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value;
  const dueDate = dateinputElement.value;

  todoList.push({
    name,
    dueDate
    // name: name,
    // dueDate: dueDate
  });
  
  rendartodo()
  inputElement.value = '';
  dateinputElement.value = '';

  saveStorage();
}

function saveStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
