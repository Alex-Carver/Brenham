$('.carousel').carousel({
  interval: 6000
})

$(function() {
  $('.inactiveUntilOnLoad').removeClass('inactiveUntilOnLoad');
});



$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('#nav_bar').addClass('fixed-top');
    }
    if ($(window).scrollTop() > 100) {
      $('#nav_bar').removeClass('fixed-bottom');
    }
     if ($(window).scrollTop() < 100) {
      $('#nav_bar').removeClass('fixed-top');
    }
      if ($(window).scrollTop() < 100) {
      $('#nav_bar').addClass('fixed-bottom');
    }
  });
});

$(function() {
  $('button.navbar-toggler').click(function() {
    var value = $('body').css('padding-top');
    if (value === '0px') {
      $('body').css('padding-top', '+=320');
    } else {
      $('body').css('padding-top', '0');
    }
  });
});
