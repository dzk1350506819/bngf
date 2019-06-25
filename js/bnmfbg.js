function obj(obj1, obj2, obj3) {
	obj1.hover(function () {
		obj1.eq($(this).index()).addClass("buytop_on").siblings().removeClass("buytop_on");
		obj2.eq($(this).index()).show().siblings(obj3).hide();
	});
}
obj($(".charts .loupan h4"), $(".charts .loupanlist ul"), $("ul"));
obj($(".charts .new h4"), $(".charts .newslist ul"), $("ul"));
obj($(".buytab tr td .buytop"), $(".buybg .bableshow table"), $(".position"));
