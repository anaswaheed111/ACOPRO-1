// foot carousel end

/*********banner start******************/
if ($('.module_banner .swiper-wrapper .swiper-slide').length < 2) {
    $('.module_banner .swiper-pagination').hide()
}

// 移动端banner没有上传图片时显示pc端banner

if (window.innerWidth <= 768 &&  ($('.module_banner.small_banner img').length<=0)) {
	$('.module_banner.small_banner').attr('style', 'display:none!important;')
	$('.module_banner.big_banner').attr('style', 'display:block!important;')
}


var mySwiper = new Swiper('.module_banner', {
    // effect: 'fade',
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3500,
    },
    pagination: {
        el: '.module_banner .swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.module_banner .swiper-button-next',
        prevEl: '.module_banner .swiper-button-prev',
    }
});



/******banner end******************/

//  首页banner
        var indexbanner = new Swiper('.banner01',{
            pagination: {
             el: '.swiper-pagination',
             clickable :true,
                },
            navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
    		lazyLoading : true,
    // 		speed:3000,
    // 		autoplay: true,
    autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    
    
    },
        });
        var indexbanner2 = new Swiper('.banner02',{
             pagination: {
             el: '.swiper-pagination',
             clickable :true,
                },
            navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
            slidesPerView: 1,
            paginationClickable: true,
            loop: true,
    		lazyLoading : true,
    // 		speed:3000,
    // 		autoplay: true,
    autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
        });


// language start

$(function () {
    $(".change-language").mouseover(function() {
	$(".change-language-cont").css("display", "block");
	var lochost = window.location.host;
	if ($(".prisna-wp-translate-seo li").length == 0) {
		$.ajax({
			type: "get",
			url: "/wp-content/themes/demo-461/cl/css/pc_language.txt",
			dataType: "text",
			success: function(data) {
				if ($(".prisna-wp-translate-seo li").length < 234) {
					$(".prisna-wp-translate-seo").append(data);
					 changeuRL($('.no_translate .language-flag>a'));
				}
			},
			error: function(e) {
				console.log(e)
			}
		})
	}
});


//					鼠标移入加载

$(".change-language").mouseout(function() {
	$(".change-language-cont").css("display", "none");
});
//					鼠标移入加载
// app

    $("#language").mouseover(function() {
	$(".mheader-51 ul li:hover .mheader-51-language").css("display", "block");
				$(".change-language-cont").css("display", "block");
				$(".mheader-51 ul li:hover .mheader-51-divs").css("left", "0");
	var lochost = window.location.host;
	if ($(".prisna-wp-translate-seo li").length == 0) {
		$.ajax({
			type: "get",
			url: "/wp-content/themes/demo-461/cl/css/pc_language.txt",
			dataType: "text",
			success: function(data) {
				if ($(".prisna-wp-translate-seo li").length < 234) {
					$(".prisna-wp-translate-seo").append(data);
					 changeuRL($('.no_translate .language-flag>a'));
				}
			},
			error: function(e) {
				console.log(e)
			}
		})
	}
});

$(".mheader-51 ul li .mheader-51-language").click(function() {
	$(".mheader-51 ul li .mheader-51-language").css("display", "block");
	$(".mheader-51 ul li .mheader-51-divs").css("left", "-70%");
})

// 小语种路径

    var hrefArr = ['/af/','/sq/','/am/','/ar/','/hy/','/az/','/eu/','/ba/','/be/','/bn/','/bs/','/bg/','/my/','/ca/','/yue/','/ceb/','/ny/','/zh/','/zh-tw/','/co/','/hr/','/cs/','/da/','/nl/','/eo/','/et/','/fj/','/fil/','/fi/','/fr/','/fy/','/gl/','/ka/','/de/','/el/','/gu/','/ht/','/ha/','/haw/','/hmn/','/mw/','/he/','/mrj/','/hi/','/hu/','/is/','/ig/','/id/','/ga/','/it/','/ja/','/jw/','/kn/','/kk/','/km/','/ky/','/ko/','/ku/','/lo/','/la/','/lv/','/lt/','/lb/','/mk/','/mg/','/ms/','/ml/','/mt/','/mi/','/mr/','/mhr/','/mn/','/ne/','/no/','/otq/','/pap/','/fa/','/pl/','/pt/','/pa/','/ro/','/ru/','/sm/','/gd/','/sr/','/st/','/sn/','/sd/','/si/','/sk/','/sl/','/so/','/es/','/su/','/sw/','/sv/','/tl/','/ty/','/tg/','/ta/','/tt/','/te/','/th/','/to/','/tr/','/udm/','/uk/','/ur/','/uz/','/vi/','/cy/','/xh/','/yi/','/yo/','/yua/','/zu/']
    
    function changeuRL(link) {
        link.each(function (i, item) {
            var myhref = $(this).attr('href').substring()
            var pathn = window.location.pathname
            
            hrefArr.forEach(function (item, i) {
                if (new RegExp(item, 'g').test(pathn)) {
                    pathn = pathn.replace(new RegExp(item, 'g'), "/")
                }
            })
            if (i > 0) {
                var arr = $(this).attr('href').split('/')
                $(this).attr('href', '/' + arr[1] + pathn)
            } else {
                $(this).attr('href',  pathn)
            }
        })
    }
    changeuRL($('.no_translate .language-flag>a'));
    
})

function replace_url(clas){
    var language_array  = ["af","sq","am","ar","hy","az","eu","ba","be","bn","bs","bg","my","ca","yue","ceb","ny","zh","zh-tw","co","hr","cs","da","nl","eo","et","fj","fil","fi","fr","fy","gl","ka","de","el","gu","ht","ha","haw","hmn","mw","he","mrj","hi","hu","is","ig","id","ga","it","ja","jw","kn","kk","km","ky","ko","ku","lo","la","lv","lt","lb","mk","mg","ms","ml","mt","mi","mr","mhr","mn","ne","no","otq","pap","fa","pl","pt","pa","ro","ru","sm","gd","sr","st","sn","sd","si","sk","sl","so","es","su","sw","sv","tl","ty","tg","ta","tt","te","th","to","tr","udm","uk","ur","uz","vi","cy","xh","yi","yo","yua","zu"];
    var http = window.location.protocol;   //获取协议
	var url = window.location.hostname;    //获取网站域名
	$(''+clas+' .no_translate .language-flag>a').each(function(){
	    var href = $(this).attr('href');   //获取自身链接
	    var suffix = href.split('/');      //分解语言后缀
	    var caseOne = url.split('.');      //域名转换成数组
	    if(href == '/' || href == '/en/'){
	        caseOne[0] = caseOne[0].replace(caseOne[0],'www');
	        $(this).attr('href',http+"//"+caseOne.join("."));
	    }else if(language_array.includes(suffix[1])){
	        caseOne[0] = caseOne[0].replace(caseOne[0],suffix[1]);
	        var _caseOne = caseOne.join(".");
	        var _href = http+"//"+_caseOne+href;
	        $(this).attr('href',_href);
	    }else{
	        if(language_array.includes(suffix[1])){
    	        caseOne[0] = caseOne[0].replace(caseOne[0],suffix[1]);
    	        var _caseOne = caseOne.join(".");
    	        var _href = http+"//"+_caseOne+href;
    	        $(this).attr('href',_href);
    	    }else{
    	        caseOne[0] = caseOne[0].replace(caseOne[0],'www');
	            $(this).attr('href',http+"//"+caseOne.join(".")+href);
    	    }
	    }
	})
}

