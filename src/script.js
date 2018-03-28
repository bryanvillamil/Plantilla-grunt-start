$(document).ready(function(){

	 $("#myform2").submit(function () { 
	 	var caja = $(this).find('.campo input');
	 	$(caja).each(function(index, el) {

		    if($(el).val().length < 1) {
		        $(this).closest('.campo').find(".error").show();  
		        $(this).addClass('open');
		    }else {
		    	$(this).closest('.campo').find(".error").hide(); 
		    	$(this).removeClass('open');
		    }
	 	});
	 	return false;
	});  
	  
});
	