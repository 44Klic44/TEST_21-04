


  var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})



$(document).ready(function(){
	$('.slider ul').bxSlider({
		pager: true,
		controls: true,
		auto: true,
		mode: 'fade',
		pause: 10000,
		minSlides: 1,
		maxSlides: 1
	});
});


$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});




function lockScroll() {
  document.body.classList.toggle('lock-scroll');
}

 

