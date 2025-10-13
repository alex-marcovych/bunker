document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
        const list = slider.querySelector('.slider__list');
        const slides = slider.querySelectorAll('.slider__item');
        const prevBtn = slider.querySelector('.control_prev');
        const nextBtn = slider.querySelector('.control_next');

        let index = 0;

        function getSlideWidth() {
            if (slides.length === 0) return 0;
            return slides[0].offsetWidth;
        }

        function render() {
            const slideWidth = getSlideWidth();
            list.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        function goNext(e) {
            e?.preventDefault?.();
            index = (index + 1) % slides.length;
            render();
        }

        function goPrev(e) {
            e?.preventDefault?.();
            index = (index - 1 + slides.length) % slides.length;
            render();
        }

        nextBtn.addEventListener('click', goNext);
        prevBtn.addEventListener('click', goPrev);

        window.addEventListener('resize', render);

        render();
    });
});
