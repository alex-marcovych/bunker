document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    const carousel = document.getElementById('carousel');
    carousel.innerHTML += carousel.innerHTML;

    sliders.forEach((slider) => {
        const list = slider.querySelector('.slider__list');
        const slides = slider.querySelectorAll('.slider__item');
        const prevBtn = slider.querySelector('.control_prev');
        const nextBtn = slider.querySelector('.control_next');

        let index = 0;

        const render = () => {
            list.style.transform = `translateX(-${index * 100}%)`;
        };

        const goNext = (e) => {
            e?.preventDefault?.();
            index = (index + 1) % slides.length;
            render();
        };

        const goPrev = (e) => {
            e?.preventDefault?.();
            index = (index - 1 + slides.length) % slides.length;
            render();
        };

        nextBtn.addEventListener('click', goNext);
        prevBtn.addEventListener('click', goPrev);

        render();
    });
});
