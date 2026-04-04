$(function () {
    function regexp_http(data,rue){
    	var u = navigator.userAgent;
    	var not_iPhone = "?x-oss-process=style/webp"
        if (u.indexOf('iPhone') > -1) {//苹果dao手机
            console.log("iPhone");
            not_iPhone = "";
        }
        var regexp = /((http|https):\/\/([\w\-]+\.)+[\w\-]+)/ig;
        var u_GET = data.split("?");
        var url = u_GET[0];
        var thisurl = url.match(regexp);
        var data_not_iPhone = url+not_iPhone;
        if(rue){
            var regexp1 = /((http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/ig;
            var thisurl1 = url.match(regexp1);
            data_not_iPhone = "background-image:url("+thisurl1+not_iPhone+")";
        }
        if(thisurl){
            if(thisurl[0] == "http://www.estoolcarbide.com" || thisurl[0] == "<%=webroot%>"){
                return data_not_iPhone;
            }
        }
        return data;
    }
    
    /*懒加载 data-now为true 页面加载完加载，其他滚动加载*/
	$("img").each(function(){
	    if($(this).data("now") && !$(this).data("width")  && $(this).data("src") != undefined && $(this).data("src") != "undefined" && $(this).data("src") != $(this).attr("src") && $(this).data("src") !== ''){
	        
            $(this).attr("src",regexp_http($(this).data("src"))).attr("data-src","undefined")
	        
	    }
	})
	//特定部位（如头尾）懒加载
	$(".lazy_loading").each(function(){
	    if($(this).data("now") && !$(this).data("width") && $(this).data("src") != undefined && $(this).data("src") != "undefined" && $(this).data("src") != $(this).attr("src") && $(this).data("src") !== ''){
	        
	        $(this).attr("style",regexp_http($(this).data("style"),true)).attr("data-style","undefined")
	    }
	})
	
	if(window.innerWidth<769) {
        $(".small_banner img").each(function(){
	        
	        if($(this).data("src") != undefined && $(this).data("src") != "undefined" && $(this).data("src") != $(this).attr("src") && $(this).data("src") !== ''){
                $(this).attr("src",regexp_http($(this).data("src")))
            }
        })
        $(".small_logo").each(function(){
            if($(this).data("src") != undefined && $(this).data("src") != "undefined" && $(this).data("src") != $(this).attr("src") && $(this).data("src") !== ''){
                $(this).attr("src",regexp_http($(this).data("src"))).attr("data-src","undefined")
            }
        })
    } else {
        $(".big_banner img").each(function(){
	        if($(this).data("src") != undefined && $(this).data("src") != "undefined" && $(this).data("src") != $(this).attr("src") && $(this).data("src") !== ''){
                $(this).attr("src",regexp_http($(this).data("src")))
            }
        })
        
        $(".big_logo").each(function(){
            if($(this).data("src") != undefined && $(this).data("src") != "undefined" && $(this).data("src") != $(this).attr("src") && $(this).data("src") !== ''){
                $(this).attr("src",regexp_http($(this).data("src"))).attr("data-src","undefined")
            }
        })
    }
	
	$(window).scroll(function() {
    	$("img").each(function(){
    	    var oT = $(this).offset().top;
            var sT = $(window).scrollTop();
            var cH = $(window).height();
            if (sT + cH >= oT  && $(this).data("src") != undefined && $(this).data("src") != "undefined" && $(this).data("src") != $(this).attr("src") && !$(this).data("width")) {
    	        $(this).attr("src",regexp_http($(this).data("src"))).attr("data-src","undefined")
            }
    	}) 
    	
    	$(".lazy_loading").each(function(){
    	    var oT = $(this).offset().top;
            var sT = $(window).scrollTop();
            var cH = $(window).height();
            if (sT + cH >= oT && $(this).data("style") != undefined && $(this).data("style") != $(this).attr("style") && !$(this).data("width") && $(this).data("src") !== '') {
                
    	        $(this).attr("style",regexp_http($(this).data("style"),true)).attr("data-style","undefined")
            }
    	})
	})
	
})

//自动静态生成 end

//替换webp格式图片
// var metaList = document.getElementsByTagName("meta");
// for (var i = 0; i < metaList.length; i++) {
//   if (metaList[i].getAttribute("property") == "og:image") {
//     metaList[i].content = metaList[i].content.replace("?x-oss-process=style/webp","");
//   }
// }