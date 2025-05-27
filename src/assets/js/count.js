$(document).ready(function() {
  checkDisplay();

$(window).on('resize scroll', function() {
  checkDisplay();
});
});

function checkDisplay(){
$('.prg-count').each(function() {
    var $this = $(this);
    if ($this.isOnScreen()) {
      var countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 8000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    }
  });
}