let popups = document.querySelector('.popups');
let cross = popups.firstElementChild;

let showBtn = document.querySelector('.button button');
showBtn.addEventListener('click', (e) => {
    popups.classList.add('zoomOut');
    // popups.classList.remove('hide');

});

cross.addEventListener('click', () => {
    popups.classList.remove('zoomOut');
});

(function () {
    popups.classList.add('hide');
}())

