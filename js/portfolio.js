// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    
  
//mouse hover
$(".element-item").mouseenter(function(){
    $(this).find(".cardOverlay").css("top","0");
    $(this).find("ul.cardLink").css("top","0");
}).mouseleave(function(){
    $(this).find(".cardOverlay").css("top","-100%");
    $(this).find("ul.cardLink").css("top","100%");
});

//for protfolio Lightbox
//Define UI constants
const projectItem = document.querySelector(".grid").children;
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