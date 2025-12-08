const inspiratieCarousel = document.querySelector('.inspiratie-carousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

prevBtn.addEventListener('click', () => {
    if (inspiratieCarousel.scrollLeft <= 222) {
        const maxScrollLeft = inspiratieCarousel.scrollWidth - inspiratieCarousel.clientWidth;
        inspiratieCarousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
    } else {
        inspiratieCarousel.scrollBy({ left: -400, behavior: 'smooth' });
        console.log("hi");
    }
});

nextBtn.addEventListener('click', () => {
    const maxScrollLeft = inspiratieCarousel.scrollWidth - inspiratieCarousel.clientWidth;
    const currentScrollLeft = inspiratieCarousel.scrollLeft;

    if (currentScrollLeft + 400 >= maxScrollLeft) {
        inspiratieCarousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        inspiratieCarousel.scrollBy({ left: 400, behavior: 'smooth' });
    }
});
