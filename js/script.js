"use strict";

(function(){
	var sideBarToggle = false;
	var date = "";

	window.onload = function() {
		if (typeof(Storage) !== "undefined") {
		    console.log("Local Storage is supported on this browser!");
		} else {
		    console.log("Local Storage is NOT supported on this browser!");
		}

		startCountDown("2016/08/26", '%w', "week");
		startCountDown("2016/08/26", '%d', "day");
		startCountDown("2016/08/26", '%H', "hour");
		startCountDown("2016/08/26", '%M', "minute");
		startCountDown("2016/08/26", '%S', "second");

		eventListeners();
	}

	function startCountDown(date, timeValue, id) {
		$("#" + id).countdown(date, function(event) {
			$(this).text(
				event.strftime(timeValue)
			);
		});
		console.log("running");

		if ($(id).innerHTML == "0") {

		}
	}

	function eventListeners () {
		$("#edit").click(function(){
			if (sideBarToggle == false) {
				$("#settings_container").css("margin-left", "0");
				$("#outer_container").css("margin-left", "560px");
				$("#outer_container").css("opacity", "0");

				$("#icon").css("transition", "opacity 0.7s ease");
				$("#icon").css("opacity", "0");
				
			} else {
				$("#settings_container").css("margin-left", "-560px");
				$("#outer_container").css("margin-left", "0px");
				$("#outer_container").css("opacity", "1");

				$("#icon").css("opacity", "0.5");
				$("#icon").css("transition", "opacity 0.2s ease");
			}
			sideBarToggle = !sideBarToggle;
		});
	}
})();