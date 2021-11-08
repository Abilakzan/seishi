jQuery(document).ready(function($) {
	
	var carrousel = $('.movz');
	var index_nb = $('.movz .une_slide').length - 1; 
	var i = 0;

	$('#slider_1 .btns .gauche').click(function() {

		if (i > 0) {
			$('.movz').animate({
    			left: '+=100%',
    			transition: "ease-in-out"
  			}, 500 );
  			i--;
		}else{
			i = 0;
		}
	});


	$('#slider_1 .btns .droite').click(function() {

		
		console.log(index_nb);
	
		if (i < index_nb) {

			$('.movz').animate({
    			left: '-=100%',
    			transition: "ease-in-out"
  			}, 500 );
  			i++;
		}else{
			i = index_nb;
		}
	});



	/*MENU	*/

	$('.btn_menu').click(function(){
		$(this).toggleClass('cross');
		$('header').toggleClass('open');
		$('main').toggleClass('open');
		$('.overlay_menu').toggleClass('actif');
	});

	$('#overlay_slider_1').click(function(){
		if ($('.btn_menu').hasClass('cross')) {
			$('.btn_menu').toggleClass('cross');
			$('header').toggleClass('open');
			$('main').toggleClass('open');
		}else{
			console.log('nop pas le droit !');
		}
	});

	$('.overlay_menu').click(function(){
		$('.overlay_menu').toggleClass('actif');
		$('header').toggleClass('open');
		$('main').toggleClass('open');
		$('.btn_menu').toggleClass('cross');
	});


});
