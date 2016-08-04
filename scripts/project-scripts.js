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

$('#trawn-link').on('click', function() {
  $('.linked-list').css('display', 'none');
  $('.idea-box').css('display', 'none');
  $('.number-guesser').css('display', 'none');
  $('.trawn').css('display', 'flex');
})

$('#idea-box-link').on('click', function() {
  $('.trawn').css('display', 'none');
  $('.linked-list').css('display', 'none');
  $('.number-guesser').css('display', 'none');
  $('.idea-box').css('display', 'flex');
});

$('#linkedlist-link').on('click', function() {
  $('.idea-box').css('display', 'none');
  $('.trawn').css('display', 'none');
  $('.number-guesser').css('display', 'none');
  $('.linked-list').css('display', 'flex');
});

$('#numberguesser-link').on('click', function() {
  $('.idea-box').css('display', 'none');
  $('.trawn').css('display', 'none');
  $('.linked-list').css('display', 'none');
  $('.number-guesser').css('display', 'flex');
});
