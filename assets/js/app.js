"use strick"

$(function(){
	$('.show-order-form').on('click', function() {
		$('.modal').css('display', 'flex');
	});
	
	$('.close__btn').on('click', function() {
		$('.modal').css('display', 'none');
	});
});
