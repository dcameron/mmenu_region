/**
 * @file
 * Invokes the mmenu library.
 */

(function ($) {
  $('#mmenu').mmenu({
    navbar:{title:"Search"},
    navbars:[{position:'top'}],
    offCanvas:{zposition:"front"}
  });
})(jQuery);
