const toggleButton = document.querySelector('.btn');
const toggleBox = document.querySelector('.box');
let themeButton = document.querySelector('.theme-btn');
let body = document.querySelector('body');

toggleButton.addEventListener('click', function () {
    if (toggleBox.style.display === 'none') {
        toggleBox.style.display = 'block';
    } else {
        toggleBox.style.display = 'none';
    }
});
let flag = 0;
themeButton.addEventListener('click', function () {

    if (flag == 0) {
        body.style.backgroundColor = 'grey';
        themeButton.innerHTML = 'Light Theme';
        flag = 1;
    } else {
        body.style.backgroundColor = '#fff';
        themeButton.innerHTML = 'Dark Theme';
        flag = 0;
    }



})