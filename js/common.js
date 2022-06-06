window.onload = function() {
    $(document).ready(function () {
        $('#researchBox').slick({
            arrows: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed : 1500,
            speed: 1000
        });
    });
    $(document).ready(function () {
        $('#journeyMap').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed : 1500,
            speed: 1000
        });
    });
}