console.log("Funciones cargadas");

$(document).ready(function(){

    $(".location-animation path").attr("stroke-width","2.8");

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

    animacionScroll(".text-slide", "text-animation");
    animacionScroll("#text-about", "text-animation");
    animacionScroll("#text-works", "text-animation");

});

function animacionScroll(id_element, clase){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop(); 
        var offsetElement = $(id_element).offset().top; 
        var heightWindow = $(window).height();
        if(scroll + heightWindow/2 >= offsetElement){
            $(id_element).addClass(clase).delay(500).queue(function(){
                $("div.big-mask").removeClass("text-mask");
            })
         } 
    }) 
}
