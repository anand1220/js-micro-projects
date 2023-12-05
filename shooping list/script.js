const addBtn = document.querySelector('.add-btn');
let inputValue = document.querySelector('#input-value');


addBtn.addEventListener('click', addliItems)


function addliItems() {

    let inputItem = inputValue.value;
    let ul = document.querySelector('.list-container')
    if (inputValue !== '') {


        const newli = document.createElement('li');

        newli.textContent = inputItem;
        // newli.appendChild(span)
        ul.appendChild(newli)


        let removebtn = document.createElement('button')
        removebtn.textContent = 'Remove'
        newli.appendChild(removebtn)

        removebtn.addEventListener('click', function () {
            newli.remove()

        })
        inputValue.value = '';
    }
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13 && (inputValue.value !== '')) {
        addliItems()
    }
})
