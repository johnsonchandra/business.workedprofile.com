/* WP.Biz Script */

console.log('Hallo - From WP.Biz');

$(document).on('pagecontainercreate', function(event, ui) {
	// console.log('Create', event, ui);
	$(window).load(function() {
		$('.def-thumb').masonry({
			itemSelector: '.item'
		});
	});
});
$(document).on('pagecontainershow', function(event, ui) {
	// console.log('Show', event, ui);
	$('.def-thumb').masonry({
		itemSelector: '.item'
	});
	$('.rate').on('tap', '.star', function(e) {
		e.stopPropagation();
		var t = $(this), a = 'active';
		if (t.hasClass(a)) {
			t.removeClass(a)
		} else {
			t.addClass(a)
		}
	});
});
