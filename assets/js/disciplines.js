function show_discipline_texts(){
	$(".discipline-text-container").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-bottom");
		}, DELAY_LONG * i);
	});
}

function show_discipline_description(){
	$(".discipline-description").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-top-slow");
		}, DELAY);
	});
}

$(window).on("load", function() {
	show_discipline_texts();
	show_discipline_description();
});