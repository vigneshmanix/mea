jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	//portfolio
	$(window).load(function(){
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
        var formData= {
            'name'              : $('input[name=firstname]').val()+" "+$('input[name=lastname]').val(),
            'email'             : $('input[name=email]').val(),
            'message'             : $('textarea[name=message]').val()
        }
        
		$this = $(this);
		$.post($(this).attr('action'),formData, function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
            $("input, textarea").val("");
            if (data.type=="error"){
                $this.prev().addClass("alert-danger");
                $this.prev().removeClass("alert-success");
            }else{
                 $this.prev().addClass("alert-success");
                $this.prev().removeClass("alert-danger");
            }
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});