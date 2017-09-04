$(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("negro");
    } else {
      $("#mainNav").removeClass("negro");
    }
  });