
    //калькулятор 
    const cardWrapper = document.querySelector('.calc-content__items'); 
    const selects = document.querySelectorAll('.cost__table-select'); 
    selects.forEach(item=>{ 
        item.addEventListener('change', ()=>{ 
            const parent = item.closest('tr'), 
            cost = parent.querySelector('#cost__table-price'); 
            cost.innerText = item.options[item.selectedIndex].value; 
        }); 
    }); 
    const buttons = document.querySelectorAll('.cost__table-add'); 
    buttons.forEach(item=>{ 
        item.addEventListener('click', ()=>{ 
            const parent = item.closest('tr'), 
            select = parent.querySelector(".cost__table-select"); 
            const productInfo = { 
                id: parent.dataset.id, 
                title: parent.querySelector('.cost__table-kind').innerText, 
                cost: parent.querySelector('#cost__table-price').innerText, 
                count: parent.querySelector('#cost__table-count').innerText, 
                selectText: parent.querySelector('.cost__table-select')?getSelectText(parent.querySelector('.cost__table-select')):"", 
            }; 
         
            const cardItem = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`); 
            
            if(cardItem && !productInfo.selectText){ 
                const count = cardItem.querySelector('.calc__count');
                count.innerText = parseInt(count.innerText)+parseInt(productInfo.count); 
            } 
            else{ 
                const cardItemHTML = `<div class="calc-content__item content-calc" data-id="${productInfo.id}"> 
                    <h5 class="content-calc__title">${productInfo.title} ${productInfo.selectText}</h5> 
                    <p class="content-calc__text"><span class="calc__price">${productInfo.cost}</span>руб.</p>  
                    <p class="content-calc__count"><span class="calc__count">${productInfo.count}</span>шт.</p> 
                    <button class="content-calc__button">&times;</button> 
                    </div>`; 
                cardWrapper.insertAdjacentHTML('beforeend', cardItemHTML); 
            } 
            calcTotal(); 
            toggleCardText(); 
            
        }); 
      
    }); 
window.addEventListener('click', (e)=>{ 
    const btnMinus = e.target.closest('.content-calc__button'); 
    if (btnMinus){ 
        const item = btnMinus.closest('.calc-content__item'); 
        const counter = item.querySelector('.calc__count'); 
        if(parseInt(counter.innerText)>1){ 
            counter.innerText = --counter.innerText; 
        } 
        else if(parseInt(counter.innerText)===1){ 
            item.remove(); 
            toggleCardText(); 
        } 
        calcTotal(); 
    } 
}); 
function getSelectText(select){ 
    select = select.options[select.selectedIndex].text; 
    return select; 
}

function calcTotal(){
    const total = document.querySelector('.total'),
    calcItems = document.querySelectorAll('.calc-content__item'),
    calcItemsColor = document.querySelectorAll('.card__item');
    let totalValue = 0,
    totalValueColor = 0;
    calcItems.forEach(item=>{
        const price = item.querySelector('.calc__price'),
        count = item.querySelector('.calc__count'),
        currentCost = parseFloat(price.innerText)*parseFloat(count.innerText);
        totalValue+=currentCost;
    });
    calcItemsColor.forEach(item=>{
        const price = item.querySelector('.color-price'),
        count = item.querySelector('.card__item-count'),
        currentCost = parseFloat(price.innerText)*parseFloat(count.innerText);
        totalValueColor+=currentCost;
    });
    total.innerText = (parseFloat(totalValue)+parseFloat(totalValueColor)).toFixed(2);  
}
function toggleCardText(){
    const cardWrapper = document.querySelector('.calc-content__items');
    if(cardWrapper.children.length>0){
        document.querySelector('.calc__text-descr').classList.add('none');      
    }else{
        document.querySelector('.calc__text-descr').classList.remove('none');       
    } 
}