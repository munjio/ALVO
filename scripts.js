// JavaScript Document
$(document).ready(function(e) {
	$('#languagechange').change(function(e) {
        if($(this).val() == "1"){
			window.location.href = "../en/index.html";
		}else if($(this).val() == "2"){
			window.location.href = "../fr/index.html";
		}else if($(this).val() == "3"){
			window.location.href = "../es/index.html";
		}
    });
});

