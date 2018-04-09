//code to read and set any environment variables with the dotenv package
require("dotenv").config();
//required to import the keys.js file and store it in a variable
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);


var userInput = process.argv[2];
console.log(userInput);
var userInputMore = process.argv[3];
console.log(userInputMore);

// `my-tweets`

// `spotify-this-song`
if (userInput === "spotify-this-song"){
    //use the second command argv to search in spotify
    spoty(userInputMore);
}

// `movie-this`


// `do-what-it-says`


function spoty(songName) {
    spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      //console.log(JSON.stringify(data, null, 2)); 
      console.log(JSON.stringify(data.tracks.items[0].album.artists[0].external_urls));
      });
}