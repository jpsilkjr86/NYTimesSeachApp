<<<<<<< HEAD
var apiKey = '29733341ec5d48809c6e4c6d645d281d';
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey;

var searchQ = 
var sampleQuery = 'q=dogs&page=0&begin_date=20160901';


queryURL += sampleQuery;
=======
// api key = 29733341ec5d48809c6e4c6d645d281d
var queryURL = 'https://api.nytimes/com/svc/search/v2/articlesearch.json';
>>>>>>> e762175dadea90690071a41bf63cb9e7ede6ad9d
//search by keyword = ?q=
//set return limit = page = 
//set start year = begin_date =

$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function(response){
<<<<<<< HEAD
	var docs = response.response.docs
	console.log(docs);
=======

>>>>>>> e762175dadea90690071a41bf63cb9e7ede6ad9d

});