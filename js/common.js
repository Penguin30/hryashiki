$(function() {
	var $btn_close = $('.modal.fade .close');
	var $modal_footer_close = $('.modal.fade .modal-footer .btn.btn-secondary');
	var $modal_overlay = $('.modal_overlay');
	console.log($modal_overlay);
	$('.user_table__wrapper .user_buttons .btn.btn-primary').click(function() {
		$modal_overlay.fadeIn().animate({
			opacity: 0.5
		}, 400, function() {
			$('.modal.fade').fadeIn().animate({
				opacity: 1
			}, 50);
		});
		$btn_close.click(function() {
			$('.modal.fade').fadeOut().animate({
				opacity: 0
			}, 100, function() {
				$modal_overlay.fadeOut().animate({
					opacity: 0
				}, 100);
			});
		});
		$modal_footer_close.click(function() {
			$('.modal.fade').fadeOut().animate({
				opacity: 0
			}, 100, function() {
				$modal_overlay.fadeOut().animate({
					opacity: 0
				}, 100);
			});
		});
			
	});
});
