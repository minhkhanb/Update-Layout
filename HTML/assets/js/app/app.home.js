App.home = {
	init : function () {
        App.home.animation();
	},
	
	animation : function () {

		$('.score-login .bt-link').click(function(){
			var aaa = $(this);
			if(aaa.hasClass('log-in')){
				$('.bt-link').removeClass('active');
				$('.after-game,#sign-form').fadeOut(100);
				$('#login-form').delay(100).fadeIn(200);
				aaa.addClass('active');
			}else{
				$('.bt-link').removeClass('active');
				$('#sign-form,#login-form').fadeOut(100);
				$('.after-game').delay(100).fadeIn(200);
				aaa.addClass('active');
			}
		});

		$('.videos-close').click(function(){
			$('.popup-final-score').fadeOut(200);
		});

		$('.nav-bt').click(function(){
			if($('#menu').hasClass('open')){
				$('#menu').removeClass('open');	
				$('#menu ul').fadeOut(0);
				$('#menu').addClass('close');

			}else{
				$('#menu').addClass('open');
				$('#menu ul').delay(400).toggle(200);
				//$('#menu').delay(400).removeClass('close');
			}
		});

		var wd = $(window).width();

		$(window).resize(function(){
			wd = $(window).width();
			if (wd >= 767) {
				$('#menu').removeClass('close');
				$('#menu ul').fadeIn(0);	
			}else{
				$('#menu').addClass('close');
				$('#menu').removeClass('open');
				$('#menu ul').fadeOut(0);	
			}
		});

		$('#menu ul li a').click(function(){
			$('#menu ul li a').removeClass('active');
			$(this).addClass('active');
		});

		$('.rule-block > h3').click(function(){
			if (wd < 768) {
				$(this).next().toggle(300);
			}else{
				//Do nothing	
			}
		});

		$('.slider-block .next, .slider-block .prev').on('click', function() {
            var $this = $(this);

            
                var currentActiveMid = $('.slider-prizes').find('.active'),
                position =  $('.slider-prizes').children().index(currentActiveMid),
                unitLength = $('.slider-prizes li.group').length;
                
                if($this.hasClass('next')) {
                   if(position < unitLength -1) {
                        $('.active').removeClass('active').next().addClass('active');
                    } else {
                        $('.slider-prizes li.group').removeClass('active').first().addClass('active');
                    }
                }else {
                    if(position === 0) {
                        $('.slider-prizes li.group').removeClass('active').last().addClass('active');
                    } else {
                        $('.active').removeClass('active').prev().addClass('active');
                    }
                }
               
            
        });

	},

	signUpEmail : function (){
		$('.score-login .after-game,.score-login #login-form').fadeOut(100);
		$('.score-login #sign-form').delay(100).fadeIn(200);
	}
};