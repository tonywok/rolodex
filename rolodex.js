jQuery(function($) {

  var Rolodex = (function(rolodex) {
    var current = 0;
    var next;
    var prev;

    var advance = function() {
      prev = (current + 10 - 1) % 10;
      next = (current + 1) % 10;

      // remove top-current
      $('#rolodex-top-' + prev).removeClass('top-current');
      $('#rolodex-bottom' + prev).removeClass('bottom-current');

      $('#rolodex-top-' + current).removeClass('top-next');
      $('#rolodex-bottom' + current).removeClass('bottom-next');

      $('#rolodex-top-' + current).addClass('top-current');
      $('#rolodex-bottom' + current).addClass('bottom-current');

      $('#rolodex-top-' + next).addClass('top-next');
      $('#rolodex-bottom-' + next).addClass('bottom-next');

      current = next;
    }

    rolodex.init = function(options) {
      $(".number").bind("webkitAnimationEnd", function(e) {
        var event = e.originalEvent;

        if ( event.animationName === 'middle-to-bottom' ) {
          $('#rolodex-top-' + current).removeClass('animate-top');
          $('#rolodex-bottom-' + next).removeClass('animate-bottom');
          advance();
          $('#rolodex-top-' + current).addClass('animate-top');
          $('#rolodex-bottom-' + next).addClass('animate-bottom');
        }
      });

      $('#rolodex-top-0').addClass('top-current');
      $('#rolodex-bottom-0').addClass('bottom-current');

      $('#rolodex-top-1').addClass('top-next');
      $('#rolodex-bottom-1').addClass('bottom-next');

      $('#rolodex-top-0').addClass('animate-top');
      $('#rolodex-bottom-1').addClass('animate-bottom');
    };

    return rolodex;

  })({});

  Rolodex.init();
});
