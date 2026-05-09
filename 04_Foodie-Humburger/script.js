let cross=document.querySelector('nav span');
let navBar=document.querySelector('nav');
let humburgerContainer=document.querySelector('.humburger-menue-Container span');

cross.addEventListener('click', () => {
  navBar.classList.remove('navHide');
//   navBar.classList.remove('animation');
  humburgerContainer.parentElement.style.display='block';
});

humburgerContainer.addEventListener('click', () => {
  navBar.classList.add('navHide');
  humburgerContainer.parentElement.style.display='none';
//   navBar.classList.add('animation');

});

// (function(){
//     navBar.classList.add('navHide');
// }())