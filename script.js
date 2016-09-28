$(document).ready(function() {


	$("#searchItem").keypress(function(e) {
		if(e.keyCode === 13) {

		var searchItem = $("#searchItem").val();
		var url  = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchItem + "&format=json&callback=?";
		

		$.ajax({
			url:url,
			type:"GET",
			dataType:"json",
			success:function(json) {
				console.log(json);

				$("#content").empty();

				for(var i=0;i<json[1].length;i++) {

					$("#content").append("<a href = " + json[3][i] + ">" + "<div class = 'well styleContent'>" + "<strong>" + json[1][i] + "</strong>" + "<p>" + json[2][i] + "</p>" + "</div>" + "</a>");
				}

				if(json[1].length === 0) {

					$("#content").append("<div class = 'well'>" + "<strong>" + "oops..." + searchItem + " not found</strong>" + "</div>");
				}
			}

		});

	}
});


	$("#search").on("click",function() {

		var searchItem = $("#searchItem").val();
		var url  = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchItem + "&format=json&callback=?";
		

		$.ajax({
			url:url,
			type:"GET",
			dataType:"json",
			success:function(json) {
				console.log(json);

				$("#content").empty();

				for(var i=0;i<json[1].length;i++) {

					$("#content").append("<a href = " + json[3][i] + ">" + "<div class = 'well styleContent'>" + "<strong>" + json[1][i] + "</strong>" + "<p>" + json[2][i] + "</p>" + "</div>" + "</a>");
				}

				if(json[1].length === 0) {

					$("#content").prepend("<div class = 'well'>" + "<p>" + searchItem + " not found</p>" + "</div>");
				}
			}

		});

	});

});