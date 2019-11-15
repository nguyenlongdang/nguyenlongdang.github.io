$(function() {
	$('.navbar-toggler.hidden-sm-up').click(function(event) {
		/* Act on the event */
		$('#header .collapse.navbar-toggleable-xs').addClass('hienmenu');
		$('#header .collapse.navbar-toggleable-xs').removeClass('anmenu');

	});

	$('.btn.btn-outline-danger.btn-block').click(function(event) {
		/* Act on the event */
		$('#header .collapse.navbar-toggleable-xs').addClass('anmenu');
		$('#header .collapse.navbar-toggleable-xs').removeClass('hienmenu');
		return false;
	});
});