// 国旗点击更换
$(document).ready(function(){var array_a=["/af/","/sq/","/am/","/ar/","/hy/","/az/","/eu/","/ba/","/be/","/bn/","/bs/","/bg/","/my/","/ca/","/yue/","/ceb/","/ny/","/zh/","/zh-tw/","/co/","/hr/","/cs/","/da/","/nl/","/eo/","/et/","/fj/","/fil/","/fi/","/fr/","/fy/","/gl/","/ka/","/de/","/el/","/gu/","/ht/","/ha/","/haw/","/hmn/","/mw/","/he/","/mrj/","/hi/","/hu/","/is/","/ig/","/id/","/ga/","/it/","/ja/","/jw/","/kn/","/kk/","/km/","/ky/","/ko/","/ku/","/lo/","/la/","/lv/","/lt/","/lb/","/mk/","/mg/","/ms/","/ml/","/mt/","/mi/","/mr/","/mhr/","/mn/","/ne/","/no/","/otq/","/pap/","/fa/","/pl/","/pt/","/pa/","/ro/","/ru/","/sm/","/gd/","/sr/","/st/","/sn/","/sd/","/si/","/sk/","/sl/","/so/","/es/","/su/","/sw/","/sv/","/tl/","/ty/","/tg/","/ta/","/tt/","/te/","/th/","/to/","/tr/","/udm/","/uk/","/ur/","/uz/","/vi/","/cy/","/xh/","/yi/","/yo/","/yua/","/zu/"];var array_b=["language-flag-za","language-flag-al","language-flag-et","language-flag-sa","language-flag-am","language-flag-az","language-flag-es-ba","language-flag-ru-ba","language-flag-by","language-flag-bd","language-flag-ba","language-flag-bg","language-flag-mm","language-flag-es-ca","language-flag-hk","language-flag-ph","language-flag-mw","language-flag-cn","language-flag-tw","language-flag-fr","language-flag-hr","language-flag-cz","language-flag-dk","language-flag-nl","language-flag-esperanto","language-flag-ee","language-flag-fj","language-flag-ph","language-flag-fi","language-flag-fr","language-flag-nl","language-flag-es-ga","language-flag-ge","language-flag-de","language-flag-gr","language-flag-in","language-flag-ht","language-flag-ng","language-flag-us-ha","language-flag-la","language-flag-la","language-flag-il","language-flag-ru","language-flag-in","language-flag-hu","language-flag-is","language-flag-ng","language-flag-id","language-flag-ie","language-flag-it","language-flag-jp","language-flag-id","language-flag-in","language-flag-kz","language-flag-kh","language-flag-kg","language-flag-kr","language-flag-tr","language-flag-la","language-flag-va","language-flag-lv","language-flag-lt","language-flag-lu","language-flag-mk","language-flag-mg","language-flag-my","language-flag-in","language-flag-mt","language-flag-nz","language-flag-in","language-flag-ru","language-flag-mn","language-flag-np","language-flag-no","language-flag-mx","language-flag-aw","language-flag-ir","language-flag-pl","language-flag-pt","language-flag-pk","language-flag-ro","language-flag-ru","language-flag-ws","language-flag-gb-sc","language-flag-rs","language-flag-ls","language-flag-zw","language-flag-pk","language-flag-lk","language-flag-sk","language-flag-si","language-flag-so","language-flag-es","language-flag-id","language-flag-tz","language-flag-se","language-flag-ph","language-flag-pf","language-flag-tj","language-flag-in","language-flag-ru-ta","language-flag-in","language-flag-th","language-flag-to","language-flag-tr","language-flag-ru","language-flag-ua","language-flag-pk","language-flag-uz","language-flag-vn","language-flag-gb-wa","language-flag-za","language-flag-europeanunion","language-flag-ng","language-flag-mx","language-flag-za"];var array_c=["Afrikaans","Shqip","አማርኛ","العربية","Հայերեն","azərbaycan dili","Euskara","башҡорт теле","Беларуская","বাংলা","bosanski jezik","Български","မြန်မာစာ","Català","粤语","Binisaya","Chinyanja","中文(简体)","中文(漢字)","Corsu","Hrvatski","Čeština","Dansk","Nederlands","Esperanto","Eesti keel","vosa Vakaviti","Wikang Filipino","Suomi","Français","Frysk","Galego","ქართული","Deutsch","Ελληνικά","ગુજરાતી","Kreyòl ayisyen","Harshen Hausa","ʻŌlelo Hawaiʻi","Hmoob","Hmoob Daw","עברית","Мары йӹлмӹ","हिन्दी; हिंदी","Magyar","Íslenska","Asụsụ Igbo","Bahasa Indonesia","Gaeilge","Italiano","日本語","basa Jawa","ಕನ್ನಡ","Қазақ тілі","ភាសាខ្មែរ","кыргыз тили","한국어","Kurdî","ພາສາລາວ","Latīna","Latviešu valoda","Lietuvių kalba","Lëtzebuergesch","македонски јазик","Malagasy fiteny","Bahasa Melayu","മലയാളം","Malti","Te Reo Māori","मराठी","марий йылме","Монгол","नेपाली","Norsk","Querétaro Otomi","Papiamentu","پارسی","Polski","Português","ਪੰਜਾਬੀ","Română","Русский","gagana fa'a Samoa","Gàidhlig","Cрпски језик","Sesotho","chiShona","سنڌي","සිංහල","Slovenčina","Slovenščina","Af-Soomaali","Español","Basa Sunda","Kiswahili","Svenska","Tagalog","Reo Mā`ohi'","Тоҷикӣ","தமிழ்","татарча","తెలుగు","ภาษาไทย","faka Tonga","Türkçe","удмурт кыл","Українська","اردو","Oʻzbek tili","Tiếng Việt","Cymraeg","isiXhosa","ייִדיש","èdè Yorùbá","Màaya T'àan","Zulu"];var host=window.location.host;var url=window.location.href;var test=0;var languageFlag=$(".medium-title .language-flag");array_a.forEach(function(a,b){if(url.indexOf(a)>=0){test++;$(".medium-title .language-flag").find("span").html(array_c[b]);languageFlag.attr("class","");languageFlag.addClass("language-flag "+array_b[b])}});if(test==0){$(".medium-title .language-flag").find("span").html("English");languageFlag.attr("class","");languageFlag.addClass("language-flag language-flag-en")}});
// language end

	/*-- message 弹出层 --*/
			$('.ico-close-pop').click(function() {
				$('.hjumpmessage').css("display", "none");
				$('#Sidebar51').css("position", "relative");
				return false;
			});
			$('.mlast51').click(function() {
				$('.hjumpmessage').css("display", "block");
				$('#Sidebar51').css("position", "initial");
				return false;
			});


// pc nav scrollTop
var scrollTopLast = 0;
window.onscroll = function(e) {

	if (screen.width > 1024) {
		var scrollTop = e.target.scrollingElement.scrollTop;
		if (scrollTop > scrollTopLast) {
			// console.log("滑轮向下滚动");
			$("#pcnav").css("transition", "0.6s");
			$("#pcnav").css("opacity", "0");
			$("#pcnav").css("position", "fixed");
		} else if (scrollTop == 0) {
			$("#pcnav").css("position", "inherit");
		} else if (scrollTop < scrollTopLast) {
			// console.log("滑轮向上滚动");
			$("#pcnav").css("transition", "0.6s");
			$("#pcnav").css("opacity", "1");
			$("#pcnav").css("position", "fixed");

		}

		// console.log("此刻的滚动值："+scrollTop);
		// console.log(e.target.scrollingElement.scrollTop);
		scrollTopLast = scrollTop;
	};

}


// 头部/底部logo无图片时处理
var hlogo = $("#hlogo img").attr('src');
			var flogo = $("#flogo img").attr('src');
			if(flogo == "")
			$("#flogo img").attr('src', hlogo);
			if(hlogo == "")
			$("#hlogo img").attr('src', flogo);
			
// 			新闻左侧导航
//$(".pmenu_01-list ul li").find('ul').before($('<i class="fa fa-caret-right"></i>'));

// 手机端导航有二级导航提示
$(".51nav ul li").find('ul').before($('<b></b>'));
 $(".sbar51-nav ul li").find('ul').before($('<b></b>'));
 
 
 // 产品侧边栏
