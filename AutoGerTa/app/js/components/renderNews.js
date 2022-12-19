async function getResponse(){
    let response = await fetch('js/components/news.json');
    console.log(response);
    let content = await response.json();
    let list = document.querySelector('.news__items');
    let key;
    for(key in content){
        list.innerHTML+=`
        <div class="news__item">
            <div class="news__item-img">
                <img src="images/news/${content[key].imgSrc}" alt="news car">
            </div> 
            <div class="news__item-content news-content">
                <time class="news-content__date">
                    ${content[key].time}
                </time>
                <p class="news-content__descr">
                    ${content[key].title}
                </p>
            </div>  
        </div>
        `
    }
}
getResponse();
