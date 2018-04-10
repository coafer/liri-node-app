//code to read and set any environment variables with the dotenv package
require("dotenv").config();
//required to import the keys.js file and store it in a variable
var keys = require('./keys');
//necessary npm modules
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);


var userInput = process.argv[2];
console.log(userInput);
var userInputMore = process.argv[3];
console.log(userInputMore);

// `my-tweets`


if (userInput === "spotify-this-song"){
    // `spotify-this-song`
    //use the second command argv to search in spotify
    spoty(userInputMore);
} else if(userInput === "movie-this"){
    // `movie-this`
    //movie API-request
    movie(userInputMore);
}




// `do-what-it-says`


function spoty(songName) {
    spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        } 
       
      //console.log(JSON.stringify(data, null, 2)); 
      //Artist(s)
      console.log(JSON.stringify("Artist(s): " + data.tracks.items[0].album.artists[0].name));
      //The song's name
      console.log(JSON.stringify("The song's name: " + data.tracks.items[0].name));
      //A preview link of the song from Spotify
      console.log(JSON.stringify("A preview link of the song: " + data.tracks.items[0].preview_url));
      //The album that the song is from
      console.log(JSON.stringify("album: " + data.tracks.items[0].album.name));
      });
}

function movie(tittle){
    console.log(tittle);
}