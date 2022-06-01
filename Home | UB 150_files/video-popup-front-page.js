(function ($, Drupal) {
  Drupal.behaviors.video_popup_front_page = {
    attach: function attach(context) {

      $('.popup-video').magnificPopup({
        // disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,


        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

              id: function( url ) {
                var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                if ( !m || !m[1] ){
                  var s = url.split("/");
                  if(s[3] = 'embed' ){
                    return s[4];
                  }
                  return null;
                }
                return m[1];
              },


              src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0' // URL that will be set as a source for iframe.
            }
          }
        }

      });

    }
  };
})(jQuery, Drupal);
