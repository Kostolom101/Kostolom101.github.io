jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight3();
    }, 3000);
  });
  
  var slideCount3 = $('#slider3 ul3 li3').length;
  var slideWidth3 = $('#slider3 ul3 li3').width();
  var slideHeight3 = $('#slider3 ul3 li3').height();
  var sliderUlWidth3 = slideCount3 * slideWidth3;
  
  $('#slider3').css({ width: slideWidth3, height: slideHeight3 });
  
  $('#slider3 ul3').css({ width: sliderUlWidth3, marginLeft: - slideWidth3 });
  
    $('#slider3 ul3 li3:last-child').prependTo('#slider3 ul3');

    function moveLeft3() {
        $('#slider3 ul3').animate({
            left: + slideWidth3
        }, 200, function () {
            $('#slider3 ul3 li3:last-child').prependTo('#slider3 ul3');
            $('#slider3 ul3').css('left', '');
        });
    };

    function moveRight3() {
        $('#slider3 ul3').animate({
            left: - slideWidth3
        }, 200, function () {
            $('#slider3 ul3 li3:first-child').appendTo('#slider3 ul3');
            $('#slider3 ul3').css('left', '');
        });
    };

    $('a3.control_prev3').click(function () {
        moveLeft3();
    });

    $('a3.control_next3').click(function () {
        moveRight3();
    });

});