console.log("Funciones cargadas");

$(document).ready(function(){

    console.log("Borde activado");

    $(".hamburger--spring").click(function(){
        
        console.log("Click menu")
        $(this).toggleClass("is-active");

        if ($(".hamburger").hasClass("is-active")){
            document.body.parentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            } else {
            document.body.parentElement.style.overflow = "inherit";
            document.body.style.overflow = "inherit";
        }
    });

    $(".hamburger").click(function() {
        $("#menu").fadeToggle("slow");
    });
    
    $("#menu a" ).click(function(){
        $(".hamburger").eq(0).click();
    });

    $("#experience").click(function(){
        $("#experience-content").slideToggle();
        $("#experience-arrow").toggleClass("rotate-icon");
    });

    $("#skills").click(function(){
        $("#skills-content").slideToggle();
        $("#skills-arrow").toggleClass("rotate-icon");
    });

    $("#software").click(function(){
        $("#software-content").slideToggle();
        $("#software-arrow").toggleClass("rotate-icon");
    });

    animacionScroll("#text-about", "animation-slideup");
    animacionScroll("#text-works", "animation-slideup");
    animacionScroll("span.slideup-menu", "animation-slideup");

    var slideup = $(".text-slide");
    setTimeout(function() {
        slideup.addClass("animation-slideup");
    }, 2000);

    var slideupslow = $(".img-slide");
    setTimeout(function() {
        slideupslow.addClass("animation-slideupslow");
    }, 2000);

    var fadein = $("#location-lottie, .status");
    setTimeout(function() {
        fadein.addClass("animation-fadein");
    }, 2300);

    // var removemask = $(".big-mask");
    // setTimeout(function() {
    //     removemask.removeClass("text-mask");
    // }, 2700);

});


window.onload = function() {
    $(".loader").slideUp(2000);
};

window.unload = function() {
    $(".loader").slideUp(2000);
};


function animacionScroll(id_element, clase){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop(); 
        var offsetElement = $(id_element).offset().top;
        var heightWindow = $(window).height();
        if(scroll + heightWindow/1 >= offsetElement){
            $(id_element).addClass(clase);     
        } 
    }) 
}
