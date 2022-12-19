
        //показать ещё
        showMoreReviews = document.getElementById('more-reviews');
        reviewItems = document.querySelectorAll('.review__item');

        let newsItemsCount = 6,
        reviewItemsCount = 3;
        function addMore(showMore, count, items){
            showMore.addEventListener('click', ()=>{
                count+=3;
                const array = Array.from(items);
                visItems = array.slice(0, count);
                visItems.forEach(item=>{
                    item.classList.add('visible');
                });
                if(visItems.length === array.length) {
                    showMore.style.display = 'none'; 
                }
                
            });
        }
      addMore(showMoreReviews, reviewItemsCount, reviewItems);
