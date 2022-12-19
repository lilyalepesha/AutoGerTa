
const links = document.querySelectorAll('#modal__link');
    links.forEach(link=>{
        link.addEventListener('click', (e)=>{
            let path = e.currentTarget.getAttribute('data-path');
            document.querySelectorAll(`[data-target="${path}"]`).forEach((item)=>{
               
                item.classList.add('open');
                disableScroll();
                item.addEventListener('click', (e)=>{
                    if(e.target.closest('#close') || e.target.classList.contains('popup__bg')){
                        item.classList.remove('open');
                        enableScroll();
                    }
                });
            });
        });
    });
function disableScroll(){
    let paddingScroll =  window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.add('lock');
    document.body.style.paddingRight = paddingScroll;
    console.log(paddingScroll);
}
function enableScroll(){
    document.body.classList.remove('lock');
    document.body.style.paddingRight = 0 + "px";
}



