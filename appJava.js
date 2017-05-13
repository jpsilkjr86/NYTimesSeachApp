
$('#Search').on('click', function(e){
	e.preventDefault();

	var apiKey = '29733341ec5d48809c6e4c6d645d281d';
	var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey;

	var searchQ = 'q=' + ($('#inputSearch').val());
	console.log(searchQ);
	var beginDate = 'begin_date=20160901';
	var page = '0';
	var sampleQuery = queryURL + '&' + searchQ + '&' + page + '&' + beginDate;

	queryURL += ('&' + searchQ);



	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response){
		var docs = response.response.docs
		console.log(docs);



		for (i = 0; i < docs.length; i++) {
			var newPanel = $('<div class="panel panel-default">');

		var panelHead = $('<div class="panel-heading">');
		panelHead.text(docs[i].headline.main);

		var panelContent = $('<div class="panel-body">');
		panelContent.text(docs[i].snippet);

			newPanel.append(panelHead, panelContent);
			$('#Articles').append(newPanel);
		}

	});
});

	