// $(".pmenu_01-list ul>li").mouseover(function(){
// 	var lilenght = $(this).length
// 	var lilenght1 = $(this).find("li").length
// 	var lilenght2 = $(this).find("li li").length
// 	$(this).css("max-height",(lilenght1*35+35)+"px")/*一级导航*/
// 	$(this).find("li").css("height","auto")/*二级导航*/
// 	$(this).find("li li").css("max-height","35px")/*三级导航*/
// })
// $(".pmenu_01-list ul li").mouseout(function(){
// 	$(this).css("max-height","35px")
// })

//$(".pmenu_01-list ul>li").mouseover(function(){
//					$(this).find("ul:first").css("display","block")
//				})
//				$(".pmenu_01-list ul li ul>li").mouseover(function(){
//					$(this).find("ul").css("display","block")
//				})
//				
//				$(".pmenu_01-list").mouseleave(function(){
//					$(this).find("ul ul").css("display","none")
//				})
 
//===========================================================  以下是合并内容 ==============================================================

//合并文件：con_01.js、comment.js、download.js、pmore_01.js、404parallax.js、

 //==================================== 产品列表切换 con_01.js
			function wg() {
				var div = document.getElementById('change');
				div.className = 'p_lists-01';
				$('#fl').removeClass('hover');
				$('#wg').addClass('hover');
			}

			function fl() {
				var div1 = document.getElementById('change');
				div1.className = 'p_list-01';
				$('#wg').removeClass('hover');
				$('#fl').addClass('hover');
			}
//==================================== 下载页面 download.js
 $(".download_nav li").click(function() {
				// 修改tab标签样式
				$(this).attr("class", "choice")
				$(this).siblings().attr("class", "")
				// 获取tab ID
				var itemId = $(this).attr("tabid") - 1;
				// 切换到指定tab
				$("#downloadbox").find("div:eq(" + itemId + ")").attr("class", "show")
				$("#downloadbox").find("div:eq(" + itemId + ")").siblings().attr("class", "tab-item")
			})
    //====================================  产品详情 pmore_01.js
tabContainer('.pm01-tab-content-wrap', '.tab-title', '.tab-panel')
var swiper = new Swiper('.image-additional', {
    spaceBetween: 20,
    pagination: {
        el: '.product-view-01 .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.product-view-01 .swiper-button-next',
        prevEl: '.product-view-01 .swiper-button-prev',
    },
    breakpoints: {
        1920: {
            slidesPerView: 4
        },
        1366: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 1,
            loop: true
        },
        480: {
            slidesPerView: 1,
            loop: true
        }
    }
});
// $('.pm01-full-screen-img').click(function () {
//         $('.pm01-full-screen-img').hide()
//     })
if ($('.pm01-full-screen-img').css('display') == 'none') {
    $('.product-intro-01 .magnify').click(function (e) {
        e.preventDefault()
        $('.pm01-full-screen-img').show()
        var fullScreenImgSlider = new Swiper('.pm01-full-screen-img .swiper-container', {
            mousewheel: true,//鼠标滚轮控制
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            
            //  pagination: '.swiper-pagination',
            //  paginationType : 'fraction',
            //      paginationFractionRender: function (swiper, currentClassName, totalClassName) {
            //             return '<span class="' + currentClassName + '"></span>' +
            //                   ' / ' +
            //                   '<span class="' + totalClassName + '"></span>';
            //                 },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.pm01-full-screen-img .swiper-button-next',
                prevEl: '.pm01-full-screen-img .swiper-button-prev',
            },
        })
    })
    
    // 整个隐藏swiper点击隐藏
    $('#pmclose').click(function () {
        // $(this).hide();
        $(".pm01-full-screen-img").hide()
    })
}



var swiper = new Swiper('.pmore-01-rcd .swiper-slider', {
    spaceBetween: 20,
    speed: 400,
    navigation: {
        nextEl: '.pmore-01-rcd .swiper-button-next',
        prevEl: '.pmore-01-rcd .swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4
        },
		 480: {
            slidesPerView: 3
        },
        320: {
            slidesPerView: 2,
        }
    }
});
var mSwiper = new Swiper('.main_banner_slider', {
    effect: 'fade',
    speed: 1000,
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main_banner_slider .swiper-pagination',
        clickable: true,
    }
});

var mSwiper = new Swiper('.pmore-01-detail .swiper-container', {
    navigation: {
        nextEl: '.pmore-01-detail .swiper-container .swiper-button-next',
        prevEl: '.pmore-01-detail .swiper-container .swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4
        },
        0: {
            slidesPerView: 2,
        }
    }
})

function tabContainer(container, title, panel) {
    $(container).each(function () {
        $(this).find(title).each(function () {
            if ($(this).hasClass('current')) {
                let j = $(this).index();
                $(this).parents(container).find(panel).eq(j).removeClass('disabled')
            }
            $(this).click(function () {
                let i = $(this).index();
                $(this).addClass('current').siblings().removeClass('current');
                $(this).parents(container).find(panel).eq(i).show();
                $(this).parents(container).find(panel).not($(this).parents(container).find(panel).eq(i)).hide();
            })
        })
    })

}

// 弹出层
$('.gm-sep .email, pmore-01-btn-wrap .email').click(function () {
			        $('.jumpmessage').css("display","block");
					return false;
			    })
    $('.jumpform').click(function () {
        $('.jumpmessage').css("display","block");
    	return false;
    })
    // $('.jumpform').click(function () {
    //     $('.hjumpmessage').css("display","block");
    // 	return false;
    // })
			    
// 新闻详情判断是否有表格，如有，设置超宽滚动
if($(".tab-panel-content").has('table')){
    $(".tab-panel-content table").wrap('<div class="tableslide"></div>')
}




var windoww = window.screen.width;
var windowh = window.innerHeight;


// 移除手机端不需要加载的资源
if (windoww<768) {
         $("#removeimg").remove();
         $(".kf01").remove();
         $(".kf02").remove();
         $(".kf03").remove();
         $("link[href='/css/kf01.css']").remove();
         $("link[href='/css/kf02.css']").remove();
         $("link[href='/css/kf03.css']").remove();
         $("link[href='/css/kf01.css']").remove();
         $("link[href='/css/kf02.css']").remove();
         $("link[href='/css/kf03.css']").remove();
         $("script[src='/css/kf01.js']").remove();
         $("script[src='/css/kf02.js']").remove();
         $("script[src='/css/kf03.js']").remove();
         $("script[src='/css/kf01.js']").remove();
         $("script[src='/css/kf02.js']").remove();
         $("script[src='/css/kf03.js']").remove();
    }


// 视频组

$(".product-more-01-list .swiper-slide video").before("<div class='video-imgs'></div>")
$(".product-more-01-list .swiper-slide iframe").before("<div class='video-img'></div>")

var firstchild = $(".product-more-01-list ul").find('li:first-child')
if (firstchild.has('iframe').length>0) {
	$("#wrap iframe").show()
	$("#wrap img").hide()
	$("#wrap video").hide()
	$(".product-view-01 .product-image-01 img").css("height", "0")
} else if (firstchild.has('video').length>0) {
	$("#wrap video").show()
	$("#wrap img").hide()
	$("#wrap iframe").hide()
	$(".product-view-01 .product-image-01 img").css("height", "0")
} else if (firstchild.has('img').length>0) {
	$("#wrap img").show()
	$("#wrap iframe").hide()
	$("#wrap video").hide()
}


$(".product-more-01-list img").click(function() {
	$(".product-view-01 .product-image-01 img").css("height", "auto")
	$("#wrap video").hide()
	$("#wrap iframe").hide()
	var vsrc = $(this).attr("src")
	$("#wrap a").attr("href", vsrc)
	$("#wrap img").attr("src", vsrc)
	 $(this).parents('li').addClass('current');
     $(this).parents('li').siblings().removeClass('current');
     if(!$("#wrap").find('.mousetrap')){
         console.log("2222222222222")
         $("#wrap").append('<div class="mousetrap" style="width: 100%; height: 100%; top: 0px; left: 0px; position: absolute; z-index: 100; cursor: pointer;">这是新加的</div>')
     }
     $("#wrap").mouseover(function(){
      $(".mousetrap").css("height","100%")
    })
})



