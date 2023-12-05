const form = document.querySelector('form');
const resetButton = document.querySelector('.reset');
let root = document.querySelector('.result');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let num = parseInt(document.querySelector('#number').value);


    if (isNaN(num) || num < 0) {
        root.innerHTML = 'Please enter valid number';
    } else {
        let multiplicationTable = '';

        for (let i = 1; i < 11; i++) {
            multiplicationTable += `${num} * ${i} = ${num * i}<br>`;
        }

        root.innerHTML = multiplicationTable;

    }
})


resetButton.addEventListener('click', function () {

    document.querySelector('#number').value = '';
    root.innerHTML = '';
})