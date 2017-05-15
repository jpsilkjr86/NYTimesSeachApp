// click event listener for submit search button
$('#Search').on('click', function(e){
	// prevents page from reloading
	e.preventDefault();

	// declares apiKey as a variable
	var apiKey = '29733341ec5d48809c6e4c6d645d281d';

	// sets base queryURL
	var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey;

	// gets searchQ from inputSearch and adds it to queryURL
	var searchQ = 'q=' + ($('#inputSearch').val());
	queryURL += ('&' + searchQ);	

	// gets beginDate from inputStart and adds to queryURL if it's not empty
	var beginDate = $('#inputStart').val();

	if (beginDate !== "") {
		// converts date into a format we can use in the query, without any dashes
		beginDate = convertDateFormat(beginDate);

		// puts in query format
		beginDate = 'begin_date=' + beginDate;

		// adds to queryURL
		queryURL += ('&' + beginDate);
	}	

	// gets endDate from inputStart
	var endDate = $('#inputEnd').val();

	if (endDate !== "") {
		// converts date into a format we can use in the query, without any dashes
		endDate = convertDateFormat(endDate);

		// puts in query format
		endDate = 'end_date=' + endDate;

		// adds to queryURL
		queryURL += ('&' + endDate);
	}	

	// gets number of records to retrieve
	var numRecords = $('#select-num-records').val();

	if (numRecords === '10') {var page = 'page=1'; queryURL += ('&' + page);}
	if (numRecords === '20') {var page = 'page=1&page=2'; queryURL += ('&' + page);}
	if (numRecords === '30') {var page = 'page=1&page=2&page=3'; queryURL += ('&' + page);}
	if (numRecords === '40') {var page = 'page=1&page=2&page=3&page=4'; queryURL += ('&' + page);}

	
	console.log(queryURL);

	var page = '0';
	// var sampleQuery = queryURL + '&' + searchQ + '&' + page + '&' + beginDate;

	// ajax request
	$.ajax({
		url: queryURL,
		method: 'GET'
	// promise function to be carried out after ajax request
	}).done(function(response){
		var docs = response.response.docs
		console.log(docs);

		// appends a panel for every doc result
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

// converts date into one without any dashes
function convertDateFormat(d) {
	// declare bool for while loop and set initial value
	var allFinished = false;

	// declare empty string
	var convertedDate = "";

	console.log('d',d);
	console.log('convertedDate',convertedDate);

	// function cuts dashes
	function cutDashes () {
		// loop with condition
		while (!allFinished) {
			// if no dash, allFinished = true and then exit loop.
			if (d.indexOf('-') === -1) {
				convertedDate += d;
				allFinished = true;
			}
			// if dash is first character then set d equal to its substring from char 1 to the end.
			else if (d.indexOf('-') === 0) {
				d = d.substring(1);
			} 
			// if dash is somewhere else
			else {
				var dashIndex = d.indexOf('-');

				// add non-dash portion to the converted date
				convertedDate += d.substring(0, dashIndex);

				// set d equal to rest of string from the dash
				d = d.substring(dashIndex);
			}
		}
	}

	cutDashes(); 
	console.log('d',d);
	console.log('convertedDate',convertedDate);
	return convertedDate;
} // end of convertDateFormat()

	