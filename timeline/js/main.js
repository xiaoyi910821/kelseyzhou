jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 1;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);
	var height=$(window).height();

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).scroll(function(){
		//(!window.requestAnimationFrame) 
			//? 
			//setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 300);
			//: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });

			hideBlocks(timelineBlocks, offset);
			showBlocks(timelineBlocks, offset);
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top -0.04477 * height > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('bounce-in').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {

		blocks.each(function(){
			( $(this).offset().top < $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});