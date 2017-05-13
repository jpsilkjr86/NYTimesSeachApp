
var apiKey = '29733341ec5d48809c6e4c6d645d281d';
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey;

var searchQ = 'q=dogs';
var beginDate = 'begin_date=20160901';
var page = '0';
var sampleQuery = queryURL + '&' + searchQ + '&' + page + '&' + beginDate;




$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function(response){
	var docs = response.response.docs
	console.log(docs);


});