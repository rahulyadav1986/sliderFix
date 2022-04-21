sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
	$("#slider > div#1").fadeIn(900);
	startSlider();

});

function startSlider() {
		count = $("#slider > div").size();

		function loop() {
			$("#slider > div").fadeOut(900);
			$("#slider > div#" + sliderNext).fadeIn(900);

			sliderInt = sliderNext;
			sliderNext = sliderNext + 1;

			if(sliderNext > count) {
			sliderNext = 1;
			}
		}

		interval = setInterval(loop, 3000);

		$("#slider").hover(function() {
			clearInterval(interval);
			$("span").fadeIn(0);
		}, function() {
			interval = setInterval(loop, 3000);
			$("span").fadeOut(0);
		});


		$("a.left").click(function() {
			clearInterval(interval);

			sliderNext = sliderInt - 1;
			if(sliderInt == 1) {
				sliderNext = 4;	
			}

			$("#slider > div").fadeOut(900);
			$("#slider > div#" + sliderNext).fadeIn(900);

			sliderInt = sliderNext;
			sliderNext = sliderNext + 1;

			if(sliderNext > count) {
			sliderNext = 1;
			}

			interval = setInterval(loop, 3000);
		});


		$("a.right").click(function() {
			clearInterval(interval);

			sliderNext = sliderInt + 1;
			if(sliderInt == 4) {
				sliderNext = 1;	
			}

			$("#slider > div").fadeOut(900);
			$("#slider > div#" + sliderNext).fadeIn(900);

			sliderInt = sliderNext;
			sliderNext = sliderNext + 1;

			if(sliderNext > count) {
			sliderNext = 1;
			}

			interval = setInterval(loop, 3000);
		});

	};