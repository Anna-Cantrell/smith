function menuOpen(){$("#mobile-nav-menu").addClass("form-open"),$("#ham1").addClass("ham1"),$("#ham2").addClass("ham2"),$("#ham3").addClass("ham3")}function parallaxImage(){var e=window.pageYOffset;imgSelector.style.top=imgTop-e*-.15+"px"}var clicks=0;const mobileNav=document.getElementById("mobile-nav-menu"),navButton=document.getElementById("mobile-nav-button"),ham1=document.getElementById("ham1"),ham2=document.getElementById("ham2"),ham3=document.getElementById("ham3");$("#mobile-nav-button").click(function(){clicks++,clicks%2!=0?menuOpen():($("#mobile-nav-menu").removeClass("form-open"),$("#ham1").removeClass("ham1"),$("#ham2").removeClass("ham2"),$("#ham3").removeClass("ham3"))}),$(".selector").mouseenter(function(e){$(this).css("opacity","1")}),$(".selector").mouseleave(function(e){$(this).css("opacity",".6"),$("#info-box").html($(this).data("info"))}),$(".selector").click(function(){var e=this.id+"1";$(".info-body").removeClass("info-active"),$("."+e).addClass("info-active"),$(".selector").removeClass("room-active"),$(this).addClass("room-active")}),$("#square").click(function(){return"red"==square?($(this).addClass("bluesquare"),$(".var-color").removeClass("var-red"),$(".var-color").addClass("var-blue"),void(square="blue")):"blue"==square?($(this).removeClass("bluesquare"),$(this).addClass("greensquare"),$(".var-color").removeClass("var-blue"),$(".var-color").addClass("var-green"),void(square="green")):"green"==square?($(this).removeClass("greensquare"),$(this).addClass("yellowsquare"),$(".var-color").removeClass("var-green"),$(".var-color").addClass("var-yellow"),void(square="yellow")):"yellow"==square?($(this).removeClass("yellowsquare"),$(".var-color").removeClass("var-yellow"),$(".var-color").addClass("var-red"),void(square="red")):void 0}),window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};var imgSelector=document.getElementById("imgSelector"),imgTop=parseInt($("#imgSelector").css("top"));window.addEventListener("scroll",function(){requestAnimationFrame(parallaxImage)},!1);