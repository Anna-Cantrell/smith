function menuOpen(){$("#form-holder").addClass("form-open"),$("#form-holder").addClass("form-open"),$("#menuCircle").addClass("toggle-circle-active"),$("#line1").addClass("toggle-line1-active"),$("#line2").addClass("toggle-line2-active"),$("#line3").addClass("toggle-line3-active")}function parallaxImage(){var e=window.pageYOffset;imgSelector.style.top=imgTop-e*-.15+"px"}var clicks=0,ctaButton=document.getElementById("#cta"),toggle=document.getElementById("toggle"),square="red";"?success=true"===window.location.search&&(menuOpen(),clicks=1,$("<div class=\"success-message\">You're all set! we'll see you there.</div>").insertAfter("#actual-form")),"?success=false"===window.location.search&&(menuOpen(),clicks=1,$('<div class="fail-message">Sorry! Something went wrong, try again.</div>').insertAfter("#actual-form")),$("#cta, #ctaFooter").click(function(){menuOpen(),clicks=1}),$("#toggle").click(function(){clicks++,clicks%2!=0?menuOpen():($("#form-holder").removeClass("form-open"),$("#menuCircle").removeClass("toggle-circle-active"),$("#line1").removeClass("toggle-line1-active"),$("#line2").removeClass("toggle-line2-active"),$("#line3").removeClass("toggle-line3-active"))}),$(".selector").mouseenter(function(e){$(this).css("opacity","1")}),$(".selector").mouseleave(function(e){$(this).css("opacity",".6"),$("#info-box").html($(this).data("info"))}),$(".selector").click(function(){var e=this.id+"1";$(".info-body").removeClass("info-active"),$("."+e).addClass("info-active"),$(".selector").removeClass("room-active"),$(this).addClass("room-active")}),$("#square").click(function(){return"red"==square?($(this).addClass("bluesquare"),$(".var-color").removeClass("var-red"),$(".var-color").addClass("var-blue"),void(square="blue")):"blue"==square?($(this).removeClass("bluesquare"),$(this).addClass("greensquare"),$(".var-color").removeClass("var-blue"),$(".var-color").addClass("var-green"),void(square="green")):"green"==square?($(this).removeClass("greensquare"),$(this).addClass("yellowsquare"),$(".var-color").removeClass("var-green"),$(".var-color").addClass("var-yellow"),void(square="yellow")):"yellow"==square?($(this).removeClass("yellowsquare"),$(".var-color").removeClass("var-yellow"),$(".var-color").addClass("var-red"),void(square="red")):void 0}),window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};var imgSelector=document.getElementById("imgSelector"),imgTop=parseInt($("#imgSelector").css("top"));window.addEventListener("scroll",function(){requestAnimationFrame(parallaxImage)},!1);