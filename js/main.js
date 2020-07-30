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
//for protfolio isotope
(function(){
    "use strict"
    var $project = $(".projectSec");

    $project.isotope({
        "itemSelector": ".item",
        "layoutMode": "fitRows",
    });

    $("ul.filters li").on("click", function(e){
        
        var filter = $(this).attr("data-filter");
        $project.isotope({filter: filter});

        $("ul.filters li").removeClass("active");
        $(this).addClass("active")

        e.preventDefault();
    });
    //mouse hover
    $(".project").mouseenter(function(){
        $(this).find(".cardOverlay").css("top","0");
        $(this).find("ul.cardLink").css("top","0");
    }).mouseleave(function(){
        $(this).find(".cardOverlay").css("top","-100%");
        $(this).find("ul.cardLink").css("top","100%");
    });
})(jQuery);

//for protfolio Lightbox
//Define UI constants
const projectItem = document.querySelector(".project-item").children;
const lightBoxContainer = document.querySelector(".lightBox");
const lightBoxImg = document.querySelector(".lightBoxImg");
const counter = document.querySelector(".lightBoxCunter");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index;
let imageSrc;

//zoom btn click
for(let i=0; i<projectItem.length; i++){
    projectItem[i].querySelector(".zoomBtn").addEventListener("click", function(e){
        index=i;
        lightBox();
        changeImg();
        e.preventDefault();
    })
}
//for zoom img
function lightBox(){
    lightBoxContainer.classList.toggle("open");
}
//for images change
function changeImg(){
    imageSrc = projectItem[index].querySelector("img").getAttribute("src");
    lightBoxImg.src= imageSrc;
    counter.innerHTML=(index+1)+" of "+projectItem.length;
}
//for images change on click button
function next(){
    if(index==projectItem.length-1){
        index=0;
    }else{
        index++;
    }
    changeImg();
};
function prev(){
    if(index==0){
        index= projectItem.length-1;
    }else{
        index--;
    }
    changeImg();
};
//now close lightbox when click to outside of:
//prev or next
//lightbox-img
lightBoxContainer.addEventListener("click", function(e){
    if(e.target!==lightBoxImg && e.target!==prevBtn && e.target!==nextBtn){
        lightBox();
    }
});