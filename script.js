document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const items = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;

    items.forEach((item, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    updateSlider();
});


        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;

        const showSlide = (index) => {
            carouselItems.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        };

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        showSlide(currentIndex);


        document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000); 
});