$(".product-more-01-list .swiper-slide  .video-imgs").click(function() {
	$("#wrap img").hide()
	$("#wrap iframe").hide()
	$(".product-view-01 .product-image-01 img").css("height", "0")
	$("#wrap video").show()

	var vsrc = $(this).parent().find('source').attr("src")
	$("#wrap video").attr("src", vsrc)
	$(this).parents('li').addClass('current');
    $(this).parents('li').siblings().removeClass('current');
})
$(".product-more-01-list .swiper-slide  .video-img").click(function() {
	$("#wrap img").hide()
	$("#wrap video").hide()
	$(".product-view-01 .product-image-01 img").css("height", "0")
	$("#wrap iframe").show()
	
	var vsrc = $(this).next('iframe').attr("src")
	$("#wrap iframe").attr("src", vsrc)
    $(this).parents('li').addClass('current');
    $(this).parents('li').siblings().removeClass('current');

})

if (windoww < 769) {
	$(".product-more-01-list li a video").attr('controls', '');
	$(".video-imgs").css("display", "none")
	$(".video-img").css("display", "none")
}
			
			      var gallerythumbs = new Swiper('.gallery-thumbs',{
			           spaceBetween: 10,
			            slidesPerView: 5,
			            centeredSlides:true,
                        slideToClickedSlide: true,
			            watchSlidesVisibility: true,/*避免出现bug*/
			             observer:true,//修改swiper自己或子元素时，自动初始化swiper
                         observeParents:true,//修改swiper的父元素时，自动初始化swiper
			         //   prevButton:'.swiper-button-prev',
            //             nextButton:'.swiper-button-next',
						navigation: {
						    nextEl: '.swiper-button-next',
						    prevEl: '.swiper-button-prev',
							disabledClass: 'my-button-disabled',
						  },
			      })
			       var gallerySwiper = new Swiper('.gallery-top',{
			        spaceBetween: 10,
			        slidesPerView: 1,
			        watchSlidesVisibility: true,/*避免出现bug*/
			         observer:true,//修改swiper自己或子元素时，自动初始化swiper
                         observeParents:true,//修改swiper的父元素时，自动初始化swiper
                         slideToClickedSlide: true,
			        thumbs: {
			          swiper:gallerythumbs,
			        
			        }
			      })
			      gallerySwiper.params.control = gallerythumbs;//需要在gallerythumbs初始化后，gallerySwiper控制gallerythumbs
                  gallerythumbs.params.control = gallerySwiper;//需要在gallerySwiper初始化后，gallerythumbs控制gallerySwiper
                  
			     
				  // 产品详情更多图片弹窗
				$(".maxbox").css("display","none")
				  $("#jump_swiper").click(function(){
					  $(".maxbox").show()
				  $(".smallbox").css("margin-top",((windowh-$(".smallbox").height())/2)+"px")
				  return false;
				  })
			     $(".swiper_bg").click(function(){
					  $(".maxbox").hide()
					  return false;
 })
 
				  
				  
				  
$(function(){
    $(".hnav-55 ul li ul li").css("padding",0)
    
    // 2020/12/10新更新（详情页放大下面缩略图点击切换问题）
$(".image-additional .swiper-wrapper li").click(function() {
  $(this).addClass('current');
   $(this).siblings().removeClass('current');
})

if($(".product-image-01 .cloud-zoom").find('img') || $(".product-more-01-list .current").find('img')){
    $("#wrap").mouseover(function(){
        $("#cloud-zoom-big").css("background-image","url("+$(this).find('img').attr('src')+")")
    })
    $("#wrap").mouseout(function(){
        $("#wrap").find('.cloud-zoom-big').remove()
    })
}

var pc_img = $(".product-image-01 .cloud-zoom").find('img')
var pc_iframe = $(".product-image-01 .cloud-zoom").find('iframe')
var pc_video = $(".product-image-01 .cloud-zoom").find('video')

if(pc_img.css("display")=="block"){
    $("#wrap").mouseover(function(){
      $(".mousetrap").css("height","100%")
    })
    $("#wrap").mouseout(function(){
        $("#wrap").find('.cloud-zoom-big').remove()
    })
}
})



 //==================================== 404 parallax.js

