//for carousel speed
$('.carousel').carousel({
    interval: 5000
})
//for typing effect
var typed6 = new Typed('.type', {
    strings: [
        "Web Designer",
        "Developer"
    ],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
//for smothScroll
$('html').smoothScroll(500);

//for counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
    });
//progress ber
$(document).ready(function () {
    $('#bar1').barfiller({ barColor: "#ff2511", duration: 2000 });
    $('#bar2').barfiller({ barColor: "#ff2511", duration: 2000 });
    $('#bar3').barfiller({ barColor: "#ff2511", duration: 2000 });
    $('#bar4').barfiller({ barColor: "#ff2511", duration: 2000 });
    $('#bar5').barfiller({ barColor: "#ff2511", duration: 2000 });
    $('#bar6').barfiller({ barColor: "#ff2511", duration: 2000 });
});
//for wow effect
$(document).ready(function(){
    new WOW().init();
});
