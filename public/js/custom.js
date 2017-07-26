(function () {
 "use strict";
jQuery(document).ready(function(){
	
	//Add Class Js to html
	jQuery('html').addClass('js');	
	
    //=================================== MENU ===================================//
	jQuery("ul.sf-menu").supersubs({ 
	minWidth		: 13,		// requires em unit.
	maxWidth		: 17,		// requires em unit.
	extraWidth		: 3	// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
						   // due to slight rounding differences and font-family 
	}).superfish();  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 

	//=================================== FADE EFFECT ===================================//
	if (jQuery.browser.msie && jQuery.browser.version < 7) return; // Don't execute code if it's IE6 or below cause it doesn't support it.
	
	jQuery('.klasik-pf-img').hover(
		function() {
			jQuery(this).find('.rollover').stop().fadeTo(500, 0.6);
		},
		function() {
			jQuery(this).find('.rollover').stop().fadeTo(500, 0);
		}
	);


	
});


jQuery(window).load(function() {
	runflexslider();
	runcameraslider();	
});


//=================================== CAMERA SLIDER ===================================//
function runcameraslider(){
	if(jQuery('#slideritems').length){
		jQuery('#slideritems').camera({
			height: '31%', /* to set the slider height */
			fx: 'simpleFade', /* to set the slider effect */
			autoAdvance: true,
			pagination: false,
			navigation:true,
			navigationHover: true,
			playPause: false,
			thumbnails: false,
			loader: 'none',
			imagePath: '../images/'
		});
	}
}

//=================================== FLEXSLIDER ===================================//
function runflexslider(){
	jQuery('#postgallery').flexslider({
		animation: "fade",
		touch:true,
		animationDuration: 6000,
		directionNav: true,
		controlNav: false
	});
	
	jQuery('.flexslider-carousel').flexslider({
		animation: "slide",
		touch:true,
		animationLoop: false,
		controlNav: false,
		itemWidth: 160,
		itemMargin: 0,
		minItems: 2,
		maxItems: 6
	});
	
	
}


//=================================== BACK TO TOP ===================================//
jQuery(document).ready(function(){

	// hide #scroll-to-top first
	jQuery("#scroll-to-top").hide();

	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 300) {
				jQuery('#scroll-to-top').fadeIn();
			} else {
				jQuery('#scroll-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		jQuery('#scroll-to-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});



})(jQuery);