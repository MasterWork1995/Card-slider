const slidesPlugin = (active = 3) => {
    const slides = document.querySelectorAll('.slide');

    slides[active].classList.add('active');

    slides.forEach(slide => slide.addEventListener('click', () => {
        clearActiveClases();
        slide.classList.add('active');
    }));

    const clearActiveClases = () => slides.forEach(slide => slide.classList.remove('active'));
};

slidesPlugin();