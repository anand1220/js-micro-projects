const addTask = document.querySelector('.add-task');
const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('.list-container');

addTask.addEventListener('click', () => {
    let inputValue = inputBox.value.trim();

    if (inputBox.value !== '') {
        let li = document.createElement('li');
        li.innerText = inputValue;
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove-btn'
        removeButton.className = 'remove-li'

        removeButton.addEventListener('click', () => {
            li.remove();
        })
        inputBox.value = ''
        li.appendChild(removeButton);
        listContainer.appendChild(li);
    }

})



