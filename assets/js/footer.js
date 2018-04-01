var GLYPH_DELAY = 600;

function show_footer_glyphs(){
	$(".footer-glyph").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-bottom-slow");
		}, GLYPH_DELAY);
	});
}

$(window).on("load", function() {
	show_footer_glyphs();
});