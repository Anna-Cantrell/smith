/*
 * Custom Scripts
 *
 * This document contains all of the custom scripts for website. This is written
 * using jQuery to simplify code complexity.
 */
var clicks = 0;
var ctaButton = document.getElementById('#cta');
var toggle = document.getElementById('toggle');
var square = 'red';

function menuOpen() {
    $('#form-holder').addClass('form-open');
    $('#form-holder').addClass('form-open');
    $('#menuCircle').addClass('toggle-circle-active');
    $('#line1').addClass('toggle-line1-active');
    $('#line2').addClass('toggle-line2-active');
    $('#line3').addClass('toggle-line3-active');
}

if (window.location.search === "?success=true") {
    menuOpen();
    clicks = 1;
    $('<div class="success-message">You\'re all set! we\'ll see you there.</div>').insertAfter('#actual-form')
}
if (window.location.search === "?success=false") {
    menuOpen();
    clicks = 1;
    $('<div class="fail-message">Sorry! Something went wrong, try again.</div>').insertAfter('#actual-form')
}

$('#cta, #ctaFooter').click(function() {
    menuOpen();
    clicks = 1;
});
$('#toggle').click(function() {
    clicks ++;
    if (clicks % 2 != 0 ) {
        menuOpen();
    } else {
        $('#form-holder').removeClass('form-open');
        $('#menuCircle').removeClass('toggle-circle-active');
        $('#line1').removeClass('toggle-line1-active');
        $('#line2').removeClass('toggle-line2-active');
        $('#line3').removeClass('toggle-line3-active');
    }
});


$(".selector").mouseenter(function(e) {
  $(this).css('opacity','1');
});
$(".selector").mouseleave(function(e) {
  $(this).css('opacity','.6');
  $('#info-box').html($(this).data('info'));
});

$(".selector").click(function() {
    var info = this.id + '1';
    $('.info-body').removeClass('info-active');
    $('.' + info).addClass('info-active');
    $(".selector").removeClass('room-active');
    $(this).addClass('room-active');
//    alert(info);
});

$('#square').click(function() {
    if( square == 'red' ) {
        $(this).addClass('bluesquare');
        $('.var-color').removeClass('var-red');
        $('.var-color').addClass('var-blue');
        square = 'blue';
        return
    } if ( square == 'blue' ) {
        $(this).removeClass('bluesquare');
        $(this).addClass('greensquare');
        $('.var-color').removeClass('var-blue');
        $('.var-color').addClass('var-green');
        square = 'green';
        return
    } if ( square == 'green' ) {
        $(this).removeClass('greensquare');
        $(this).addClass('yellowsquare');
        $('.var-color').removeClass('var-green');
        $('.var-color').addClass('var-yellow');
        square = 'yellow';
        return
    } if ( square == 'yellow' ) {
        $(this).removeClass('yellowsquare');
        $('.var-color').removeClass('var-yellow');
        $('.var-color').addClass('var-red');
        square = 'red';
        return
    }
});



window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)} //fall back method, run roughly 60 times per second
var imgSelector = document.getElementById('imgSelector');
 var imgTop = parseInt($('#imgSelector').css('top'));


        function parallaxImage() {

            var scrolltop = window.pageYOffset;
            
            imgSelector.style.top = imgTop - (scrolltop * -.15) + 'px';
        }
              
          //tell java script that if 'scroll' happens in this window, then do this function
          window.addEventListener('scroll', function() { 
              requestAnimationFrame(parallaxImage) //call our parallax function on next available screen paint
          }, false)

