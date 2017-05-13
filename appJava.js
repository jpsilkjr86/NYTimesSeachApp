// api key = 29733341ec5d48809c6e4c6d645d281d
var queryURL = 'https://api.nytimes/com/svc/search/v2/articlesearch.json';
//search by keyword = ?q=
//set return limit = page = 
//set start year = begin_date =

$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function(response){


});