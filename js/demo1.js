$(document).ready(function(){
	
	$('#button_id').click(function(){
		var flag_text = $('#section_img_id').css('display');
		
		if(flag_text == 'block'){
			$('#section_img_id').hide();
			$('#button_id').val('显示');
		}else{
			$('#section_img_id').show();
			$('#button_id').val('隐藏');
		}
		
	})
})