// JavaScript Document
$(document).ready(function(e) {
	$('#languagechange').change(function(e) {
        if($(this).val() == "1"){
			window.location.href = "../index.html";
		}else if($(this).val() == "2"){
			window.location.href = "../fr/index.html";
		}else if($(this).val() == "3"){
			window.location.href = "../es/index.html";
		}
		else if($(this).val() == "4"){
			window.location.href = "../ru/index.html";
		}
    });
	
	$('.confirm_btn').click(function(e) {
        if($('.modal_language').val() == "1"){
			window.location.href = "../index.html";
		}else if($('.modal_language').val() == "2"){
			window.location.href = "../fr/index.html";
		}else if($('.modal_language').val() == "3"){
			window.location.href = "../es/index.html";
		}
		else if($('.modal_language').val() == "4"){
			window.location.href = "../ru/index.html";
		}
    });
	
	

	$('.modal_language').change(function(e) {
        if($(this).val() == "1"){
			$('.confirm_btn').html("Confirm");
		}else if($(this).val() == "2"){
			$('.confirm_btn').html("Confirmer");
		}else if($(this).val() == "3"){
			$('.confirm_btn').html("Confirmar");
		}
		else if($(this).val() == "4"){
			$('.confirm_btn').html("Подтвердить");
		}
    });
	
	function openModal($modal) {
  // Note: fixed elements will also need the margin 
  // adjustment (like a fixed header, if you have one).
  var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  $('body')
    .css('margin-right', scrollBarWidth)
    .addClass('showing-modal');
  $modal.show();
};

function closeModal($modal) {
    $('body')
      .css('margin-right', '')
      .removeClass('showing-modal');
    $modal.hide();
};
	
	var $modal = $('#myModal');

// Clicking outside the inner modal content should close it.
$modal
	.click(function () {
		closeModal($modal);
	})
  .find('.modal-content').click(function (event) {
  	event.stopPropagation();
	});
	
	$('.close').click(function () {
		closeModal($modal);
	})
	
	$('.flag').click(function(e) {
		 openModal($modal);
    });
	
	
});
