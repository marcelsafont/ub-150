(function ($, Drupal) {
  Drupal.behaviors.responsive_menu = {
    attach: function attach(context) {

      $('.menu-header-toggle').once().click(function() {
        console.log('fooo');
        $('.menu-collapsable').toggle('fast');

        if($(window).width() >= 1100){
          $('.navbar-btn').addClass('left-state');
        } else {
          $('.menu-header-toggle').hide();
          $('.menu-header-close').show();
        }
      });

      $('.menu-header-close').once().click(function() {
        console.log('faaa')
        $('.menu-collapsable').toggle('fast');

        if($(window).width() >= 1100){
          $('.navbar-btn').removeClass('left-state');
        }

        $('.menu-header-toggle').show();
      });

      $(window).resize(function() {
        console.log('resize');
          if($(window).width() < 1100){
              console.log('responsive');
              /* responsive */
              $('.navbar-btn').removeClass('left-state');
              
              if ($('.menu-collapsable').is(":visible")) {
                $('.menu-header-close').show();
                $('.menu-header-toggle').hide();
              } else {
                $('.menu-header-close').hide();
                $('.menu-header-toggle').show();                
              }


          } else {
            console.log('no responsive');

            if ($('.menu-collapsable').is(":visible")) {
                $('.navbar-btn').addClass('left-state');
            } else {
                $('.navbar-btn').removeClass('left-state');
            }
          }
      });      

    }
  };
})(jQuery, Drupal);      