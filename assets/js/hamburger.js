var nav = $(".navigation-list");
var nav_options = $(".nav-option");
var nav_options_length = nav_options.length;

var animation_expand_menu = "animation-expand-menu";
var animation_collapse_menu = "animation-collapse-menu";
var animation_appear = "animation-appear";
var animation_disappear = "animation-disappear";

function hideNavigationItems(){
	//	Animate list elements to disappear, starting from the last element
	for (var i = nav_options_length - 1; i >= 0; i--){

		setTimeout((i) => {
			nav_options[i].classList.replace(animation_appear, animation_disappear);
		}, (nav_options_length - 1 - i) * MENU_CLOSE_DELAY, i);
	}
}

function collapseNavigation(){
	nav.removeClass(animation_expand_menu).addClass(animation_collapse_menu);
}

function showNavigationItems(){
	//	Animate list elements to appear, starting from the first element
	for (var i = 0; i < nav_options_length; i++){
		setTimeout((i) => {
			nav_options[i].classList.replace(animation_disappear, animation_appear);
		}, i * MENU_OPEN_DELAY + MENU_OPEN_DELAY, i);
	}
}

function expandNavigation(){
	nav.removeClass(animation_collapse_menu).addClass(animation_expand_menu);
}

function initialMenuShow(){
	//	Animate list elements to appear, starting from the first element.
	for (var i = 0; i < nav_options_length; i++){
		setTimeout((i)=>{
			console.log(i);
			nav_options[i].classList.add(animation_appear);
		}, i * MENU_OPEN_DELAY + MENU_OPEN_DELAY, i);
	}
	nav.addClass(animation_expand_menu);
}

function toggleNavigationVisible(){
	if (nav.hasClass(animation_expand_menu)){
		hideNavigationItems();
		collapseNavigation();
	} else if (nav.hasClass(animation_collapse_menu)){
		showNavigationItems();
		expandNavigation();
	} else {
		//	This call is executed only on the first click to the hamburger.
		//	It stops us from putting CSS inline on the HTML, which bothers me for stylistic reasons.
		initialMenuShow();
	}
}

$(".hamburger").on('click', function(){
	$(this).toggleClass("is-active");
	toggleNavigationVisible();
});
