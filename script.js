let menu = document.querySelector('.checkbtn');
let ul = document.querySelector('ul');
console.log(ul);
let menuClose = document.querySelector('.menu-close');

menu.addEventListener('click', function () {
    ul.classList = "show"
})

menuClose.addEventListener('click', function () {
    ul.classList = "hide"
})

