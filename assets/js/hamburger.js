var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".navigation-list");
var nav_options = document.querySelectorAll(".nav-option");

var animation_in = "animation-expand-menu";
var animation_out = "animation-collapse-menu";
var animation_appear = "animation-appear";
var animation_disappear = "animation-disappear";
var delay = 100;	//Units: ms
var total_delay = nav_options.length * delay;

function toggleNavigationVisible(){
	if (nav.classList.contains(animation_in)){
		for (var i = nav_options.length - 1; i >= 0; i--){
			setTimeout((i) => {
				nav_options[i].classList.replace(animation_appear, animation_disappear);
			}, i * delay, i);
		}
		nav.classList.replace(animation_in, animation_out);
	} else if (nav.classList.contains(animation_out)) {	
		for (var i = 0; i < nav_options.length; i++){
			setTimeout((i) => {
				nav_options[i].classList.replace(animation_disappear, animation_appear);
			}, i * delay, i);
		}
		nav.classList.replace(animation_out, animation_in);
	} else {
		for (var i = 0; i < nav_options.length; i++){
			setTimeout((i)=>{
				console.log(i);
				nav_options[i].classList.add(animation_appear);
			}, i * delay, i);
		}
		nav.classList.add(animation_in);
	}
}

hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("is-active");
	toggleNavigationVisible();
});