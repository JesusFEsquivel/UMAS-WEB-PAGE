$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    });
});

const adjustCarouselHeight = () => {
    let maxHeight = 0;
    document.querySelectorAll('.slider img').forEach(img => {
        if (img.naturalHeight > maxHeight) maxHeight = img.naturalHeight;
    });
    document.querySelectorAll('.slider img').forEach(img => img.style.height = maxHeight + 'px');
};

window.addEventListener('load', adjustCarouselHeight);
window.addEventListener('resize', adjustCarouselHeight);