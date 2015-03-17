var _w = jQuery(window).width();
$(document).ready(function(){
	menu()
	$('.bxslider').bxSlider({
		pager: false
	});

	jQuery('a.btn-toggle').click(function(){
		jQuery('.navigation ul').slideToggle();
	});

	jQuery('html').click(function(even){
		if(_w <= 991){
			if(jQuery(even.target).closest('.navigation').length == 0){
				jQuery('.navigation ul').slideUp();
			}
		}
	});
});

jQuery(window).resize(function(){
	menu();
});

function menu(){
	if(_w <= 991){
		jQuery('.navigation ul').hide();
	}
	else{
		jQuery('.navigation ul').show();
	}
}