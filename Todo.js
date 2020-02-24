// the variable go here
const enterList = document.getElementById('enter-list');

eventfunction()

// the event listener go here


function eventfunction() {
  document.querySelector('#form').addEventListener('submit', NewList);

  // to remove to list
  enterList.addEventListener('click', removeList);

  //  document
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);

}


// functions go right here
function NewList(e) {
  e.preventDefault();

  // adding text value here
  const List = document.querySelector('.EnterText').value;

  // remove the button from the todolist
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-todoList';
  removeBtn.textContent = 'x';


  //   to creaate an li element
  const li = document.createElement('li');
  li.textContent = List;


  // adding remove button to each todo
  li.appendChild(removeBtn);

  // add to the todolist
  enterList.appendChild(li)

  // add to the local storage
  addListLocalstorage(List);

  // add an alert
  alert('todo-list added');

  this.reset()

}

//  Remove the tweet from the DOM
function removeList(e) {
  if (e.target.classList.contains('remove-todoList')) {
    e.target.parentElement.remove();
  }

  console.log();
  // remove list from local Storage
  removeLIstLocalStorage(e.target.parentElement.textContent)

}

// add list to local storage


function addListLocalstorage(List) {
  let todolist = getTodoListFromStorage();

  // add item to the Array
  todolist.push(List);

  // add to localStorage
  localStorage.setItem('todolist', JSON.stringify(todolist));

}

// get list from storage
function getTodoListFromStorage() {
  let todolist;
  const todoLS = localStorage.getItem('todolist');

  // get the value of no returned then get the empty array
  if (todoLS === null) {
    todolist = [];
  } else {
    todolist = JSON.parse(todoLS);
  }
  return todolist;
}

// print localStorage on load

function localStorageOnLoad() {
  let todolist = getTodoListFromStorage('todolist');

  //  let us loop through the value
  todolist.forEach(function (List) {

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-todoList';
    removeBtn.textContent = 'x';


    //   to creaate an li element
    const li = document.createElement('li');
    li.textContent = List;


    // adding remove button to each todo
    li.appendChild(removeBtn);

    // add to the todolist
    enterList.appendChild(li)

  })
}

// removetweet from local storage

function removeLIstLocalStorage(List) {


  // get lst from localStorage

  let todolist = getTodoListFromStorage()
  console.log(todolist);

  //  remove the x from the list
  const todoDelete = List.substring(0, List.length - 1);

  //  lop through the function
  todolist.forEach(function (ListLs, index) {
    if (todoDelete === ListLs) {
      todolist.splice(index, 1);
    }
  });

  localStorage.setItem('todolist', JSON.stringify(todolist) )

}