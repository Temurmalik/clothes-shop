// const $ = require("jquery");
// selection contact dropdown
$('.drop-select').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.drop-menu').slideToggle(300);
});
$('.drop-select').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.drop-menu').slideUp(300);
});
$('.drop-select .drop-menu li').click(function () {
    $(this).parents('.drop-select').find('span').text($(this).text());
    $(this).parents('.drop-select').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/
// selection

function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });
