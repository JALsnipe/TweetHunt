$(function () {
  // $('.main').append('<h3>jQuery is ready</h3>');
  // $('.main').append('<hr/>');

  var matchers = [
    'consumer_key',
    'consumer_secret',
    'access_token',
    'access_token_secret'
  ].map(function (name) {
    return new RegExp('^(' + name + ')=([\\w-]+)$')
  });
  
  var values = window.location.search.slice(1).split('&')
    .reduce(function (all, value) {
      matchers.forEach(function (re) {
        var match
        if ((match = re.exec(value))) {
          all[match[1]] = match[2];
        }
      });

      return all;
    }, {});
  
  // $('.main').append(
  //   '<h3>Using Twitter credentials</h3>' + 
  //   '<ul>' + Object.keys(values).map(function (param) {
  //     return '<li><b>' + param + '</b>: ' + values[param] + '</li>'
  //   }).join('') + '</ul>' + '<hr/>'
  // );
  


  // $('.main').append('<h3>Requesting users_show for indexzero</h3>');
  
  // All keys are in single quotes ('[key]')
  window.client = new Codebird;
  window.client.setConsumerKey([Consumer key], [Consumer secret]);
  window.client.setToken([Access token], [Access token secret]);


});

$(document).ready(function(){

  // Click handeler for Location ID calculation
  	$('#loc_button').click (function(e){
      get_loc($("#location_input").val());
    });

  // Click handeler for "Search" button
	$('#query_button').click (function(e){
		do_query($( "#query_input" ).val(), $("#location_input").val(), $("#start_input").val(),
		$("#end_input").val());
		
	});
});

var newloc = "";
function get_loc(location) {
   client.__call(
    "geo_search",
    { query : $("#location_input").val() },

    function(reply) {
      console.log(reply);
      if(reply['result']['places'].length == 0) {
      console.log("No results found with that location name.");
      $("#temp").append("No results found with that location name." + "<br> <br>");  // Error handling
      }
      newloc = reply['result']['places'][0]['id'];
      console.log(newloc);
      $("#temp").append(reply['result']['places'][0]['full_name'] + " " + reply['result']['places'][0]['id'] + "<br> <br>"); // Prints the city name and Location ID
  })}

// This function is the main client call to return tweets
function do_query(query, location, startdate, enddate){

    window.client.__call(
    "search_tweets",
    { 
      // q : query + "place:" + newloc, 
      q : query, // The query specified by the user
    	count : '50', // To properly return 50 tweets
    	geocode : location, // This is for the Lat, Lon, Radius input.
    	since : startdate, // Start date
    	until : enddate }, // End date
    function (reply) {
    console.log(reply);

      if(reply['statuses'].length == 0) {
        $("#temp").append("<img src='http://i.imgur.com/qz1S0HI.gif' height='50'>" + "No results found. :(" + "<br><br>") // If array is of length zero
      } else {
        $("#temp").append("<img src='http://i.imgur.com/QZ5fON0.png' height='50'>" + "  " + "Got " + reply['statuses'].length + " results!" + "<br> <br>" + "")  // Got some results, print them
      }


      // Printing the results
      for(var i = 0; i < reply['statuses'].length; i++) {
      		$("#temp").append(
      		
          "<img src='" + reply['statuses'][i]['user']['profile_image_url']+ "'> </img>" + "<br>"+  // User's profile image
      		reply['statuses'][i]['user']['name']+"<br>"+  // User's real name
          "@" + reply['statuses'][i]['user']['screen_name']+"<br>"+  // User's twitter username, remember to append '@'
      		reply['statuses'][i]['text']+"<br>"+ // The tweet itself
          reply['statuses'][i]['created_at']+"<br>"+"<br>"); // Date tweeted
      	}
    }
  );
}