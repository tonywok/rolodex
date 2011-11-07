jQuery(function($) {

  var Rolodex = (function(rolodex) {

    var cssEvents = { flip : 'top-to-middle', flop : 'middle-to-bottom' },
        count   = 0,
        numbers = [[0,8], [8,0]],
        top, bottom;

    var run = function() {
      var pos = count % 2;
      top     = numbers[pos][0],
      bottom  = numbers[pos][1];

      $('#rolodex-seconds-top-' + top).addClass('top-to-middle');
      $('#rolodex-seconds-bottom-' + bottom).addClass('middle-to-bottom');
      count++;
    };

    rolodex.init = function(options) {
      // $(".number").bind("webkitAnimationStart", function(e) {
      //   var event = e.originalEvent;
      // });

      $(".number").bind("webkitAnimationEnd", function(e) {
        var event = e.originalEvent;

        if ( event.animationName == 'middle-to-bottom' ) {
          $('#rolodex-seconds-top-' + top).removeClass('top-to-middle');
          $('#rolodex-seconds-bottom-' + bottom).removeClass('middle-to-bottom');
        }
      });

      setInterval(run, 1000);
    };

    return rolodex;

  })({});

  Rolodex.init();

});
