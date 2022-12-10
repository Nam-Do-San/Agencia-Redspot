let menu = document.querySelector('#menu-icon');
let iconX =document.querySelector('.burger')
let List = document.querySelector('.menu');


menu.onclick=() => {
    menu.classList.toggle('burger');
    List.classList.toggle('open');
    iconX.classList.toggle('is-active')
}
