(function ($, Drupal) {
  Drupal.behaviors.sliders_the_ub_page = {
    attach: function attach(context) {
      $('.field--name-field-sideshow').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    }
  }
  Drupal.behaviors.popover = {
    attach: function attach(context) {
       
        $('.calendar-popover-launcher').popover({
          container: 'body'
        });
        $('.calendar-popover-launcher').click(function(e){
          e.preventDefault();
        })
    }
  }
})(jQuery, Drupal);
