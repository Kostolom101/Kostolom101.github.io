jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight1();
    }, 3000);
  });
  
  var slideCount1 = $('#slider2 ul2 li2').length;
  var slideWidth1 = $('#slider2 ul2 li2').width();
  var slideHeight1 = $('#slider2 ul2 li2').height();
  var sliderUlWidth1 = slideCount1 * slideWidth1;
  
  $('#slider2').css({ width: slideWidth1, height: slideHeight1 });
  
  $('#slider2 ul2').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
  
    $('#slider2 ul2 li2:last-child').prependTo('#slider2 ul2');

    function moveLeft1() {
        $('#slider2 ul2').animate({
            left: + slideWidth1
        }, 200, function () {
            $('#slider2 ul2 li2:last-child').prependTo('#slider2 ul2');
            $('#slider2 ul2').css('left', '');
        });
    };

    function moveRight1() {
        $('#slider2 ul2').animate({
            left: - slideWidth1
        }, 200, function () {
            $('#slider2 ul2 li2:first-child').appendTo('#slider2 ul2');
            $('#slider2 ul2').css('left', '');
        });
    };

    $('a2.control_prev2').click(function () {
        moveLeft1();
    });

    $('a2.control_next2').click(function () {
        moveRight1();
    });

});