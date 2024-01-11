let todoList = [{
  name: 'Wash dishes',
  dueDate: '2022-12-12'
}, {
  name: 'Watch youtube',
  dueDate: '2022-12-11'
  }];

rendartodo()

function rendartodo() {

  let todoListHTML = '';

  todoList.forEach(function (todoObject, index) {

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

}