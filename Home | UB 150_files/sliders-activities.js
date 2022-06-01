  (function ($, Drupal) {
  Drupal.behaviors.sliders_activities = {
    attach: function attach(context) {

      $('.slider-ltu-activities').slick({
        infinite: true,
        slidesToShow: 3,
        sliderToScroll: 3,
        responsive: [{
          breakpoint:1100,
          settings: {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            dots: true,
            cssEase: 'linear',
            slidesToScroll: 1            
          }
        }]
      });

    }
  };
})(jQuery, Drupal);