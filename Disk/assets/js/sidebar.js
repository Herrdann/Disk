/* Styles Switcher */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	$("#color-style-switcher .bottom a.settings").click(function(e){
		e.preventDefault();
		var div = $("#color-style-switcher");
		if (div.css("left") === "-145px") {
			$("#color-style-switcher").animate({
				left: "0px"
			});
		} else {
			$("#color-style-switcher").animate({
				left: "-145px"
			});
		}
	})
});

jQuery('body').append('' + 
	'<div id="color-style-switcher">' +
		'<div>' +
			'<ul class="colors">' +
				'<li><a class="lni-bug bug" href="mailto: informativnihnuj@gmail.com" style="font-size: 24px" target="_blank"></a></li>' +
				'<li>&nbsp;</li>' +
				'<li>&nbsp;</li>' +
				'<li><a class="lni-files add-file" href="https://drive.google.com/open?id=1TrKmtKu5SLjWVC4jSLYN5HIhdgW80_1v" style="font-size: 24px" target="_blank"></a></li>' +
				'<li>&nbsp;</li>' +
				'<li>&nbsp;</li>' +
				'<li><a class="lni-mastercard donate" href="/HTML/maintenance.html" style="font-size: 24px"></a></li>' +
			'</ul>' +
		'</div>' +
		'<div class="bottom"><a href="#" class="settings" style="color: darkgoldenrod"><i class="lni-bulb"></i></a> </div>' +
	'</div>' +
'');
