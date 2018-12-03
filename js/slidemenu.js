$(function() {
  $(".menu-trigger").click(function(e) {
    e.preventDefault();
    $(".menu-trigger").toggleClass("close-menu");
    $("#slide-menu").toggleClass("active");
  });
    $("#slide-menu ul li a").click(function(e) {
        $("#slide-menu").removeClass("active");
        $(".close-menu").removeClass("close-menu");
    });

});