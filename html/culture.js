jQuery(document).ready(function($) {
	$('.multiple_slide').fadeOut(0);
	$('.multiple_slide.mars').fadeIn(800);
	
	$('.btn_voir.onglet').click(function(){
		console.log($(this).attr('value'));
		

		if ($(this).hasClass('actif')) {
		}else{

			$('.btn_voir.onglet').removeClass('actif');
			$(this).addClass('actif');
			$('.multiple_slide').removeClass('actif');

			$('.multiple_slide').fadeOut(800);

			if ($(this).attr('value') == '1') {
				$('.multiple_slide.mars').addClass('actif');
				$('.multiple_slide.mars').fadeIn(850);
				console.log("mars");
			
			}

			if ($(this).attr('value') == '2') {
				$('.multiple_slide.avril').addClass('actif');
				$('.multiple_slide.avril').fadeIn(850);
				console.log("avril");
			}

			if ($(this).attr('value') == '3') {
				$('.multiple_slide.mai').addClass('actif');	
				$('.multiple_slide.mai').fadeIn(850);
				console.log("mai");
			}

			if ($(this).attr('value') == '4') {
				$('.multiple_slide.juin').addClass('actif');
				$('.multiple_slide.juin').fadeIn(850);
				console.log("juin");
			}
		}

	});
});
