$('#turing-link').on('click', function() {
  $('.uf').css('display', 'none');
  $('.celta').css('display', 'none');
  $('.turing').css('display', 'flex');
});

$('#teacher-link').on('click', function() {
  $('.hospitality').css('display', 'none');
  $('.newspaper').css('display', 'none');
  $('.teacher').css('display', 'flex');
});


$('#newspaper-link').on('click', function() {
  $('.teacher').css('display', 'none');
  $('.hospitality').css('display', 'none');
  $('.newspaper').css('display', 'flex');
});


$('#hospitality-link').on('click', function() {
  $('.teacher').css('display', 'none');
  $('.newspaper').css('display', 'none');
  $('.hospitality').css('display', 'flex');
});



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
