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
    fecharBusca();
});

menuIcon.addEventListener('click', ()=>{
    menuIcon.style.display = 'none';
    closeMenu.style.display = 'block';
    
    // menu.style.width = "50%";
    menu.style.width = getMenuWidth();
    
    fecharBusca()
});

closeMenu.addEventListener('click', () => {
    fecharMenu();
});

// ------ Devaneios ------

function getMenuWidth() {
    const header = document.querySelector('.header');
    const larguraMinimaItensMenu = 180;

    const headerPaddingRight = Number((getComputedStyle(header).paddingRight).split('p')[0]);
    
    return ((headerPaddingRight + larguraMinimaItensMenu) + 'px');
}