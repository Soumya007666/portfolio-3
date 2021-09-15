// Navbar color change on scroll
$(window).scroll(function(){
$('nav').toggleClass('scrolled', $(this).scrollTop() > 100)
});

// Navbar Link Color Change on Scroll
$(window).scroll(function(){
if($(this).scrollTop() > 100) {
	$('.change').addClass('linkcolor');
}
else {
	$('.change').removeClass('linkcolor')
}
});

// Active links
$(".navbar-nav .nav-item .nav-link").click(function(){
$(".nav-item .nav-link").removeClass("active");
$(this).addClass("active");
});