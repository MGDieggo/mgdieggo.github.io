console.log("Funciones cargadas");

$(document).ready(function(){

    $(".location-animation path").attr("stroke-width","2.8");

    $("div.big-mask").removeClass("text-mask").delay(500);

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
    animacionScroll("#location-lottie", "animation-fadein");
    animacionScroll("span.slideup-menu", "animation-slideup");

    
});


window.onload = function() {
    $(".loader").slideUp(2000);
    $("span.text-slide").addClass(animation-slideup).delay(2000);
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
