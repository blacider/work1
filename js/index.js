$(window).load(function() {
	$('.swiper-container').height($(window).height());
	$('.swiper-container').width($(window).width());
	var mySwiper = new Swiper('.swiper-container',{
	direction:'vertical',
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); 
        swiperAnimate(swiper); 
    }, 
    onSlideChangeStart: function(swiper) {
    	if (swiper.activeIndex == 3 && swiper.previousIndex == 4) {
    		$('.page7-step1').css('display', 'none');
    	} else {
    		$('.page7-step1').css('display', 'block');
    	}
    },
    onSlideChangeEnd: function(swiper){ 
        if (swiper.activeIndex == 10 && $('.page2 .mid').css('width') == '0px') {
        	setTimeout(page2Step4,4000);
        }
        if (swiper.activeIndex == 5)
        	showAdvantage();
        else if (swiper.activeIndex == 2) {
        	setTimeout(showChart, 1000);
        	setTimeout(showPie, 3000);
        } else if (swiper.activeIndex == 3) {
        	setTimeout(showPie9, 2000);
        }
        swiperAnimate(swiper);
    },
    speed:2000,
    parallax : true,
    initialSlide : 11,
    followFinger : false
    });
    var num = Number(hq_str_sz300364.split(',')[3]);
    num.toFixed(2);
    $('#page11-down').text(num);
    $("#loading").hide();
    $(function() {
        $('.quickFlip').quickFlip();
    });
    $('#music1').click(function(event) {
    	audio = document.getElementById('audio');
    	if ($('#music1 img').attr('src') == "img/music.png") {
    		$('#music1 img').attr('src', "img/music2.png");
    		audio.pause();
    	} else {
    		$('#music1 img').attr('src', "img/music.png");
    		audio.play();
    	}
    });
    setTimeout(showup, 1000);
    	setTimeout(shake, 1000);
    	setTimeout(shake1, 1500);
    	setTimeout(shake2, 1500);
});
function showup() {
    $('#up').animate({top: "-1%"}, 500, function() {
		$('#up').animate({top: "1%"}, 500, function() {
		    showup();
	    });
	});
}
function shake() {
   $('.page1-plane').animate({bottom: "15%"},750, function() {
		$('.page1-plane').animate({bottom: "17%"}, 750, function() {
		    shake();
	    });
	});
}
function shake1() {
   $('.page11-plane').animate({bottom: "85%"}, 500, function() {
		$('.page11-plane').animate({bottom: "83%"}, 500, function() {
		    shake1();
	    });
	});
}
function shake2() {
   $('.page11-main').animate({top: "35%"}, 1000, function() {
		$('.page11-main').animate({top: "33%"}, 1000, function() {
		    shake2();
	    });
	});
}
function page2Step4() {
	//$('.page2 .mid').animate({width:265},"slow");
}
function showAdvantage() {
	var b = document.querySelectorAll(".ani1");
	for (i = 0; i < b.length; i++) 
	{
		b[i].style.visibility = "visible";
		effect = b[i].attributes["swiper-animate-effect"] ? b[i].attributes["swiper-animate-effect"].value : "";
		b[i].className = b[i].className + "  " + effect + " " + "animated";
    }
}
function showChart() {
	$('.chart-main').animate({height: "60%"}, 1000, function() {
		$('.ani5').css('visibility', 'visible');
	});
}
function showPie() {
	$('.page10-pie2-t').animate({top: "10.7%",height:"18.3%"}, 1000, function() {
		$('.page10-pie1').css('visibility', 'visible');
	});
}
function showPie9() {
	$('.page9-pie3').animate({top: "0%"}, 1000, function() {
		//$('.page9-point').css('visibility', 'visible');
		//$('#page9-step3-1').css('visibility', 'visible');
	});
}