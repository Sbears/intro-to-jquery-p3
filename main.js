$(document).on('ready', function() {
  	$("button").on("click", function() {
  	var pop = $("<div><p>This is text inside a p element inside a div that is built with jQuery.</p><button>close</button></div>")
  		.addClass("popUp");
  		$("body").append(pop);
	});

});

