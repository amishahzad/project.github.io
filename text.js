


const hamberger= document.querySelector('.hamberger');
const close= document.querySelector('.close');
const mobileNav=document.querySelector('.mobile-nav');
const submit=document.querySelector('.end');



hamberger.addEventListener('click', function() {

	mobileNav.classList.add('open');
});
close.addEventListener('click', function() {

	mobileNav.classList.remove('open');
});
submit.addEventListener('click' , function(){
	alert('Your Query is successfully submitted. Wait for respond');
});

