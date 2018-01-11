var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".navigation-list");
var nav_options = document.querySelectorAll(".nav-option");
var nav_options_length = nav_options.length;

var animation_expand_menu = "animation-expand-menu";
var animation_collapse_menu = "animation-collapse-menu";
var animation_appear = "animation-appear";
var animation_disappear = "animation-disappear";
var delay = 120;	//Units: ms
var total_delay = nav_options_length * delay;

function toggleNavigationVisible(){
	if (nav.classList.contains(animation_expand_menu)){
		//	Animate list elements to disappear, starting from the last element
		for (var i = nav_options_length - 1; i >= 0; i--){
			setTimeout((i) => {
				nav_options[i].classList.replace(animation_appear, animation_disappear);
			}, (nav_options_length - 1 - i) * delay, i);
		}
		nav.classList.replace(animation_expand_menu, animation_collapse_menu);
	} else if (nav.classList.contains(animation_collapse_menu)) {
		//	Animate list elements to appear, starting from the first element
		for (var i = 0; i < nav_options_length; i++){
			setTimeout((i) => {
				nav_options[i].classList.replace(animation_disappear, animation_appear);
			}, i * delay + 100, i);
		}
		nav.classList.replace(animation_collapse_menu, animation_expand_menu);
	} else {
		//	Animate list elements to appear, starting from the first element.
		//	This call is executed only on the first click to the hamburger.
		for (var i = 0; i < nav_options_length; i++){
			setTimeout((i)=>{
				console.log(i);
				nav_options[i].classList.add(animation_appear);
			}, i * delay + 100, i);
		}
		nav.classList.add(animation_expand_menu);
	}
}

hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("is-active");
	toggleNavigationVisible();
});