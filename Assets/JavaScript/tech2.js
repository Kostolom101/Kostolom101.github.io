jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight1();
    }, 3000);
  });
  
  var slideCount1 = $('#slider1 ul1 li1').length;
  var slideWidth1 = $('#slider1 ul1 li1').width();
  var slideHeight1 = $('#slider1 ul1 li1').height();
  var sliderUlWidth1 = slideCount1 * slideWidth1;
  
  $('#slider1').css({ width: slideWidth1, height: slideHeight1 });
  
  $('#slider1 ul1').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
  
    $('#slider1 ul1 li:last-child').prependTo('#slider1 ul1');

    function moveLeft1() {
        $('#slider1 ul1').animate({
            left: + slideWidth1
        }, 200, function () {
            $('#slider1 ul1 li1:last-child').prependTo('#slider1 ul1');
            $('#slider1 ul1').css('left', '');
        });
    };

    function moveRight1() {
        $('#slider1 ul1').animate({
            left: - slideWidth1
        }, 200, function () {
            $('#slider1 ul1 li1:first-child').appendTo('#slider1 ul1');
            $('#slider1 ul1').css('left', '');
        });
    };

    $('a1.control_prev1').click(function () {
        moveLeft1();
    });

    $('a1.control_next1').click(function () {
        moveRight1();
    });

});