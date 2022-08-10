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
    }, 1000);

    var slideupslow = $("video.img-slide, .img-slide");
    setTimeout(function() {
        slideupslow.addClass("animation-slideupslow");
    }, 1000);

    var fadein = $("#location-lottie, .status");
    setTimeout(function() {
        fadein.addClass("animation-fadein");
    }, 1300);

});

window.onload = function() {
    $(".loader").slideUp(1000).delay(500);

    var sendEmail = document.getElementById("contact-form");
    if(sendEmail == null){
        return;
    }

    document.getElementById("contact-form").addEventListener("submit", function(event){
        event.preventDefault();
        console.log("SUBMIT");
        var email = $("input[type=email]").val("");

        if(email==""){
            $("#error-mail").show();
            return
        }
        emailjs.sendForm("service_cbqt5f9", "template_ysv4pm4", this)
        .then( 
            function( success ){
                console.log("SUCCESS");
                console.log(success);
                $("input[type=text]").val("");
                $("input[type=email]").val("");
                $("textarea").val("");
                $("div.success-message").show();
            }, 
            function( error ){
                console.log("ERROR");
                console.log(error);
                $("#error-message").show();
            }   
        );
    });
};

$(".menu-link, .logo, .unload-animation").click(function(event) {
    var enlacemenu = $(this).attr("href")
    $(".loader2").addClass("appear");
    event.preventDefault(function(){});
    setTimeout(function(){
        window.location.assign(enlacemenu);
    }, 1200);
})

function animacionScroll(id_element, clase){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop(); 
        if($(id_element).length==0){
            return;
        }
        
        var offsetElement = $(id_element).offset().top;
        var heightWindow = $(window).height();
        if(scroll + heightWindow/1 >= offsetElement){
            $(id_element).addClass(clase);     
        } 
        
        
    }) 
}
