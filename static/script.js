// Fazer com funções:

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
        $('body').toggleClass('menu-nav-active');
	});
	// hide section#inicio
	$('section#inicio h2').css('display', 'none');
	$('section#inicio span').css('display', 'none');
});

// Abre e fecha menu no mobile

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
	menuMobile.classList.toggle('open');
    body.classList.toggle('menu-nav-active');
	// hide section#inicio
	$('section#inicio h2').css('display', 'none');
	$('section#inicio span').css('display', 'none');
});
