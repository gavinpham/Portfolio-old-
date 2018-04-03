function show_badges(){
	$(".project-brief-badge").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-badge-entrance");
		}, BADGE_DELAY * i);
	});
}

function show_project_brief_body(){
	$(".project-brief-description").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-bottom");
		}, DELAY * i);
	});
}

function show_project_brief_title(){
	$(".project-brief-title").removeClass("hidden").addClass("animation-appear-from-bottom");
}

function show_project_title(){
	$(".project-title").removeClass("hidden").addClass("animation-appear-from-bottom");
}

function show_project_details(){
	$(".project-details").removeClass("hidden").addClass("animation-appear-from-bottom");
}

function show_project_brief_image_container(){
	$(".project-brief-image-container").removeClass("hidden").addClass("animation-appear-from-bottom");
}

function show_project_brief_see_more_button(){
	$(".see-more-button").removeClass("hidden").addClass("animation-appear-from-bottom");
}

function show_project_brief_hr(){
	$("hr").removeClass("hidden").addClass("animation-gain-width");
}

function show_project_body(){
	$(".project-body").removeClass("hidden").addClass("animation-appear-from-bottom");
}

$(window).on("load", function() {
		show_project_brief_title();
		show_project_title();
		show_project_brief_image_container();
		show_project_brief_see_more_button();
		show_project_brief_hr();
		show_badges();
		setTimeout(() => {
			show_project_details();
		}, DELAY);
		setTimeout(() => {
			show_project_brief_body();
			show_project_body();
		}, DELAY_LONG);
});