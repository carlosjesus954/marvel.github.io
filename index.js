/*Cuando hago click .boton, .nav TOGGLE 'activo'*/ 

const svg = document.querySelector('.svg')
const navmenu = document.querySelector('.navmenu')

svg.addEventListener('click',()=>{
    navmenu.classList.toggle('activo')
})