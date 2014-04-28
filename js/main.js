	$(document).ready(function(){
		var s = skrollr.init();
		//$('#container').scrollspy({ target: '.sidebar' });
	// $('#nav-wrapper').height($("#nav").height());
	$('.title-header').affix({
		offset: {
		top: 100
		}
	});

		$('div').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
	    // element is now visible in the viewport
	    if (visiblePartY == 'top') {
	      // top part of element is visible
	    } else if (visiblePartY == 'bottom') {
	      // bottom part of element is visible
	    } else {
	      // whole part of element is visible
	    }
	  } else {
	    // element has gone out of viewport
	  }
	});
	});
