/* CONSTANTS */
var DELAY = 120;		//Units: ms
var BADGE_DELAY = 100;
var TYPE_DELAY = 900;
var TYPE_DELAY_LAST_ELEMENT = 600;
var ANIMATION_DELAY = 500;

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
				console.log("Last");
				return TYPE_DELAY_LAST_ELEMENT + TYPE_DELAY;
			} else {
				console.log("Not last");
				console.log(i)
				return TYPE_DELAY * i;
			}
		};
		setTimeout(() => {
			$this.removeClass("hidden");
			$this.addClass("typewriter");
		}, temp_delay());
	});
}

$(window).on("load", function() {
	show_subheaders();
	show_featured_projects();
	setTimeout(() => {
		show_badges();
	}, ANIMATION_DELAY);
});