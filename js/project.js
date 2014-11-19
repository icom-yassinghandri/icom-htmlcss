
$(document).ready(function(){

	$("iframe").each(function(){
		widthParent = $(this).parent.width;
		heightParent = (parseInt(widthParent) * 9) / 16;

		$(this).css("width", widthParent);
		$(this).css("height", heightParent);
 	})


});

jQuery(window).resize(function(){


 	$("iframe").each(function(){
		widthParent = $(this).parent().width();
		heightParent = (parseInt(widthParent) * 9) / 16;

		
		$(this).css("width", widthParent);
		$(this).css("height", heightParent);
 	})
	
})