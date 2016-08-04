
$('#turing-link').on('click', function() {
  $('.uf').css('display', 'none');
  $('.celta').css('display', 'none');
  $('.turing').css('display', 'flex');
})

$('#uf-link').on('click', function() {
  $('.turing').css('display', 'none');
  $('.celta').css('display', 'none');
  $('.uf').css('display', 'flex');
})

$('#celta-link').on('click', function() {
  $('.uf').css('display', 'none');
  $('.turing').css('display', 'none');
  $('.celta').css('display', 'flex');
})

$('#trawn-link').on('click', function() {
  $('.uf').css('display', 'none');
  $('.turing').css('display', 'none');
  $('.celta').css('display', 'none');
  $('.trawn').css('display', 'flex');
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
