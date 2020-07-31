//JQuery to collapse the nave ber on scroll
$(window).scroll(function(){
    if($("#menuSection").offset().top > 100){
        $(".fixed-top").addClass("top-nav-collapse");
    }else{
        $(".fixed-top").removeClass("top-nav-collapse");
    }
});
//jQuery for page scroll-to-top
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $(".scrollUp").fadeIn();
    }else{
        $(".scrollUp").fadeOut();
    }
});

$(".scrollUp").on("click", function(){
    $("html, body").animate({
        scrollTop: 0
    })
});
