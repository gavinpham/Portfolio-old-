var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".navigation-list");
var nav_options = document.querySelectorAll(".nav-option");
var nav_options_length = nav_options.length;

var animation_expand_menu = "animation-expand-menu";
var animation_collapse_menu = "animation-collapse-menu";
var animation_appear = "animation-appear";
var animation_disappear = "animation-disappear";
var delay = 100;	//Units: ms
var delay_short = 40;
var total_delay = nav_options_length * delay;

function hideNavigationItems(){
	//	Animate list elements to disappear, starting from the last element
	for (var i = nav_options_length - 1; i >= 0; i--){
		setTimeout((i) => {
			nav_options[i].classList.replace(animation_appear, animation_disappear);
		}, (nav_options_length - 1 - i) * delay_short, i);
	}
}

function collapseNavigation(){
	nav.classList.replace(animation_expand_menu, animation_collapse_menu);
}

function showNavigationItems(){
	//	Animate list elements to appear, starting from the first element
	for (var i = 0; i < nav_options_length; i++){
		setTimeout((i) => {
			nav_options[i].classList.replace(animation_disappear, animation_appear);
		}, i * delay + 100, i);
	}
}

function expandNavigation(){
	nav.classList.replace(animation_collapse_menu, animation_expand_menu);
}

function initialMenuShow(){
	//	Animate list elements to appear, starting from the first element.
	for (var i = 0; i < nav_options_length; i++){
		setTimeout((i)=>{
			console.log(i);
			nav_options[i].classList.add(animation_appear);
		}, i * delay + 100, i);
	}
	nav.classList.add(animation_expand_menu);
}

function toggleNavigationVisible(){
	if (nav.classList.contains(animation_expand_menu)){
		hideNavigationItems();
		collapseNavigation();
	} else if (nav.classList.contains(animation_collapse_menu)) {
		showNavigationItems();
		expandNavigation();
	} else {
		//	This call is executed only on the first click to the hamburger.
		//	It stops us from putting CSS inline on the HTML, which bothers me for stylistic reasons.
		initialMenuShow();
	}
}

hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("is-active");
	toggleNavigationVisible();
});