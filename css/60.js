$(function(){
	
		/*-- message 弹出层 --*/
				$('.ico-close-pop').click(function() {
					$('.hjumpmessage').css("display", "none");
					return false;
				});
				$('.mlast60').click(function() {
					$('.hjumpmessage').css("display", "block");
					$(".mheader-60 ul li:last-child").css("z-index",0);
					return false;
				});
	
	
	// pc nav scrollTop
	// only demo_60 Template
	$(".gotops").hide()
	var scrollTopLast = 0;
	window.onscroll = function(e) {
	
		if (screen.width > 1024) {
			var scrollTop = e.target.scrollingElement.scrollTop;
			if (scrollTop > scrollTopLast) {
				// console.log("滑轮向下滚动");
				$("#pcnav").css("transition", "0.6s");
				$(".hbotton-60").css("box-shadow", "0px 0px 27px 0px rgba(4, 0, 0, 0.13)");
				$("#pcnav").css("position", "fixed");
				$(".gotops").show()
				
			} else if (scrollTop == 0) {
				$("#pcnav").css("position", "inherit");
				$(".hbotton-60").css("box-shadow", "none");
				$(".gotops").hide()
			} 
	
			scrollTopLast = scrollTop;
		}else{
	    var scrollTop = e.target.scrollingElement.scrollTop;
	    if (scrollTop > scrollTopLast) {
	        $(".gotops").show()
	    }else if (scrollTop == 0) {
	        $(".gotops").hide()
	    }
	    scrollTopLast = scrollTop;
	}
	
	}
	
	if($(".hnav-60 ul>li").find('ul')){
	    $(".hnav-60 ul>li>ul").prev().append('<b>&nbsp;</b><i class="fa fa-angle-down"></i>');
	}
	if($(".hnav-60 ul li ul>li").find('ul')){
	    $(".hnav-60 ul li ul>li ul").prev().find('i').removeClass('fa-angle-down').addClass('fa-angle-right');
	}
	
	$(".gotops").click(function(){
		$('html ,body').animate({scrollTop: 0}, 500);
		return false
	})
	
// 	var hnav60_f = $(".hnav-60 ul li").find('ul').prev();
// 	hnav60_f.find('span').after($('<b>&nbsp;</b><i class="fa fa-angle-down"></i>'));
// 	var hnav60_t = $(".hnav-60 ul li ul li").find('ul').prev();
// 	hnav60_t.find('i').removeClass("fa-angle-down");
// 	hnav60_t.find('i').toggleClass("fa-angle-right");
// 	$(".60nav ul li").find('ul').before($('<b></b>'));
// 	$(".sbar60-nav ul li").find('ul').before($('<b></b>'));
})