(function($) {

$(document).ready(function(){
	// 스크립트 로드 확인
	console.log("Script Load");

	$('img').attr('draggable', false);

	$('.character-body')
	.mouseover(function(){
		$('.design-2-container .view-point').css({ 
			'transform': 'translate(-8px, 0)'  
		});
		$('.design-3-container .view-point').css({ 
			'transform': 'translate(8px, 0)'  
		})
	})
	.mouseleave(function(){
		$('.design-2-container .view-point').css({ 
			'transform': 'translate(0px, 0)'  
		});
		$('.design-3-container .view-point').css({ 
			'transform': 'translate(0px, 0)'  
		})
	});

	var $mouse = $('.home .scroll-btn'),
		$video = $('.video .video_wrap'),
		$about1 = $('.about-1-container'),
		$about2 = $('.about-2-container'),
		$tiredIcon = $('.about-1 .about-1-img'),
		$about1Strong = $('.about-1-text p strong'),
		$about2Strong = $('.about-2-text p strong'),
		$aboutProjectName = $('.about-2-text p span'),
		$charts = $('.chart-wrap').find('div'),
		$designLogos = $('.design-1-img-wrap').find('div'),
		$cheeseLeft = $('.design-1-cheese-left'),
		$cheeseRight = $('.design-1-cheese-right'),
		$ratFaces = $('.design-2 .character-face li'),
		$catFaces = $('.design-3 .character-face li'),
		$design2Text = $('.design-2 .design-2-text'),
		$design2s = $('.design-2-wrap-wrapper'),
		$design3s = $('.design-3-wrap-wrapper'),
		$project2Text = $('.project-2 .project-2-text ul')
		;

	// ============ fullpage 커스텀 ============
	$('#fullpage').fullpage({
		autoScrolling:true,
		navigation: false,
		// navigationPosition: 'right',
		css3 : true,
		menu : '#menu',
		controlArrows : true,
		anchors:['home', 'video', 'about-1','about-2','design-1','design-2','design-3','project-1','project-2','team'],
		fitToSection: true,
		fitToSectionDelay: 1000,	



		//페이지 이동될 때
		onLeave: function(index, nextIndex, direction) {
			const section = nextIndex.item;
			// console.log(index, nextIndex, direction);

			// ============ 페이지 down ============
			if (index == 1 && direction == 'down') { 
				//console.log("비디오 애니메이션 작동중");
				$video.addClass('animated bounceInLeft');
				$video.fadeIn(500);
			}
			else if((index == 1 || index == 2 ) && nextIndex == 3 ) {
				// console.log("기획 1 애니메이션 작동중");
				$charts.eq(0).addClass('animated fadeInUp').css('animation-delay', '.05s'); 
				$charts.eq(1).addClass('animated fadeInUp').css('animation-delay', '.2s');
			}
			else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4 ) {
				// console.log("기획 2 애니메이션 작동중");
				$about2.fadeIn(500);
			}
			else if ((index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5 ) {
				// console.log("4페이지 애니메이션 작동중");
				$designLogos.fadeIn(500);
				$designLogos.eq(0).addClass('animated flipInX').css('animation-delay', '.1s'); 
				$designLogos.eq(1).addClass('animated flipInX').css('animation-delay', '.2s');
			}
			else if ((index == 1 || index == 2 || index == 4|| index == 5) && nextIndex == 6 ) {
				//console.log("5페이지 애니메이션 작동중");
				$ratFaces.eq(0).addClass('animated zoomInLeft');
				$ratFaces.eq(1).addClass('animated zoomInLeft').css('animation-delay', '.2s');
				$ratFaces.eq(2).addClass('animated zoomInLeft').css('animation-delay', '.4s');

				$design2s.fadeIn(800);
				$('.design-2 .design-2-text').addClass('animated bounceInDown');
			}
			
			else if ((index == 1 || index == 2 || index == 4|| index == 5|| index == 6) && nextIndex == 7 ) {
				//console.log("6페이지 애니메이션 작동중");
				$catFaces.eq(0).addClass('animated zoomInRight').css('animation-delay', '.4s');
				$catFaces.eq(1).addClass('animated zoomInRight').css('animation-delay', '.2s');
				$catFaces.eq(2).addClass('animated zoomInRight');

				$design3s.fadeIn(800);	
				$('.design-3 .design-3-text').addClass('animated bounceInDown');

			}
			
			else if ((index == 1 || index == 2 || index == 4|| index == 5|| index == 6|| index == 7) && nextIndex == 8 ) {
				//console.log("7페이지 애니메이션 작동중");
	
			}
			
			else if ((index == 1 || index == 2 || index == 4|| index == 5|| index == 6|| index == 7|| index == 8) && nextIndex == 9 ) {
				//console.log("8페이지 애니메이션 작동중");
				$project2Text.fadeIn(800);
				$project2Text.addClass('animated fadeInUp');

			}
			
			else if ((index == 1 || index == 2 || index == 4|| index == 5|| index == 6|| index == 7|| index == 8|| index == 9) && nextIndex == 10 ) {
				//console.log("9페이지 애니메이션 작동중");
	
			}

			// ============ 페이지 up ============
			if (index == 2 && direction == 'up' ) {
				//console.log("1페이지 애니메이션 up");
				$video.fadeOut(300);			
			}
			else if (index == 3 && direction == 'up' ) {
				//console.log("2페이지 애니메이션 up");
				$about1.fadeOut(300);
				$tiredIcon.fadeOut(300);
			}
		
			else if (index == 4 && direction == 'up') {
				// console.log("4페이지 애니메이션 up");
				$about2.fadeOut(300);
				
			}else if (index == 5 && direction == 'up') {
				// console.log("5페이지 애니메이션 up");
				$designLogos.fadeOut(300);
				
			}else if (index == 6 && direction == 'up') {
				// console.log("6페이지 애니메이션 up");
				$design2s.fadeOut(300);
				
			}else if ((index == 1 || index == 2 || index == 4|| index == 5|| index == 6|| index == 7) && direction == 'up') {
				//console.log("7페이지 애니메이션 up");
				$design3s.fadeOut(300);
				
			}else if ((index == 1 || index == 2 || index == 4|| index == 5|| index == 6|| index == 7 || index == 8) && direction == 'up') {
				// console.log("8페이지 애니메이션 up");
				
			}else if ((index == 1 || index == 2 || index == 4|| index == 5|| index == 6|| index == 7|| index == 8|| index == 9) && direction == 'up') {
				// console.log("9페이지 애니메이션 up");
				$project2Text.fadeOut(300);

			}else if (index == 10 && direction == 'up') {
				// console.log("10 페이지 애니메이션 up");
				
			}
			
			},

		// 페이지 로드 완료
		afterLoad: function(anchorLink, index){
            if (index == 1){
				//console.log("index 페이지 로드 완료");
			} 
			else if (index == 2 ) {
				// console.log("기획 1 페이지 로드 완료");
				$tiredIcon.addClass('animated bounceInRight');
				$tiredIcon.fadeIn(500);
				$about1.fadeIn(500);

			}
			else if (index == 3 ) {
				//console.log("3페이지 로드 완료");
				$about1Strong.eq(0).css({
					'background-size': '100% 100%'
				});
				$about1Strong.eq(1).css({
					'background-size': '100% 100%',
					'transition-delay': '0.2s'
				});
				
			}
			else if (index == 4 ) {
				//console.log("4페이지 로드 완료");
				$about2.fadeIn(100);
				$aboutProjectName.css({
					'background-size': '100% 100%',
					'transition-delay': '0.2s'
				});
				$about2Strong.eq(0).css({
					'background-size': '100% 100%',
					'transition-delay': '0.2s'
				});
				$about2Strong.eq(1).css({
					'background-size': '100% 100%',
					'transition-delay': '0.4s'
				});
			}
			else if (index == 5 ) {
				//console.log("5페이지 로드 완료");
				$designLogos.fadeIn(300);
				$cheeseRight.on('click', function(){
					$(this).css({
						'animation-delay': '.1s'
					}).removeClass('cheese-up').addClass('cheese-down');
					$cheeseLeft.removeClass('cheese-down').addClass('cheese-up');
				});

				$cheeseLeft.on('click', function(){
					$(this).css({
						'animation-delay': '.1s'
					}).removeClass('cheese-up').addClass('cheese-down');
					$cheeseRight.removeClass('cheese-down').addClass('cheese-up');
				});
			}
			else if (index == 6 ) {
				//console.log("6페이지 로드 완료");
				$design2s.fadeIn(100);	
			}
			else if (index == 7 ) {
				//console.log("7페이지 로드 완료");
				$design3s.fadeIn(100);	
			}
			else if (index == 8 ) {
				//console.log("8페이지 로드 완료");
			}
			else if (index == 9 ) {
				//console.log("9페이지 로드 완료");
				$project2Text.fadeIn(300);
			}
			
			else if (index == 10 ) {
				//console.log("10 페이지 로드 완료");
			}
			

        }   


		});

function controls() {
	$(this).siblings('div .button');
	$('.slideDiv').animate({
		top: -$('.container').height() * $(this).index()
	}, 100);
	}
	
	const runCode = () => {
	const button = document.querySelectorAll('.button');
	if ( button ) {
		for ( var i = 0; i < button.length; i++ ) {
		button[i].addEventListener('mouseover', controls, false);
		}
		}
	}
	runCode();				
});

})(jQuery);

