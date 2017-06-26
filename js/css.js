$(function(){
  	var submenu2 = $("#menu-item-2")
	var submenu3 = $("#menu-item-3")

	$(".menu-has-children").on({mouseenter:function(e){
		var point = this
		$(point).find("ul").css({
			"display":"block"
		})
		setTimeout(function(){
			$(point).find("ul").css({
			"transition":"opacity 1s",
			"-webkit-transition":"opacity 1s",
			"-moz-transition":"opacity 1s",
			"-o-transition":"opacity 1s",
			"opacity":"1"
			});
		}, 100)
		$(".headbg").css({
			"background":"rgba(255,255,255, 1)"
		})
		},mouseleave:function(e){
			var point = this
			$(point).find("ul").css({
			"transition":"opacity 1s",
			"-webkit-transition":"opacity 1s",
			"-moz-transition":"opacity 1s",
			"-o-transition":"opacity 1s",
			"opacity":"0"
			})
			setTimeout(function(){
				$(point).find("ul").css({
					"display":"none"
				})}, 100)
			$(".headbg").css({
			"background":"rgba(255,255,255, 0.8)"
		})
		}
	})

	$(".menu-item").on({
		mouseenter:function(e){
			$(".headbg").css({
			"background":"rgba(255,255,255, 1)"
		})
		},
		mouseleave:function(e){
			$(".headbg").css({
			"background":"rgba(255,255,255, 0.8)"
		})
		}
	})
});

$(document).ready(function(){
	$(".tab-hd span:first").addClass("current");
	$(".tab-bd-con:gt(0)").hide();
	$(".tab-hd span").mouseover(function(){
	$(this).addClass("current").siblings("span").removeClass("current");
	$(".tab-bd-con:eq("+$(this).index()+")").show().siblings(".tab-bd-con").hide().addClass("current");
	});
});

$(document).ready(function(){
	$(".mark-nav li").on({
		mouseenter:function(e){
			var tLeft = this.offsetLeft+30;
			var tTop = this.offsetTop-30;
			var content = this.innerHTML;
			var num = content.match(/(\d+)/);
			var str = num[0]+"个话题";
			var tooltip = $(".tooltip")
			tooltip.html(str);
			tooltip.css({"left":tLeft, "top":tTop})
			tooltip.show()
		},
		mouseleave:function(e){
			$(".tooltip").hide();
		}
		})
});


function getcurindex()
{
	var nowindex = 0
	for(i = 0; i < 3; i++)
	{
		var child =  $(".screen .screen-child:nth-child(" + (i+1) + ")");
		if(child.hasClass("current-screen"))
		{
			nowindex = i;
		}
	}
	return nowindex;
}

function showindex(nowindex)
{
    var index = nowindex+1;
    $(".screen .screen-child:nth-child(" + index + ")").addClass("current-screen").siblings(".screen-child").removeClass("current-screen");
    $(".bottom-btn span:nth-child(" + index + ")").addClass("current-bottom-btn").siblings("span").removeClass("current-bottom-btn");
}

function autoshowindex()
{
	var nowindex = getcurindex() + 1;
	if (nowindex < 0 || nowindex > 2)
	{
       	nowindex = 0;
    }
	showindex(nowindex);
    setTimeout("autoshowindex();", 5000);
}

$(document).ready(function(){

	$(".screen .screen-child:first").addClass("current-screen");
	$(".bottom-btn span:first").addClass("current-bottom-btn");
	
	$(".screen .pre-btn").click(function(){
		var nowindex = getcurindex() - 1;
		if (nowindex < 0)
		{
       		nowindex = 2;
    	}
		showindex(nowindex);
	});

	$(".screen .next-btn").click(function(){
		var nowindex = getcurindex() + 1;
		if (nowindex > 2)
		{
       		nowindex = 0;
    	}
		showindex(nowindex);
	});

	$(".bottom-btn span").click(function(){
		var classname = $(this).attr("class");
		var index = parseInt(classname.substr(-1,1));
		var nowindex = getcurindex();
		if((!isNaN(index)) && (index != nowindex-1))
		{
			showindex(index-1);
		}
	});

	setTimeout("autoshowindex();", 5000);
});