$(document).ready(function() {
    
     if(document.getElementById("400height")){
         
! function(t, i, e) {
	"use strict";

	function s(t, i) {
	  
		this.element = t, this.layers = t.getElementsByClassName("layer");
	   
		var e = {
			calibrateX: this.data(this.element, "calibrate-x"),
			calibrateY: this.data(this.element, "calibrate-y"),
			invertX: this.data(this.element, "invert-x"),
			invertY: this.data(this.element, "invert-y"),
			limitX: this.data(this.element, "limit-x"),
			limitY: this.data(this.element, "limit-y"),
			scalarX: this.data(this.element, "scalar-x"),
			scalarY: this.data(this.element, "scalar-y"),
			frictionX: this.data(this.element, "friction-x"),
			frictionY: this.data(this.element, "friction-y"),
			originX: this.data(this.element, "origin-x"),
			originY: this.data(this.element, "origin-y")
		};
		for (var s in e) null === e[s] && delete e[s];
		this.extend(this, r, i, e), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [],
			this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0,
			this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx =
			0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(
				this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer
			.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(
				this), this.initialise()
	}
	var n = "Parallax",
		o = 30,
		r = {
			relativeInput: !1,
			clipRelativeInput: !1,
			calibrationThreshold: 100,
			calibrationDelay: 500,
			supportDelay: 500,
			calibrateX: !1,
			calibrateY: !0,
			invertX: !0,
			invertY: !0,
			limitX: !1,
			limitY: !1,
			scalarX: 10,
			scalarY: 10,
			frictionX: .1,
			frictionY: .1,
			originX: .5,
			originY: .5
		};
	s.prototype.extend = function() {
			if (arguments.length > 1)
				for (var t = arguments[0], i = 1, e = arguments.length; e > i; i++) {
					var s = arguments[i];
					for (var n in s) t[n] = s[n]
				}
		}, s.prototype.data = function(t, i) {
			return this.deserialize(t.getAttribute("data-" + i))
		}, s.prototype.deserialize = function(t) {
			return "true" === t ? !0 : "false" === t ? !1 : "null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ?
				parseFloat(t) : t
		}, s.prototype.camelCase = function(t) {
			return t.replace(/-+(.)?/g, function(t, i) {
				return i ? i.toUpperCase() : ""
			})
		}, s.prototype.transformSupport = function(s) {
			for (var n = i.createElement("div"), o = !1, r = null, a = !1, h = null, l = null, p = 0, c = this.vendors.length; c >
				p; p++)
				if (null !== this.vendors[p] ? (h = this.vendors[p][0] + "transform", l = this.vendors[p][1] + "Transform") : (h =
						"transform", l = "transform"), n.style[l] !== e) {
					o = !0;
					break
				} switch (s) {
				case "2D":
					a = o;
					break;
				case "3D":
					if (o) {
						var m = i.body || i.createElement("body"),
							u = i.documentElement,
							y = u.style.overflow;
						i.body || (u.style.overflow = "hidden", u.appendChild(m), m.style.overflow = "hidden", m.style.background = ""),
							m.appendChild(n), n.style[l] = "translate3d(1px,1px,1px)", r = t.getComputedStyle(n).getPropertyValue(h), a = r !==
							e && r.length > 0 && "none" !== r, u.style.overflow = y, m.removeChild(n)
					}
			}
			return a
		}, s.prototype.ww = null, s.prototype.wh = null, s.prototype.wcx = null, s.prototype.wcy = null, s.prototype.wrx =
		null, s.prototype.wry = null, s.prototype.portrait = null, s.prototype.desktop = !navigator.userAgent.match(
			/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), s.prototype.vendors = [null, [
				"-webkit-", "webkit"
			],
			["-moz-", "Moz"],
			["-o-", "O"],
			["-ms-", "ms"]
		], s.prototype.motionSupport = !!t.DeviceMotionEvent, s.prototype.orientationSupport = !!t.DeviceOrientationEvent, s.prototype
		.orientationStatus = 0, s.prototype.transform2DSupport = s.prototype.transformSupport("2D"), s.prototype.transform3DSupport =
		s.prototype.transformSupport("3D"), s.prototype.propertyCache = {}, s.prototype.initialise = function() {
			this.transform3DSupport && this.accelerate(this.element);
			var i = t.getComputedStyle(this.element);
			"static" === i.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this
				.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
		}, s.prototype.updateLayers = function() {
			this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
			for (var t = 0, i = this.layers.length; i > t; t++) {
				var e = this.layers[t];
				this.transform3DSupport && this.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display =
					"block", e.style.left = 0, e.style.top = 0, this.depths.push(this.data(e, "depth") || 0)
			}
		}, s.prototype.updateDimensions = function() {
			this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY,
				this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
		}, s.prototype.updateBounds = function() {
			this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew =
				this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY,
				this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
		}, s.prototype.queueCalibration = function(t) {
			clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
		}, s.prototype.enable = function() {
			this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener(
				"deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx =
				0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener(
				"resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
		}, s.prototype.disable = function() {
			this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) :
				t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize),
				cancelAnimationFrame(this.raf))
		}, s.prototype.calibrate = function(t, i) {
			this.calibrateX = t === e ? this.calibrateX : t, this.calibrateY = i === e ? this.calibrateY : i
		}, s.prototype.invert = function(t, i) {
			this.invertX = t === e ? this.invertX : t, this.invertY = i === e ? this.invertY : i
		}, s.prototype.friction = function(t, i) {
			this.frictionX = t === e ? this.frictionX : t, this.frictionY = i === e ? this.frictionY : i
		}, s.prototype.scalar = function(t, i) {
			this.scalarX = t === e ? this.scalarX : t, this.scalarY = i === e ? this.scalarY : i
		}, s.prototype.limit = function(t, i) {
			this.limitX = t === e ? this.limitX : t, this.limitY = i === e ? this.limitY : i
		}, s.prototype.origin = function(t, i) {
			this.originX = t === e ? this.originX : t, this.originY = i === e ? this.originY : i
		}, s.prototype.clamp = function(t, i, e) {
			return t = Math.max(t, i), t = Math.min(t, e)
		}, s.prototype.css = function(t, i, s) {
			var n = this.propertyCache[i];
			if (!n)
				for (var o = 0, r = this.vendors.length; r > o; o++)
					if (n = null !== this.vendors[o] ? this.camelCase(this.vendors[o][1] + "-" + i) : i, t.style[n] !== e) {
						this.propertyCache[i] = n;
						break
					} t.style[n] = s
		}, s.prototype.accelerate = function(t) {
			this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t,
				"backface-visibility", "hidden")
		}, s.prototype.setPosition = function(t, i, e) {
			i += "px", e += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + i + "," + e + ",0)") :
				this.transform2DSupport ? this.css(t, "transform", "translate(" + i + "," + e + ")") : (t.style.left = i, t.style.top =
					e)
		}, s.prototype.onOrientationTimer = function() {
			this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
		}, s.prototype.onCalibrationTimer = function() {
			this.calibrationFlag = !0
		}, s.prototype.onWindowResize = function() {
			this.updateDimensions()
		}, s.prototype.onAnimationFrame = function() {
			this.updateBounds();
			var t = this.ix - this.cx,
				i = this.iy - this.cy;
			(Math.abs(t) > this.calibrationThreshold || Math.abs(i) > this.calibrationThreshold) && this.queueCalibration(0),
				this.portrait ? (this.mx = this.calibrateX ? i : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx =
					this.calibrateX ? t : this.ix, this.my = this.calibrateY ? i : this.iy), this.mx *= this.ew * (this.scalarX / 100),
				this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX,
					this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx +=
				(this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
			for (var e = 0, s = this.layers.length; s > e; e++) {
				var n = this.layers[e],
					o = this.depths[e],
					r = this.vx * o * (this.invertX ? -1 : 1),
					a = this.vy * o * (this.invertY ? -1 : 1);
				this.setPosition(n, r, a)
			}
			this.raf = requestAnimationFrame(this.onAnimationFrame)
		}, s.prototype.onDeviceOrientation = function(t) {
			if (!this.desktop && null !== t.beta && null !== t.gamma) {
				this.orientationStatus = 1;
				var i = (t.beta || 0) / o,
					e = (t.gamma || 0) / o,
					s = this.wh > this.ww;
				this.portrait !== s && (this.portrait = s, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !
					1, this.cx = i, this.cy = e), this.ix = i, this.iy = e
			}
		}, s.prototype.onMouseMove = function(t) {
			var i = t.clientX,
				e = t.clientY;
			!this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (i = Math.max(i, this.ex), i = Math.min(
				i, this.ex + this.ew), e = Math.max(e, this.ey), e = Math.min(e, this.ey + this.eh)), this.ix = (i - this.ex -
				this.ecx) / this.erx, this.iy = (e - this.ey - this.ecy) / this.ery) : (this.ix = (i - this.wcx) / this.wrx, this.iy =
				(e - this.wcy) / this.wry)
		}, t[n] = s
}(window, document),
function() {
	for (var t = 0, i = ["ms", "moz", "webkit", "o"], e = 0; e < i.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame =
		window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[
			i[e] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(i) {
		var e = (new Date).getTime(),
			s = Math.max(0, 16 - (e - t)),
			n = window.setTimeout(function() {
				i(e + s)
			}, s);
		return t = e + s, n
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
		clearTimeout(t)
	})
}();

// 404页面

var makeWinHeight = function() {
				var vh = $("#scene").height();
				var projects = vh / 2;
				$('#scene, .layer.main').height(vh);
				$('#scene .col a, #scene .col').height(projects);
			}
			$(document).ready(function() {
				makeWinHeight();

			});
			$(window).resize(function() {
				makeWinHeight();
			});

			var scene = document.getElementById('scene');
			var parallax = new Parallax(scene);
     }

			
			var swipersub = new Swiper('.swiper-container-01', {
				pagination: '.swiper-pagination',
				slidesPerView: 4,
				breakpoints: {
				        1366: {
				            slidesPerView: 4
				        },
				        1024: {
				            slidesPerView: 4
				        },
				        768: {
				            slidesPerView: 3,
				        },
				        480: {
				            slidesPerView: 2,
				        }
				    },
				paginationClickable: true,
				Swiping : true,
				spaceBetween: 10,
				keyboardControl: true,
				autoplay: 2500,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			});
			
			
})
    
  //==================================== 评论区 comment.js
  
  
