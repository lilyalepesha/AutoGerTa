const swiper = new Swiper('.gallery__slider', {
    // Optional parameters
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      620: {
          slidesPerView: 2,
      },
      // when window width is >= 480px
      850: {
          slidesPerView: 3,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__slider-button-next',
      prevEl: '.gallery__slider-button-prev',
    },
});