$(document).ready(function() {
	function initSize() {
		$(".box_mnu .panel-heading").each(function(){
			var ph = $(this).height() + 3;
			var pdt = $(this).find(".dropdown-toggle");
			pdt.height(ph);
		});

		$(".till_item .tc").each(function() {
			var parh = $(this).parent().height();
			$(this).height(parh);
		});
		var bh = $(".ben_item").height();
		$(".ben_item").each(function() {
			$(this).height(bh);
		});
	}

	alignmentByHeight(".wn_item .panel");

	initSize();

	$(window).resize(function() {
		initSize();
		// alignmentByHeight(".wn_item .panel");
	});
});

function alignmentByHeight(classname) {
    var divs = $(classname);
    var max = 0;
    for(var i=0; i<divs.length; i++) {
        max = Math.max(max, $(divs[i]).height());
    }
    $(divs).css('min-height', max+'px');
}