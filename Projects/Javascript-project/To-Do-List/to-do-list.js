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
  
  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoList.name;
    // const dueDate = todoList.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
                  <div>${name}</div>

                  <div>${dueDate}</div>

                  <button class = "deleteButton"
                    onclick = "
                    todoList.splice(${i},1);
                    rendartodo();
                  ">Delete</button>
                  `;
    todoListHTML += html;
  
  }
  
  document.querySelector('.js-to-do-list').innerHTML = todoListHTML;
  
}

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