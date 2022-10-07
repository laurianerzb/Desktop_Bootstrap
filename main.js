$(document).ready(function(){
	$('.headline').height($(window).height());
})
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".headline").style.height = window.innerHeight + "px";
})