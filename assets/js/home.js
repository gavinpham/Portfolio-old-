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
	$(".project-brief-badge").each(function(){
		var $badge = $(this);
		var shouldHover = false;
		//Does this project use the discipline of the current badge?
		if($main_hovered.hasClass("hcd") && $badge.hasClass("badge-hcd")){
			//If it does, force hover on the badge
			$badge.toggleClass("hcd-forced-hovered");
			shouldHover = true;
		} 
		if($main_hovered.hasClass("dev") && $badge.hasClass("badge-dev")){
			$badge.toggleClass("dev-forced-hovered");
			shouldHover = true;
		}
		if($main_hovered.hasClass("pro") && $badge.hasClass("badge-pro")){
			$badge.toggleClass("pro-forced-hovered");
			shouldHover = true;
		}
		if($main_hovered.hasClass("dsn") && $badge.hasClass("badge-dsn")){
			$badge.toggleClass("dsn-forced-hovered");
			shouldHover = true;
		}
		if($main_hovered.hasClass("biz") && $badge.hasClass("badge-biz")){
			$badge.toggleClass("biz-forced-hovered");
			shouldHover = true;
		}
		if (!(shouldHover)){
			//If it does not, fade the badge to gray
			$badge.toggleClass("faded-badge");
		}
	});
});
