var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px
        320: {
        slidesPerView: 1,
        },
        // when window width is <= 480px
        480: {
        slidesPerView: 2,
        },
        // when window width is <= 640px
        640: {
        slidesPerView: 3,
        }
    }
  })