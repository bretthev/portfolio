$('#bio').mouseenter(function() {
  $('.magic-box').text('Click to learn more about me.')
});

$('#bio').mouseleave(resetMagicBoxText)

$('#projects').mouseenter(function() {
  $('.magic-box').text("Click to see some of the things I've made.")
})

$('#projects').mouseleave(resetMagicBoxText);

$('#education').mouseenter(function() {
  $('.magic-box').text("Click to see where I've learned stuff.")
})

$('#education').mouseleave(resetMagicBoxText);

$('a').mouseenter(function() {
  $('.small-square').css('transition', 'transform 10s')
  $('.small-square').css('transform', 'rotate(1080deg)');
})

$('a').mouseleave(function() {
  $('.big-square').css('transition', 'transform 10s')
  $('.big-square').css('transform', 'rotate(1080deg)');
  $('.small-square').css('transition', 'transform 10s')
  $('.small-square').css('transform', 'rotate(-1080deg)');
})




function resetMagicBoxText(){
  $('.magic-box').text("Welcome to Brett Hevia's portfolio.");
};

// $(this).css({'-webkit-transform' : 'rotate('+ rotation +'deg)',
//                  '-moz-transform' : 'rotate('+ rotation +'deg)',
//                  '-ms-transform' : 'rotate('+ rotation +'deg)',
//                  'transform' : 'rotate('+ rotation +'deg)'});
// });
