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
});
