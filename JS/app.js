

        
    let swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        speed: 800,
        coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
        },
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: false,
        },
    });


            
    let carousel = Carousel(".sliders", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        speed: 800,
        coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
        },
        loop: true,
        pagination: {
        el: ".slider-pages",
        clickable: false,
        },
    });s