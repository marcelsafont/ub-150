(function ($, Drupal) {
  Drupal.behaviors.accordions = {
    attach: function attach(context) {
    	$('.accordion-header').once().click(function() {
			$(this).next().toggle("fast"); 

			if ($(this).hasClass('accordion-header')) {
				$(this).removeClass('accordion-header').addClass('accordion-header-pressed');
			} else {
				$(this).removeClass('accordion-header-pressed').addClass('accordion-header');
			}
		});
    }
  };
})(jQuery, Drupal);   