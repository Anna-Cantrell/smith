/*
 * Custom Scripts
 *
 * This document contains all of the custom scripts for website. This is written
 * using jQuery to simplify code complexity.
 */
var clicks = 0;
const mobileNav = document.getElementById('mobile-nav-menu');
const navButton = document.getElementById('mobile-nav-button');
const ham1 = document.getElementById('ham1');
const ham2 = document.getElementById('ham2');
const ham3 = document.getElementById('ham3');

function menuOpen() {
    $('#mobile-nav-menu').addClass('form-open');
    $('#ham1').addClass('ham1');
    $('#ham2').addClass('ham2');
    $('#ham3').addClass('ham3');
}

$('#mobile-nav-button').click(function() {
    clicks ++;
    if (clicks % 2 != 0 ) {
        menuOpen();
    } else {
        $('#mobile-nav-menu').removeClass('form-open');
        $('#ham1').removeClass('ham1');
        $('#ham2').removeClass('ham2');
        $('#ham3').removeClass('ham3');
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