$(function($) {
	function FT(elem) {
		this.$textarea = $(elem);
		this._init();
	}
	FT.prototype = {
		_init: function() {
			var _this = this;
			this.$textarea.wrap('<div class="flex-text-wrap" />').before('<pre class="pre"><span /><br /></pre>');
			this.$span = this.$textarea.prev().find('span');
			this.$textarea.on('input propertychange keyup change', function() {
				_this._mirror();
			});
			$.valHooks.textarea = {
				get: function(elem) {
					return elem.value.replace(/\r?\n/g, "\r\n");
				}
			};
			this._mirror();
		},
		_mirror: function() {
			this.$span.text(this.$textarea.val());
		}
	};
	$.fn.flexText = function() {
		return this.each(function() {
			if (!$.data(this, 'flexText')) {
				$.data(this, 'flexText', new FT(this));
			}
		});
	};
})


  $(function () {
        $('.content').flexText();
    });
	
	// 评论区字数限制
	  function keyUP(t){
	        var len = $(t).val().length;
	        if(len > 639){
	            $(t).val($(t).val().substring(0,640));
	        }
	    }
		
		 $('.commentAll').on('click','.plBtn',function(){
		        var myDate = new Date();
		        //获取当前年
		        var year=myDate.getFullYear();
		        //获取当前月
		        var month=myDate.getMonth()+1;
		        //获取当前日
		        var date=myDate.getDate();
		        var h=myDate.getHours();       //获取当前小时数(0-23)
		        var m=myDate.getMinutes();     //获取当前分钟数(0-59)
		        if(m<10) m = '0' + m;
		        var s=myDate.getSeconds();
		        if(s<10) s = '0' + s;
		        var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
		        //获取输入内容
		        var oSize = $(this).siblings('.flex-text-wrap').find('.comment-input').val();
		        // console.log(oSize);
		        //动态创建评论模块
		        oHtml = '<div class="comment-show-con clearfix"><div class="comment-show-con-img pull-left"><img src="img/pd03.jpg" alt=""></div> <div class="comment-show-con-list pull-left clearfix"><div class="pl-text clearfix"> <a href="#" class="comment-size-name">David Beckham : </a> <span class="my-pl-con">&nbsp;'+ oSize +'</span> </div> <div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"><a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="fa fa-heart"></i> 赞 (<i class="z-num">666</i>)</a> </div> </div><div class="hf-list-con"></div></div> </div>';
		        if(oSize.replace(/(^\s*)|(\s*$)/g, "") != ''){
		            $(this).parents('.reviewArea ').siblings('.comment-show').prepend(oHtml);
		            $(this).siblings('.flex-text-wrap').find('.comment-input').prop('value','').siblings('pre').find('span').text('');
		        }
		    });
			
			 $('.comment-show').on('click','.pl-hf',function(){
			        //获取回复人的名字
			        var fhName = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
			        //回复@
			        var fhN = '回复@'+fhName;
			        //var oInput = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.hf-con');
			        var fhHtml = '<div class="hf-con pull-left"> <textarea class="content comment-input hf-input" placeholder="" onkeyup="keyUP(this)"></textarea> <a href="javascript:;" class="hf-pl">评论</a></div>';
			        //显示回复
			        if($(this).is('.hf-con-block')){
			            $(this).parents('.date-dz-right').parents('.date-dz').append(fhHtml);
			            $(this).removeClass('hf-con-block');
			            $('.content').flexText();
			            $(this).parents('.date-dz-right').siblings('.hf-con').find('.pre').css('padding','6px 15px');
			            //console.log($(this).parents('.date-dz-right').siblings('.hf-con').find('.pre'))
			            //input框自动聚焦
			            $(this).parents('.date-dz-right').siblings('.hf-con').find('.hf-input').val('').focus().val(fhN);
			        }else {
			            $(this).addClass('hf-con-block');
			            $(this).parents('.date-dz-right').siblings('.hf-con').remove();
			        }
			    });
				
				
				
				 $('.comment-show').on('click','.hf-pl',function(){
				        var oThis = $(this);
				        var myDate = new Date();
				        //获取当前年
				        var year=myDate.getFullYear();
				        //获取当前月
				        var month=myDate.getMonth()+1;
				        //获取当前日
				        var date=myDate.getDate();
				        var h=myDate.getHours();       //获取当前小时数(0-23)
				        var m=myDate.getMinutes();     //获取当前分钟数(0-59)
				        if(m<10) m = '0' + m;
				        var s=myDate.getSeconds();
				        if(s<10) s = '0' + s;
				        var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
				        //获取输入内容
				        var oHfVal = $(this).siblings('.flex-text-wrap').find('.hf-input').val();
				        // console.log(oHfVal)
				        var oHfName = $(this).parents('.hf-con').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
				        var oAllVal = '回复@'+oHfName;
				        if(oHfVal.replace(/^ +| +$/g,'') == '' || oHfVal == oAllVal){
				
				        }else {
				            $.getJSON("json/pl.json",function(data){
				                var oAt = '';
				                var oHf = '';
				                $.each(data,function(n,v){
				                    delete v.hfContent;
				                    delete v.atName;
				                    var arr;
				                    var ohfNameArr;
				                    if(oHfVal.indexOf("@") == -1){
				                        data['atName'] = '';
				                        data['hfContent'] = oHfVal;
				                    }else {
				                        arr = oHfVal.split(':');
				                        ohfNameArr = arr[0].split('@');
				                        data['hfContent'] = arr[1];
				                        data['atName'] = ohfNameArr[1];
				                    }
				
				                    if(data.atName == ''){
				                        oAt = data.hfContent;
				                    }else {
				                        oAt = '回复<a href="#" class="atName">@'+data.atName+'</a> : '+data.hfContent;
				                    }
				                    oHf = data.hfName;
				                });
				
				                var oHtml = '<div class="all-pl-con"><div class="pl-text hfpl-text clearfix"><a href="#" class="comment-size-name">我的名字 : </a><span class="my-pl-con">'+oAt+'</span></div><div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"> <a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="fa fa-heart"></i> 赞 (<i class="z-num">666</i>)</a> </div> </div></div>';
				                oThis.parents('.hf-con').parents('.comment-show-con-list').find('.hf-list-con').css('display','block').prepend(oHtml) && oThis.parents('.hf-con').siblings('.date-dz-right').find('.pl-hf').addClass('hf-con-block') && oThis.parents('.hf-con').remove();
				            });
				        }
				    });
					
					
					 $('.commentAll').on('click','.removeBlock',function(){
					        var oT = $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con');
					        if(oT.siblings('.all-pl-con').length >= 1){
					            oT.remove();
					        }else {
					            $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con').parents('.hf-list-con').css('display','none')
					            oT.remove();
					        }
					        $(this).parents('.date-dz-right').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con').remove();
					
					    })
						
						
						  $('.comment-show').on('click','.date-dz-z',function(){
						        var zNum = $(this).find('.z-num').html();
						        if($(this).is('.date-dz-z-click')){
						            zNum--;
						            $(this).removeClass('date-dz-z-click red');
						            $(this).find('.z-num').html(zNum);
						            $(this).find('.date-dz-z-click-red').removeClass('red');
						        }else {
						            zNum++;
						            $(this).addClass('date-dz-z-click');
						            $(this).find('.z-num').html(zNum);
						            $(this).find('.date-dz-z-click-red').addClass('red');
						        }
						    })
						    
/*购物车新增2021.01.20整合*/						    
						    
	
// 2020/12/23
// 购物车类型tab面板切换

$(".pmore_01-img li, .pmore_01-text li, .pmore_01-color li").off("click").on("click", function() {
// 	$(this).find(".cancle").toggleClass("select"); // 购物车选择 多选
$(this).addClass("select").siblings().removeClass("select")  //单选
	var index = $(this).index()
	console.log("index===" + index)

	$(this).addClass("pchoice").siblings().removeClass("pchoice")
	$(".pmore_01-bottom .ptab-item").eq(index).addClass("pshow").siblings().removeClass("pshow")

	// 选择取消数量清零
	if (!$(this).is(".select")) {
		$(".pshow .num").val("0")
		$(".pshow").find('span').text("0")
		$(".pshow").find('b').text("0")
	}
	// 展示总数
// 	$(".h51-massage").find('b').html(addsum())
// 	$(".fshop-car").find('b').html(addsum())
	
	return false;
})



// 加减按钮-网站加载完成时的初始效果
if ($(".num").val() == 0) {
	$(".gw_num em.jian").css("cursor", "no-drop")
} else if ($(".num").val() == 999999) {
	$(".gw_num em.add").css("cursor", "no-drop")
} else {
	$(".gw_num em.jian").css("cursor", "pointer")
}

