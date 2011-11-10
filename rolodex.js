jQuery(function($) {

  var Rolodex = (function(rolodex) {
    var cssEvents = { flip : 'top-to-middle', flop : 'middle-to-bottom' },
        index   = 0, next;

    rolodex.advance = function() {
      next = (index + 1) % 10;

      // remove some classes!
      $("img.top-current").removeClass('top-current');
      $("img.bottom-current").removeClass('bottom-current');

      $("img.top-next").removeClass("top-next").addClass("top-current");
      $("img.bottom-next").removeClass("bottom-next").addClass("bottom-current");

      /* $("#rolodex-top-" + index).addClass("top-current"); */
      $("#rolodex-top-" + next).addClass("top-next");
      /* $("#rolodex-bottom-" + index).addClass("bottom-current"); */
      $("#rolodex-bottom-" + next).addClass("bottom-next");

      index = next;
    }

      // $(".number").bind("webkitAnimationStart", function(e) {
      //   var event = e.originalEvent;
      // });
    rolodex.init = function(options) {
      index = 0;

      $(".number").bind("webkitAnimationEnd", function(e) {
        var event = e.originalEvent;

        if ( event.animationName === 'middle-to-bottom' ) {
          // $('#rolodex-top-' + top).removeClass('top-current');
          // $('#rolodex-bottom-' + bottom).removeClass('bottom-previous');

          // $('#rolodex-top-' + top).removeClass('top-to-middle');
          // $('#rolodex-bottom-' + bottom).removeClass('middle-to-bottom');
          $('
        }
      });

      setInterval(advance, 1000);
    };

    return rolodex;

  })({});

  Rolodex.init();

});
