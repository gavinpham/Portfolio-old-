function show_about_body(){
	$(".about-cascade-entry").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-bottom");
		}, DELAY * i);
	});
}

$(window).on("load", function() {
	show_about_body();
});