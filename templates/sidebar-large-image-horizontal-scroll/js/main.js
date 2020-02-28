$(function() {

  var slides = new Array();
  var slide_offsets = new Array();
  var i = 0;

  $('.slide-portfolio-single').each(function() {
    slides[i] = $(this);
    slide_offsets[i] = $(this).offset().top + 500;
    i++;
  });

  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();

  for(i=0; i < slides.length; i++)
    if (bottom_of_screen > slide_offsets[i])
      slides[i].children('.content').fadeIn(1000);

  $(window).scroll(function() {

    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();

    if ($(window).scrollTop() > 100)
      $('.mouse').fadeOut(500);
    else
      $('.mouse').fadeIn(500);

    for(i=0; i < slides.length; i++)
      if (bottom_of_screen > slide_offsets[i])
        slides[i].children('.content').fadeIn(1000);

  });

  $('.hamburger-menu a').click(function() {
    $('.header-center').slideToggle(200);
  });

  $('.slide-portfolio-single').on('mousemove', function(e) {
    $thisElement = $(this);
    $(this).css('background-position', -e.offsetX*(0.05) + "px " + -e.offsetY*(0.05) + "px");
  });

  $('.content').on('mousemove', function(e) {
    e.stopPropagation();
  });

});