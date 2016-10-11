
function openLayer(f) {
    var j = $("#" + f);
    var k = j.find(".pop-close");
    var b = -((j.outerWidth()) / 2);
    var a =  -((j.outerHeight()) / 2);
	 var g = 0;

    if (!j.is(":visible")) {
        j.css({
			"margin-top": a
        }).show();
		$(".mask").addClass("blocktomove");
    }
    k.add(".mask").on("click", function() {
        if (j.is(":visible")) {
            j.hide();
		$(".mask").removeClass("blocktomove");
        }
        return false
    });
}
$(function(){
	$(".select-box select").change(function(){
		var txt=$(this).children('option:selected').text();
		$(this).siblings("label").text(txt).addClass("on");
	});

	$(".popup .select li a").click(function(){
		var txt=$(this).text();
		$(".phoneNumber .select-style button").text(txt).addClass("on");
		$(this).parent().parent().parent().parent().hide();
		$(".mask").removeClass("blocktomove");
	});

	 $(".holder").focus(function(){
		$(this).next("label").hide();
	}).blur(function(){
		var val = $(this).val();
		if(!val){
			$(this).next("label").show();
		}
	});
	$(".securityNumber1").keyup(function(){
		var val = $(this).val();
		if(val.length >= 6){
			$(".securityNumber2").focus();
		}
	});

	 $(".inputBox li input:[type!='checkbox'],.inputBox li input:[type!='radio']").focus(function(){
		 $(".oneid-wrap,.btn-area").css("position","relative");
		//$(".oneid-wrap .contain .contain-inner .white-round-box").css("min-height","13.74583333333333rem");
	 }).blur(function(){
		$(".oneid-wrap,.btn-area").css("position","absolute");
		//$(".oneid-wrap .contain .contain-inner .white-round-box").css("min-height","100%");
	 });
});
// 메인 input포커스에 따른 디자인 수정
$(function(){
	var a = false;
	$(".Main-form li:first-child input").focus(function(){
		a = true;
	});
	$(".Main-form input").focus(function(){
		$(".oneid-wrap").addClass("focus");
	}).blur(function(){
		if(a){
			$(".oneid-wrap").addClass("focus");
			a  = false;
		}else{
			$(".oneid-wrap").removeClass("focus");
		}
		
	});
});

$(function(){
	$(".btn-switch").on("click touchmove",function(){
		var role = $(this).attr("data-role");
		$(this).text(role);
		switch (role)
		{
		case "off": $(this).addClass("on"); $(this).attr("data-role","on"); break;
		case "on": $(this).removeClass("on"); $(this).attr("data-role","off"); break;
		}
	});
});
$(function(){
	$(".agre-box-style > ul > li .btn-down").click(function(){
		$(this).siblings("ul").toggle();
		$(this).toggleClass("on");
	});
	$(".agre-box-style > ul > li > .check-style2 label").click(function(){
		var obj = $(this).parent().siblings("ul").find("input");
		var chk = $(this).prev().is(":checked")  ?  obj.prop("checked", false) : obj.prop("checked", true);
	});

	$(".agre-box-style .all-chk label").click(function(){
		var obj = $(this).parent().siblings("ul").find("input");
		var chk = $(this).prev().is(":checked")  ?  obj.prop("checked", false) : obj.prop("checked", true);
	});
	
});
// 디자인 확인용
	$(function(){
		$(".inputBox  .mailBox .input-style input").keyup(function(){
			var parent = $(this).parent().parent();
			var alertBox = parent.find(".idalert");
			var obj = $(this).val();
			if( alertBox.length > 0 ){

				if( obj.length == 0 ){
					parent.removeClass("safe danger danger2");
					alertBox.hide();
				}else if( obj.length < 4 ){
					parent.removeClass("safe danger danger2");
					alertBox.hide();
					parent.addClass("safe").find(".safe").show();
				}else if(obj.length < 8 ){
					parent.removeClass("safe danger danger2");
					alertBox.hide();
					parent.addClass("danger").find(".danger").show();
				}else if(obj.length < 12 ){
					parent.removeClass("safe danger danger2");
					alertBox.hide();
					parent.addClass("danger2").find(".danger2").show();
				}else{
					parent.removeClass("safe danger danger2");
					alertBox.hide();
				}	
			}
		}).blur(function(){
			var parent = $(this).parent().parent();
			var alertBox = parent.find(".idalert");
				parent.removeClass("safe danger danger2");
				alertBox.hide();
		});
		$(".passwordBox .input-style input").keydown(function(){
			var parent = $(this).parent().parent();
			var alertBox = $(this).parent().parent().find(".pwalert");
			var obj = $(this).val();	
			if( alertBox.length > 0 ){
				if( obj.length == 0 ){
					parent.removeClass("safe danger normal");
					alertBox.hide();
				}else if( obj.length < 8 ){
					parent.removeClass("safe danger normal");
					alertBox.hide();
					parent.addClass("danger").find(".danger").show();
				}else if(obj.length < 12 ){
					parent.removeClass("safe danger normal");
					alertBox.hide();
					parent.addClass("normal").find(".normal").show();				
				}else{
					parent.removeClass("safe danger normal");
					alertBox.hide();
					parent.addClass("safe").find(".safe").show();
				}
			}
		}).focus(function(){
			$(this).parent().parent().removeClass("noicon");			
		}).blur(function(){
			var parent = $(this).parent().parent();
			var alertBox = parent.find(".pwalert");
			if($(this).val()){
				parent.removeClass("safe danger normal noicon");
				alertBox.hide();
			}else{
				parent.removeClass("safe danger normal").addClass("noicon");
				alertBox.hide();
			}
		});
		$(".passwordBox2 .input-style input").keydown(function(){
			var parent = $(this).parent().parent();
			var alertBox = parent.find(".pwalert");
			var obj = $(this).val();
			if( alertBox.length > 0 ){
				if( obj.length == 0 ){
					parent.removeClass("safe danger");
					alertBox.hide();
				}else if( obj.length < 8 ){
					parent.removeClass("safe danger");
					alertBox.hide();
					parent.addClass("danger").find(".danger").show();
				}else{
					parent.removeClass("safe danger normal");
					alertBox.hide();
					parent.addClass("safe").find(".safe").show();
				}
			}
		}).focus(function(){
			$(this).parent().parent().removeClass("noicon");			
		}).blur(function(){
			var parent = $(this).parent().parent();
			var alertBox = parent.find(".pwalert");
			if($(this).val()){
				parent.removeClass("safe danger normal noicon");
				alertBox.hide();
			}else{
				parent.removeClass("safe danger normal").addClass("noicon");
				alertBox.hide();
			}
		});
		
	});
