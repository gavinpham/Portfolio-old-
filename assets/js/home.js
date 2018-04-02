function show_featured_projects(){
	$(".featured-project").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-appear-from-bottom");
		}, DELAY * i);
	});
}

function show_badges(){
	$(".project-brief-badge").each(function(i){
		var $this = $(this);
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("animation-badge-entrance");
		}, BADGE_DELAY * i);
	});
}

function show_subheaders(){
	$(".sub-header").each(function(i){
		var $this = $(this);
		var temp_delay = () => {
			if($this.is(":last-child")){
				return TYPE_DELAY_LAST_ELEMENT + TYPE_DELAY;
			} else {
				return TYPE_DELAY * i;
			}
		};
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("typewriter");
		}, temp_delay());
	});
}

function show_content_label(){
	$(".content-label").removeClass("hidden").addClass("animation-appear-from-bottom-slow");
	$(".accent-line").removeClass("hidden").addClass("animation-gain-height");
}

function show_content_label_mobile(){
	$(".content-label-mobile").removeClass("hidden").addClass("animation-appear-from-top-slow");
	$(".accent-line-mobile").removeClass("hidden").addClass("animation-gain-width");
}

$(window).on("load", function() {
	show_subheaders();
	show_featured_projects();
	setTimeout(() => {
		show_badges();
		show_content_label();
	}, ANIMATION_DELAY);
	setTimeout(() => {
		show_content_label_mobile();
	}, ANIMATION_DELAY_LONG);
});

$(".featured-project").hover(function(){
	var $main_hovered = $(this);
	if($main_hovered.hasClass("dev")) {
		$(".project-brief-badge").each(function(){
			var $curr_badge = $(this);
			if($curr_badge.hasClass("badge-dev")){
				$curr_badge.toggleClass("dev-forced-hovered");
			} else {
				$curr_badge.toggleClass("faded-badge");
			}
		});
	}
	if($main_hovered.hasClass("hcd")) {
		$(".project-brief-badge").each(function(){
			var $curr_badge = $(this);
			if($curr_badge.hasClass("badge-hcd")){
				$curr_badge.toggleClass("hcd-forced-hovered");
			} else {
				$curr_badge.toggleClass("faded-badge");
			}
		});
	}
	if($main_hovered.hasClass("pro")) {
		$(".project-brief-badge").each(function(){
			var $curr_badge = $(this);
			if($curr_badge.hasClass("badge-pro")){
				$curr_badge.toggleClass("pro-forced-hovered");
			} else {
				$curr_badge.toggleClass("faded-badge");
			}
		});
	}
});