//加的效果
$(".add").click(function() {
	// 判断是否已选择商品
// 	if($('.pmore_01-img .select,.pmore_01-text .select,.pmore_01-color .select').length  != 0 ){
	
	var n = $(this).prev().val();
	var num = parseInt(n) + 1;
	if (num == 0 || num == 1000000) {
		return;
	}
	if (num == 999999) {
		$(".gw_num em.add").css("cursor", "no-drop")
	} else if (num == -1 || num < 0) {
		$(".gw_num em.jian").css("cursor", "no-drop")
	} else {
		$(".gw_num em.add").css("cursor", "pointer")
		$(".gw_num em.jian").css("cursor", "pointer")
	}
// 	移动端购物车
	if(num > 0){
		$(".fshop-car").removeClass("amessage-block")
	}else{
		$(".fshop-car").addClass("amessage-none")
	}
	
	$(this).prev().val(num);
	// 实时总数
	$(this).parent().parent().find('span').html($(".pshow .num").val())
// 	$(".h51-massage").find('b').html(addsum())
// 	$(".fshop-car").find('b').html(addsum())
	$(this).parent().parent().next().find('b').html($(".pshow .num").val())
	
// 	}else{
// 		if($(".pmore_01-select .pmore_01-img").length > 0){
// 			alert("请选择商品-图片")
// 		}else if($(".pmore_01-select .pmore_01-text").length > 0){
// 		    alert("请选择商品-名称")
// 		}else if($(".pmore_01-select .pmore_01-color").length > 0){
// 		    alert("请选择商品-颜色")
// 		}
// 		return;
// 	}
	
	return false
});


//减的效果
$(".jian").click(function() {
	var n = $(this).next().val();
	var num = parseInt(n) - 1;
	if (num == -1 || num < 0) {
		return
	}
	if (num == 0 || num < 0) {
		$(".gw_num em.jian").css("cursor", "no-drop")
	} else if (num == 999999) {
		$(".gw_num em.add").css("cursor", "no-drop")
	} else {
		$(".gw_num em.add").css("cursor", "pointer")
		$(".gw_num em.jian").css("cursor", "pointer")
	}
	
	// 	移动端购物车
	if(num > 0){
		$(".fshop-car").removeClass("amessage-block")
	}else{
		$(".fshop-car").addClass("amessage-none")
	}
	
	$(this).next().val(num);
	// 实时总数
	$(this).parent().parent().find('span').html($(".pshow .num").val())
// 	$(".h51-massage").find('b').html(addsum())
// 	$(".fshop-car").find('b').html(addsum())
	$(this).parent().parent().next().find('b').html($(".pshow .num").val())
	
	return false
});


$(".pmore_01-from").click(function() {
	// ====================获取图片路径===========================
	var list = $('.pmore_01-img').find('.select')
	var img_list = []
	list.each(function() {
		img_list.push($(this).find("img").attr("src"))
	})
	// =====================获取商品大小==========================
	var name_list = $('.pmore_01-text').find('.select')
	var namelist = []
	name_list.each(function() {
		namelist.push($(this).find("div").text())
	})
	// ======================获取商品颜色=========================
	var color_list = $('.pmore_01-color').find('.select')
	var colorlist = []
	color_list.each(function() {
		var color = $('.pmore_01-color').find('.select b').css("background-color")
		colorlist.push(coloritem(color))
	})
	
	// ===============================================
	// 输出当前增加或减少的值,仅供参考
// 	$(this).find('b').html($(this).prev().children('div').children("input").val())
// 	$(".h51-massage").find('b').html(shopsum())
// 	$(".fshop-car").find('b').html(shopsum())

// 	$("#sum1 span").html(
// 		"选择的尺寸：" +
// // 		img_list +
// 		namelist+
// 		// colorlist+
// 		"<br/>" +
// 		"数量为：" + shopsum()
// 	)
	//新增 product详情页
	var pro_id = $('.pmore_view-01').attr('data-id');       //产品ID
	var num = $(this).parent().find('span').html();         //数量
	var attr = $('.pmore_01-select').find('span').html();   //属性名称
	if(num != 0){      //添加了属性产品
	    if (img_list.length != 0){
           var three_attr = img_list;
        }else if(namelist.length != 0){
           var three_attr = namelist;
        }else if(colorlist.length != 0){
            var three_attr = colorlist;
        }
        three_attr = $.trim(three_attr);
	    var product_attr = pro_id+'_'+three_attr+'_'+num+'_'+attr;
	    var add_rep = pro_id+'_'+three_attr;
	    if($.cookie('product_attr')){
    	    var cookie = $.cookie('product_attr');
    	    //转换成数组
    	    var stringResult = cookie.split('&&');
    	    for(var i = 0;i < stringResult.length; i++){
                if(stringResult[i].indexOf(add_rep) != -1){   //是否包含
                    stringResult.splice(i,1,'');    //找到就删除
                }
            }
            stringResult = stringResult.filter(item=>item);     //去空值
            var arrayResult = stringResult.join('&&');      //被筛选过的cookie值 
    	    $.cookie('product_attr', product_attr+'&&'+arrayResult, { expires: 10, path: '/' });
    	}else{
    	    $.cookie('product_attr', product_attr, { expires: 10, path: '/' });
    	}
    	
    	//购物车图标
    	if($.cookie('product_number') != null){
	        var product_number = $.cookie('product_number');
	        $(".h51-massage").removeClass("message-none");
	        $(".h51-massage").find('b').html(parseInt(product_number)+(shopsum()-parseInt(product_number)));
	        $.cookie('product_number', parseInt(product_number)+(shopsum()-parseInt(product_number)), { expires: 10, path: '/' });
	    }else{
	        $.cookie('product_number', parseInt(num), { expires: 10, path: '/' });
	        $(".h51-massage").removeClass("message-none");
	        $(".h51-massage").find('b').html(parseInt(num));
	    }
    	
	}else{     //直接添加产品
	    if($.cookie('product') == null){
    	    var product = pro_id + '-1';
            $.cookie('product', product, { expires: 10, path: '/' });
	    }else{
	        var cookie = $.cookie('product');
	        cookie = cookie + '&&' + pro_id + '-1';
	        $.cookie('product', cookie, { expires: 10, path: '/' });
	    }
	    
	    //购物车图标
    	if($.cookie('product_number') != null){
	        var product_number = $.cookie('product_number');
	        $(".h51-massage").removeClass("message-none");
	        $(".h51-massage").find('b').html(parseInt(product_number)+1);
	        $.cookie('product_number', parseInt(product_number)+1, { expires: 10, path: '/' });
	    }else{
	        $(".h51-massage").removeClass("message-none");
	        $(".h51-massage").find('b').html(1);
	        $.cookie('product_number', 1, { expires: 10, path: '/' });
	    }
	}
})

function shopsum() {
	var shop_sum = 0
	var listb = $(".ptab-item").find('b')
	listb.each(function() {
		shop_sum += parseInt($(this).text());
	})
	return shop_sum
}
// 实时总数
function addsum() {
	var add_sum = 0
	var list_span = $(".ptab-item").find('span')
	list_span.each(function() {
		add_sum += parseInt($(this).text());
	})
	// 有数据时展示，无数据隐藏
	if(add_sum > 0){
		$(".h51-massage").removeClass("message-none")
		$(".fshop-car").removeClass("amessage-block")
	}else{
		$(".h51-massage").addClass("message-none")
		$(".fshop-car").addClass("amessage-none")
	}
	return add_sum
}
// 产品颜色
function coloritem(color){
	var rgb = color;
	// if(!$.browser.msie){
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
	return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return rgb= "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	// }
}


// 选择提交页面


