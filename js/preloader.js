(function ($) {
  $(document).ready(function () {
    "use strict";

    // PAGE TRANSITION
    $('body a').on('click', function (e) {

      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          // $('.page-transition').toggleClass("active");
          // setTimeout(function () {
          window.location = url;
          // }, time);

        }
      }
    });

    // PRELOADER
    var width = 100,
      perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = parseInt((EstimatedTime / 1000) % 60) * 60;

    $(".loadbar").animate({
      width: width + "%"
    }, time);

    function animateValue(id, start, end, duration) {

      var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);

      var timer = setInterval(function () {
        current += increment;
        $(obj).text(current + "%");
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    setTimeout(function () {
      $("body").addClass("page-loaded");
    }, time);
  })

})(jQuery)
