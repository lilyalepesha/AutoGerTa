const goToTop = document.querySelector('.go-top');
goToTop.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);
function trackScroll(){
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if(offset>coords){
        goToTop.classList.add('show');
    }
    else{
        goToTop.classList.remove('show');      
    }
}
function goTop(){
    if(window.pageYOffset>0){
        window.scrollBy(0, -100);
        setTimeout(goTop, 0);
    }
}