//加的效果
$(".padd").click(function(){
    var n=$(this).prev().val();
    var num=parseInt(n)+1;
    if(num==0 || num==1000000){ 
    	return;
    }
    $(this).prev().val(num);
    
    //新增代码
    var type = $(this).parent().attr('data-type');
    var pro_id = $(this).parent().attr('data-id');
    if(type == 'product'){
        var product = $.cookie('product');
        $.cookie('product',pro_id + '-1&&' + product, { expires: 10, path: '/' });
    }else if(type == 'attr'){
        var product_attr = $.cookie('product_attr');
        var pro_value = $(this).parent().attr('data-value');
        var pro_attr = $(this).parent().attr('data-attr');
        var collect = pro_id+'_'+pro_value+'_'+num+'_'+pro_attr;
        var arrayResult = product_attr.split('&&');  
        for( var i = 0; i < arrayResult.length; i++){
            if(arrayResult[i].indexOf(pro_id+'_'+pro_value) != -1){   //是否包含
                arrayResult.splice(i,1,'');
            }
        }
        arrayResult = arrayResult.filter(item=>item);     //去空值
        var stringResult = arrayResult.join('&&'); 
        $.cookie('product_attr',collect+'&&'+stringResult,{ expires: 10, path: '/' });
    }
});
//减的效果
$(".pjian").click(function(){
    var n=$(this).next().val();
    var num=parseInt(n)-1;
    if(num==0 || num < 0){ return}
    $(this).next().val(num);
    
    //新增代码
    var type = $(this).parent().attr('data-type');
    var pro_id = $(this).parent().attr('data-id');
    if(type == 'product'){
        var product = $.cookie('product');
        var arrayResult = product.split('&&');
        for( var i = 0; i < arrayResult.length; i++){
            if(arrayResult[i].indexOf(pro_id) != -1){   //是否包含
                arrayResult.splice(i,1,'');
            }
        }
        arrayResult = arrayResult.filter(item=>item);     //去空值
        var stringResult = arrayResult.join('&&'); 
        $.cookie('product',pro_id+'-'+num+'&&'+stringResult, { expires: 10, path: '/' });
    }else if(type == 'attr'){
        var product_attr = $.cookie('product_attr');
        var pro_value = $(this).parent().attr('data-value');
        var pro_attr = $(this).parent().attr('data-attr');
        var arrayResult = product_attr.split('&&');
        for(var i = 0; i < arrayResult.length; i++){
            if(arrayResult[i].indexOf(pro_id+'_'+pro_value) != -1){   //是否包含
                arrayResult.splice(i,1,'');
            }
        }
        arrayResult = arrayResult.filter(item=>item);     //去空值
        var stringResult = arrayResult.join('&&'); 
        var collect = pro_id+'_'+pro_value+'_'+num+'_'+pro_attr;
        $.cookie('product_attr',collect+'&&'+stringResult, { expires: 10, path: '/' });
    }
});



// 删除当前项

if($(".pform-select li").length <=0){
	$(".pform_moretips").css({
		"color":"#666"
	})
	$(".pform_moretips").html('You have not selected a product, <a href="/product"><b>go to select!</b></a>')
}

//新增代码 产品选择提交页
$(".pform-select li .pform-cz-delect").click(function(){
    var data_id = $(this).parent().parent().attr('data-id');    //当前产品ID
    var type = $(this).parent().parent().attr('data-type');     //当前删除类型
    if(type == 'product'){
        var product = $.cookie('product');
        var stringResult = product.split('&&');
        for(var i = 0;i < stringResult.length; i++){
            if(stringResult[i] == data_id+'-1'){
                stringResult.splice(i,1,'');
            }
        }
        stringResult = stringResult.filter(item=>item);     //去空值
        var arrayResult = stringResult.join('&&');      
        $.cookie('product', arrayResult, { expires: 10, path: '/' });
        $(this).closest('li').remove();
    }else if(type == 'attr'){
        var product_attr = $.cookie('product_attr');
        var pro_attr = $(this).parent().parent().attr('data-attr');
        var pro_group = data_id+'_'+pro_attr;
        var stringResult = product_attr.split('&&');
        for(var i = 0;i < stringResult.length; i++){
            if(stringResult[i].indexOf(pro_group) != -1){   //是否包含
                stringResult.splice(i,1,'');
            }
        }
        stringResult = stringResult.filter(item=>item);     //去空值
        if(stringResult.length > 1){
            var arrayResult = stringResult.join('&&'); 
        }else{
            var arrayResult = stringResult.join(''); 
        }
        $.cookie('product_attr', arrayResult, { expires: 10, path: '/' });
        $(this).closest('li').remove();
    }
})

function remove(list,obj){
    var pos = -1;
    for (var i = 0; i < list.length; i++) {
        if (list[i] == obj) {
            pos = i;
            break;
        }
    }
    if(pos>-1)
        list.splice(pos,1);
}

// 勾选选项
  $(".ps-list li").off("click").on("click",function(){
	  $(this).find(".pcancle").toggleClass("pselect");// 购物车选择
		return false;
      })
	  
	  // 获取当前选择图片路径
	  $(".pform-tab-item li").click(function(){
	      
	      //新增代码
	      if($(this).find('i').is('.pselect')){
		        var pro_id = $(this).attr('data-id');
		        var product = $.cookie('product');
		        $(".ps-list ul li").each(function(){
    	            if($(this).attr('data-id') == pro_id){
    	                $(this).find('i').addClass('pselect');
    	            }
	            })
		        if(product != null){
    	            $.cookie('product', pro_id+'-'+'1'+'&&'+product, { expires: 10, path: '/' });
    	        }else{
    	            $.cookie('product', pro_id+'-'+'1', { expires: 10, path: '/' });
    	        }
	      }else{
		        var pro_id = $(this).attr('data-id');
		        var pro_group = pro_id+'-1';
		        var product = $.cookie('product');
		        var stringResult = product.split('&&');
		        for(var i = 0;i < stringResult.length; i++){
                    if(stringResult[i].indexOf(pro_group) != -1){   //是否包含
                        stringResult.splice(i,1,'');
                    }
                }
                stringResult = stringResult.filter(item=>item);     //去空值
                if(stringResult.length > 1){
                    var arrayResult = stringResult.join('&&'); 
                }else{
                    var arrayResult = stringResult.join(''); 
                }
                $(".ps-list ul li").each(function(){
    	            if($(this).attr('data-id') == pro_id){
    	                $(this).find('i').removeClass('pselect');
    	            }
	            })
                $.cookie('product', arrayResult, { expires: 10, path: '/' });
	      }
	      
	  })
	  
	  
	  var sumtitle = 0;
	  $(".ps-title").click(function(){
		  if (sumtitle % 2 == 1) {
		  	$(".pform-select-list").css({
		  				"height":"50px",
						"transition":"all 0.3s",
						"-webkit-transition":"all 0.3s"
		  	})
		  } else{
		  	$(".pform-select-list").css({
		  				"height":($(".ps-list").height()+80)+"px",
						"transition":"all 0.3s",
						"-webkit-transition":"all 0.3s"
		  	})
		  }
		  sumtitle++;
	  })
	  
	  // 产品tab
	  $(".ps-list-nav li").click(function() {
	  				// 修改tab标签样式
	  				$(this).attr("class", "pform-choice")
	  				$(this).siblings().attr("class", "")
	  
	  				// 获取tab ID
	  				var itemId = $(this).attr("tabid") - 1;
	  
	  				// 切换到指定tab
	  				$("#ps-list").find("div:eq(" + itemId + ")").attr("class", "pform-show")
	  				$("#ps-list").find("div:eq(" + itemId + ")").siblings().attr("class", "pform-tab-item")
					$(".pform-select-list").css("height",($(".ps-list").height()+90)+"px")
	  			})
				
				function pslistnav(){
				var psli =  $(".ps-list-nav ul li").length;
				var sum = 0;
				for(var i = 1 ; i <= psli ; i++){
					sum += $(".ps-list-nav ul li:nth-child("+i+")").width()+31.4;
				}
				$(".ps-list-nav ul").css("width",sum+"px")
				}
				pslistnav();
	
	//购物车图标	
	jQuery(document).ready(function($){
	    if(window.location.href.indexOf('product-form') == -1){   //是否包含
            if($.cookie('product_number') != null){
    	        $(".h51-massage").removeClass("message-none");
    	        $(".h51-massage").find('b').html($.cookie('product_number'));
    	    }
        }
	})
				
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});


        /*-- message 弹出层 --*/
    function hideMsgPop() {
        $('.jumpmessage .hint').css("display","none");
        $('.jumpmessage').css("display","none");
    	return false;
    };
    function Inquiry_Nows(){
         $('.jumpmessage').css("display","block");
    	return false;
    }
    $('#Inquiry_Nows').click(function () {
        $('.jumpmessage').css("display","block");
    	return false;
    })