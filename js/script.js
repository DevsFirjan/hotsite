var search = document.querySelector('.search');
var buscar = document.querySelector('.buscar');
var close = document.querySelector('.close');
var menuIcon = document.querySelector('.menu_icon');
var closeMenu = document.querySelector('.close_menu');
var menu = document.querySelector('.menu');

function fecharMenu(){
    menuIcon.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.style.width = "0"
}

function fecharBusca(){
    buscar.style.maxHeight = "0";
    search.style.display = "block";
    close.style.display ='none' ;
}

search.addEventListener('click', ()=>{
    buscar.style.maxHeight = "20vh";
    search.style.display = 'none';
    close.style.display = "block";
    fecharMenu();
});

close.addEventListener('click', ()=>{
    fecharBusca()
});

menuIcon.addEventListener('click', ()=>{
    menuIcon.style.display = 'none';
    closeMenu.style.display = 'block';
    if(window.screen.width > 1024)
        menu.style.width = "40%";
    else menu.style.width = "60%";
    fecharBusca()
});

closeMenu.addEventListener('click', ()=>{
    fecharMenu();
});