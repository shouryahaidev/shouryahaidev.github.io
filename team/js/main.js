$(document).ready(function(){

	console.log("Hello World");
	
	var open = 0;
	
	$('.dropb').click(function(){
		if(open==0){
		$('.tags').css('max-height', '110000px');
			open = 1;
		}
		else{
			$('.tags').css('max-height', '0px');
			open = 0;
		}
	});


	$(window).scroll(function(){

		i = $(window).scrollTop();

		if(i>0)
		{
			$('header').css('background','#121b24');
		}

		else if(i==0)
		{
			$('header').css('background','');
		}

	});
	
	$('.link1').click(function(){
		x = $('.home').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});

	$('.link2').click(function(){
		x = $('.about').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});

	$('.link3').click(function(){
		x = $('.whatvd').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});

	$('.link4').click(function(){
		x = $('.contact').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});
});
