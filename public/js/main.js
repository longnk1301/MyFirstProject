jQuery(document).ready(function($){
	//selector den image can lam viec
	var TopFixImage = $("#fix-image");
	//dung su kien cuon chuot de bat thong tin da cuon duoc chieu dai la bao nhieu
	$(window).scroll(function(){
		//neu cuon duoc hon 1000px 
		if($(this).scrollTop()>1900){
			//tien hanh show image ra
			TopFixImage.show();
		}else{
			//nguoc lai, nho hon 1000px thi hide image di
			TopFixImage.hide();
		}
		
		
	})
})