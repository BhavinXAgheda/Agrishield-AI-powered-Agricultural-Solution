 document.addEventListener('DOMContentLoaded', function () {
      const swiper = new Swiper('.mySwiper', {
        speed: 2000, // Transition speed in milliseconds (1.5 seconds)
        autoplay: {
          delay: 2000, // Delay between slides in milliseconds (2 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true, // Loop through slides  
      });
    });