//меню
const iconMenu = document.querySelector('.icon__menu'),
menu = document.querySelector('.menu');
window.addEventListener('click', (e)=>{
    if(e.target.closest('.icon__menu')){
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('lock');
    }
    else if(!e.target.closest('.menu') || e.target.closest('.menu__item')){
        iconMenu.classList.remove('_active');
        menu.classList.remove('_active');
        document.body.classList.remove('lock');     
    }
});


//фиксированная шапка 
window.addEventListener('scroll', ()=>{
    if(pageYOffset > 300){
        document.querySelector('.header').classList.add('scroll');
    }else{
        document.querySelector('.header').classList.remove('scroll');     
    }
});


