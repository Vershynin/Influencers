$(function() {

//popup
//$(".top-order-button").magnificPopup();

//all block equal Height
//$(".cd-item").equalHeights();

//animated css Docs: https://daneden.github.io/animate.css/
//$(".item").animated("zoomInDown")

//owl-carousel 2  Docs: https://owlcarousel2.github.io/OwlCarousel2/

/*
var owl = $('.slider');
owl.owlCarousel({
    items:1,
    loop:true,
});
*/

/* Mobile menu Docs:
 $(document).ready(function() {
      $("#menu").mmenu({
      	"extensions": [
            "effect-menu-slide",
            "effect-listitems-drop"
         ]
      });
});
*/

	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#callback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	//$(".preloader-container").fadeOut();
});
