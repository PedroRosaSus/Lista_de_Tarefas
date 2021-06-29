(() => {
    const novaTarefa = document.querySelector('[data-form-button]')

    const addDeleteButton = () => {
        const deleteBtn = document.createElement('span')
        deleteBtn.innerText = "x"
        deleteBtn.classList = "close"
        deleteBtn.addEventListener('click', deleteTask)

        return deleteBtn
    }

    const addFinishButton = () => {
        const finishButton = document.createElement('input')
        finishButton.setAttribute('type', 'checkbox')
        finishButton.classList = 'form-check-input'
        finishButton.addEventListener('click', finishTask)

        return finishButton
    }

    const deleteTask = (event) => {
        const btn = event.target
        const item = btn.parentElement
        item.remove()
    }

    const finishTask = (event) => {
        const btn = event.target
        const item = btn.parentElement
        item.classList.toggle('tarefa_concluida')
    }

    const createTask = (event) => {
        event.preventDefault()

        const task = document.querySelector('[data-form-input]')
        const taskValue = task.value
        const taskList = document.querySelector('[data-task]')

        newLabel = document.createElement('label')
        newLabel.innerText = `- ${taskValue}`;
        newLabel.className = "form-check-label"
        newItem = document.createElement('li')
        newItem.appendChild(addFinishButton())
        newItem.appendChild(newLabel)
        newItem.appendChild(addDeleteButton())
        taskList.appendChild(newItem)

        task.value = ""

    }

    novaTarefa.addEventListener('click', createTask)
})()
