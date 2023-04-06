  const btn = document.querySelector("#task-submit");
  const input = document.querySelector("#task-input");
  const listEl = document.querySelector("#tasks");
  btn.addEventListener("click", (e) => {
    console.log(e.target.dataset.filter);
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Please fill out the task");
      return;
    }
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");
    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");
    taskEl.appendChild(taskContentEl);

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
     taskInputEl.value = task;
    taskInputEl.setAttribute("readonly", "readonly");
    taskContentEl.appendChild(taskInputEl);

    const actionEl = document.createElement("div");
    actionEl.classList.add("action");
    
    const editEl = document.createElement("div");
    editEl.innerText = "Edit";
    editEl.classList.add("edit");

    const deleteEl = document.createElement("div");
    deleteEl.innerText = "Delete";
    deleteEl.classList.add("delete");

    actionEl.appendChild(editEl);
    actionEl.appendChild(deleteEl);

    taskEl.appendChild(actionEl);
    listEl.appendChild(taskEl);

    input.value = "";

    editEl.addEventListener("click", () => {
      if (editEl.innerText.toLowerCase() == "edit") {
        taskInputEl.removeAttribute("readonly");
        editEl.innerText = "Save";
        editEl.focus();
      } else {
        taskInputEl.setAttribute("readonly", "readonly");
        editEl.innerText = "Edit";
      }
    });

    deleteEl.addEventListener("click", () => {
    taskEl.remove();
    });
  });

