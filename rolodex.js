jQuery(function($) {

  var Rolodex = (function(rolodex) {
    var cssEvents = { flip : 'top-to-middle', flop : 'middle-to-bottom' },
        index   = 0, next;

    var advance = function() {
      index = (index + 1) % 10;

      console.log("remove animation triggering classes: top-current, bottom-next");
      $("img.top-current").removeClass('top-current');
      $("img.bottom-next").removeClass('bottom-next');

      console.log("remove next");
      $("img.top-next").removeClass("top-")
      $("img.bottom-next").removeClass("bottom-next")

      console.log("new currents, triggering animation")
      .addClass("top-current");
      .addClass("bottom-current");

      $("#rolodex-top-" + index).addClass("top-next");
      $("#rolodex-bottom-" + index).addClass("bottom-next");
    }

    rolodex.init = function(options) {
      $(".number").bind("webkitAnimationEnd", function(e) {
        var event = e.originalEvent;

        if ( event.animationName === 'middle-to-bottom' ) {
          advance();
        }
      });

      $('#rolodex-top-0').addClass('top-current');
      $('#rolodex-bottom-0').addClass('bottom-current');

      $('#rolodex-top-1').addClass('top-next');
      $('#rolodex-bottom-1').addClass('bottom-next');
    };

    return rolodex;

  })({});

  Rolodex.init();
});
