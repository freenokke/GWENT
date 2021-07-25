const smoothScrollElems = document.querySelectorAll('.main__scroll');
const scrollUp = document.querySelector('.scroll-up');

smoothScrollElems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        })
    })
})


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

});

scrollUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

window.addEventListener('scroll', () => {
    const height = pageYOffset;
    if (height > 900) {
        scrollUp.classList.add('scroll-up--active');  
    }
    else {
        scrollUp.classList.remove('scroll-up--active');
    }
    console.log('height: ', height);

})