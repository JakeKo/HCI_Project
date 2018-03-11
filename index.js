$(document).ready(function() {
	$(".person-card").hover(function() {
		$(this).find(".pin-toggle").show();
	}, function() {
		$(this).find(".pin-toggle").hide();
	});
});