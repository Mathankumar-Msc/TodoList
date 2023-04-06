
const btn = document.querySelector('#task-submit');
const input = document.querySelector('#task-input');
const tasks = document.querySelector('#tasks');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
const text = input.value;
if(!text) return alert("Enter the value");
const taskel = document.createElement("div");
taskel.classList.add('task');

const contentEl = document.createElement("div");
taskel.classList.add('content');
taskel.appendChild(contentEl);

const inputEl = document.createElement('input');
inputEl.classList.add('text');
inputEl.type ="text";
inputEl.value=text ;
inputEl.setAttribute("readonly","readonly")
contentEl.appendChild(inputEl);

const actionsEl = document.createElement('div');
actionsEl.classList.add('action');


const editEl = document.createElement('div');
editEl.classList.add('edit');
editEl.innerText ="Edit"

const deleteEl = document.createElement('div');
deleteEl.classList.add('delete');
deleteEl.innerText ="Delete"

actionsEl.appendChild(editEl)
actionsEl.appendChild(deleteEl)

taskel.appendChild(actionsEl);
tasks.appendChild(taskel);

})

// <!-- <div class="task">
// <div class="content">
//   <input type="text" class="text" value="My Task" readonly />
// </div>
// <div class="actions">
//   <button class="edit">Edit</button>
//   <button class="delete">Delete</button>
// </div>
// </div> -->