const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
btn.addEventListener('click', handlerOnClick)


function handlerOnClick(){
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
}