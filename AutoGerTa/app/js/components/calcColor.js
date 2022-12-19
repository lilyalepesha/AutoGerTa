window.addEventListener('click', (e)=>{
    let counter,
    counterInCalc;
    if(e.target.classList.contains('counter__plus') || e.target.classList.contains('counter__minus')){
        const counterWrapper = e.target.closest('.counter');    
        counter = counterWrapper.querySelector('.counter__count');
        calcTotal();
    }
    if(e.target.classList.contains('counter__plus')){
        counter.innerText = ++counter.innerText;
        
    }
    if(e.target.classList.contains('counter__minus')){
        if(parseInt(counter.innerText)>1){
            counter.innerText = --counter.innerText;
        }

    }
    if(e.target.classList.contains('card__item-plus') || e.target.classList.contains('card__item-minus')){
        const counterWrapper = e.target.closest('.card__item-counter');    
        counterInCalc = counterWrapper.querySelector('.card__item-count');
        calcTotal();
    }
    if(e.target.classList.contains('card__item-plus')){
        counterInCalc.innerText = ++counterInCalc.innerText;
        calcTotal();
    }
    if(e.target.classList.contains('card__item-minus')){
        if(parseInt(counterInCalc.innerText)>1){
            counterInCalc.innerText = --counterInCalc.innerText;
            calcTotal();
        }
        else if(parseInt(counterInCalc.innerText)===1){
            const itemColor = counterInCalc.closest('.card__item');
            itemColor.remove();
            calcTotal();
            toggleCardText();       
        }
    }
      
})

const buttonsColor = document.querySelectorAll('.item-cards__button');
buttonsColor.forEach(item=>{
    item.addEventListener('click', ()=>{
        const itemColor = item.closest('.cost__cards-item');
        const colorInfo = {
            id: itemColor.dataset.color,
            price: itemColor.querySelector('.color-price').innerText,
            title: itemColor.querySelector('.item-cards__title').innerText,
            count: itemColor.querySelector('.counter__count').innerText,
            img: itemColor.querySelector('.item-cards__img img').getAttribute('src'),
        }
        const cardColor = cardWrapper.querySelector(`[data-color="${colorInfo.id}"]`);
        if(cardColor){
            let colorCount = cardColor.querySelector('.card__item-count');
            colorCount.innerText = parseInt(colorCount.innerText) + parseInt(colorInfo.count);
        }
        else{
            const cardColorHtml = `
            <div class="card__item" data-color="${colorInfo.id}">
                <div class="card__item-content">
                    <div class="card__item-img"><img src="${colorInfo.img}" alt="Карточка рассчёта стоимости"></div>
                    <h6 class="card__item-title">${colorInfo.title}</h6>
                <button class="card__item-close">&times;</button>
            </div>
            <p class="card__item-price"> Цена: <span class="color-price">${colorInfo.price}</span> руб.</p>
            <p class="card__item-color">Цвет: </p>
                <div class="card__item-counter">
                    <div class="card__item-plus">+</div>
                    <div class="card__item-count">${colorInfo.count}</div>
                    <div class="card__item-minus">-</div>
                </div> 
            </div>
        `;
        cardWrapper.insertAdjacentHTML('beforeend', cardColorHtml); 
        }
        toggleCardText();
        calcTotal();
    });
});
window.addEventListener('click', (e)=>{
    const btnMinusColor = e.target.closest('.card__item-close');
    if(btnMinusColor){
        const colorItem = btnMinusColor.closest('.card__item'),
        colorCounter = colorItem.querySelector('.card__item-count');
        if(parseInt(colorCounter.innerText)>1){
            colorCounter.innerText = --colorCounter.innerText;
            calcTotal();
        }
        else if(parseInt(colorCounter.innerText)===1){
            colorItem.remove();
            toggleCardText();
            calcTotal();
        } 
        
    }
}); 
const colorItems = document.querySelectorAll('.cost__cards-item');
colorItems.forEach(item=>{
    const colorBox = item.querySelector('.content-cards__color span'), 
    select = item.querySelector('.item-cards__select');
    select.addEventListener('change', ()=>{
        colorBox.style.backgroundColor = select.options[select.selectedIndex].value;      
    });
});