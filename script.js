// Mobile menu functionality
$('.menu_icon').click(function(e) {
  e.preventDefault();
  $('.navbar').addClass('show');
  $('.close-btn').addClass('show');
  $('.menu_icon').hide();
  $('body').addClass('no-scroll');
});

// Close menu functionality
$(document).on('click', '.close-btn', function(e) {
  e.preventDefault();
  $('.navbar').removeClass('show');
  $('.close-btn').removeClass('show');
  $('.menu_icon').show();
  $('body').removeClass('no-scroll');
});

// Close menu when clicking on links (mobile only)
$('.navbar li a').click(function() {
  if ($(window).width() < 768) {
    $('.navbar').removeClass('show');
    $('.close-btn').removeClass('show');
    $('.menu_icon').show();
    $('body').removeClass('no-scroll');
  }
});