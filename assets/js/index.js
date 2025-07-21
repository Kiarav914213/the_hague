window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let header = document.querySelector(".main-header");

    if (window.scrollY > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


$(document).ready(function () {
    $('.header-carousel').owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 1,
            },
        }
    });
});


$(document).ready(function () {
    $('.qualificationCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<img src="./assets/images/PreIcon.png" alt="Previous" class="custom-prev-icon">',
            '<img src="./assets/images/PreIcon.png" alt="next" class="custom-next-icon">'],
        dots: true,
        autoplay:true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1300: {
                items: 2,
            },
            1350: {
                items: 3,
            },

        }
    });
});



$(document).ready(function () {
    $('.ProjectsCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<img src="./assets/images/PreIcon.png" alt="Previous" class="custom-prev-icon">',
            '<img src="./assets/images/PreIcon.png" alt="next" class="custom-next-icon">'],
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1300: {
                items: 2,
            },
            1350: {
                items: 3,
            },
        }
    });
});



