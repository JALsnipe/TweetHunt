Original Code by Charlie Robbins
https://github.com/indexzero/twitter-no-backend

NOTE: I had shipped this incomplete.  I'm uploading it to github as a personal project I may improve upon in the future.

COMS W4170: User Interface Design
Steven Feiner 

Josh Lieberman
jal2238
jal2238@columbia.edu
Project 1 - Part 3: Twitter Search

Special Instrcutions: Open index.html in Google Chrome or Firefox.  Enter your keywords in the query form, a latitude/longitude/radius value in the Location entry form (I'll explain this later), and start and end dates in YEAR-MM-DD format in their respective boxes.

I had initally planned to support entering a city name in the Location form.  Due to time constraints, I was unable to create working code for this type of input.  To demopnstrate my understanding of the API, I have attempted to create an extra function that returns a Twitter Location ID to the user.  If you enter a city name in the Location box and then press the "Get Location ID" button, using an API call, the city name and location ID should print onto the main.  Unfortunatly, I was unable to get this function call to return properly as a nested function, and I was forced to use the latitude/longitude/radius call in the tweet search API.

Example of my program in action:
Query: hello
Location: 37.781157,-122.398720,10mi
Start Date: 2013-10-01
End Date:2013-10-03

Using those input values, my program returns 50 tweets.  The call returns the user's profile image, their real name, their twitter handle, the tweet text itself, and the date of the tweet.

I also implemented basic error detection.  If no tweets are found, the program will tell the user.  If invalid location data is used, the program will alert the user without displaying any error codes.

Although the program does not list the tweet search history, searches are appended to the main one after another.  If the user wishes to run another search, the results are appended to the main under the previous search.  If time allowed, I would have either cleared the main, or allowed the user to quickly jump betweens searches.

I decided to use a simple, minimalist design using Twitter Bootstrap.  I use a light blue NavBar to match the twitter blue, and named the program TweetHunt.  This makes it clear to the user that this program is for finding tweets, and is a pun on Duck Hunt.  I tried to add a few Dunk Hunt related images into the design: If an API call returns valid tweets, a picture of the Dog from Duck Hunt holding the twitter bird is shown to the user.  When a call does not return any tweets, I show the user a laughing dog, the symbol of "miss" or "Game Over" in Duck Hunt.

I use simple Bootstrap input forms, and the placeholder tag to instruct the user on what values go in each form.  I used icons from Font Awesome to hint at which values go in which forms: the keyboard for query input, the "my location" pointer for the location input, and calendars for the start and end dates.  This was my first experience with Bootstrap, JavaScript, CSS, and HTML 5.  If I were to improve this design, I probably would shorted the length of each input form, as 720px looks a little long in reflection.  I would have also liked to spend more time looking at alerts for error handling, and ScrollSpy for handling each twitter search query.  Overall, I'm content with my design.
