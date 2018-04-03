function show_contact_body(){
	$(".contact-cascade-entry").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-bottom");
		}, DELAY_LONG * i);
	});
}

function show_contact_image(){
	$(".contact-image-container").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-bottom");
		}, DELAY_LONG * i);
	});
}

$(window).on("load", function() {
	show_contact_body();
	show_contact_image();
});