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
    $('.scrollstop-wrapper').css('overflow', 'hidden')
    $('.hamburger.dark').css('background', 'white');
    $('.nav-logo.light').css('background-image', 'url("../img/smith-logo-light.png")');
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
        $('.scrollstop-wrapper').css('overflow', 'visible');
        $('.hamburger.dark').css('background', 'rgb(50,50,50)');
        $('.nav-logo.light').css('background-image', 'url("../img/smith-logo-dark.png")');

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
