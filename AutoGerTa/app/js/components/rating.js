document.querySelectorAll('.rating-review__item').forEach(item=>{
    item.addEventListener('click', ()=>{
        item.parentNode.dataset.totalValue = item.dataset.itemValue;
    });
})