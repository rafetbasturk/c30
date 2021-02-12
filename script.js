$(function() {

    // hamburger menu

    $("body").on("click", "#hamburger, #close", function () {
        $("#hamburger").toggle();
        $("#close").toggle();
        $("nav").toggle();
    });

    // email verification

    $("body").on("click", "button", function(e){
        e.preventDefault();
        let email = $("#email").val();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ((email == "") || (re.test(String(email).toLowerCase()) == false)){
            $("#error").css("visibility", "visible");
        };
    });

    // slider

    let slides = $(".slider__container--slides");
    let dots = $(".dot");
    let slideShow;
    let slideIndex = 0;

    function showSlides() {
        
        let i;

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        
        for (i = 0; i < slides.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "flex";
        
        dots[slideIndex-1].className += " active";

        slideShow = setTimeout(showSlides, 2000);
    }

    showSlides();

    // carousel

    let carousel = $(".carousel__container");
    let carouselShow;
    let counter = 0;

    function showCarousel() {

        carousel.css({
            transition: "transform .5s ease-in-out",
            transform: "translateX("+ (-570 * counter) + "px)",
        });
    
        counter++;
    
        counter > 3 ? counter = 0: null;

        carouselShow = setTimeout(showCarousel, 2000);
    }

    showCarousel()


    slides.mouseover(function() {
        clearInterval(slideShow);
    })

    slides.mouseout(function() {
        slideShow = setTimeout(showSlides, 2000);
    })

    carousel.mouseover(function() {
        clearInterval(carouselShow);
    })

    carousel.mouseout(function() {
        carouselShow = setTimeout(showCarousel, 2000);
    })
})