// Web API Base URL: https://api.spotify.com
// Client ID 46216538f88645839c48d5ef7e413565
// Client Secret 0e9545eb55064e84b25452a1a760f744

  /* Load the HTTP library */
//   var http = require("http");

//   /* Create an HTTP server to handle responses */

//   http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }).listen(8888);
//
// Authorization url = GET https://accounts.spotify.com/authorize/?client_id=46216538f88645839c48d5ef7e413565&response_type=code

// var genre = $(this).text();
// var queryOptions = {

//}


// window.onSpotifyWebPlaybackSDKReady = () => {
//     const token = '46216538f88645839c48d5ef7e413565';
//     const player = new Spotify.Player({
//       name: 'Web Playback SDK Quick Start Player',
//       getOAuthToken: cb => { cb(token); }
//     });

//     // Error handling
//     player.addListener('initialization_error', ({ message }) => { console.error(message); });
//     player.addListener('authentication_error', ({ message }) => { console.error(message); });
//     player.addListener('account_error', ({ message }) => { console.error(message); });
//     player.addListener('playback_error', ({ message }) => { console.error(message); });

//     // Playback status updates
//     player.addListener('player_state_changed', state => { console.log(state); });

//     // Ready
//     player.addListener('ready', ({ device_id }) => {
//       console.log('Ready with Device ID', device_id);
//     });

//     // Connect to the player!
//     player.connect();
//   };

// $.ajax({
//     url: queryURL,
//     method: "GET"
// })




$("#homeButtons").on("click", "#musicBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn);
    $("#homeButtons").append('<button type="button" class="btn btn-success" id="jazzBtn">JAZZ</button> <br> <button type="button" class="btn btn-primary" id="electronicBtn">ELECTRONIC</button> <br> <button type="button" class="btn btn-danger" id="rockBtn">ROCK</button>')
});

$("#homeButtons").on("click", "#jazzBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn);
    $("#homeButtons").append('<button type="button" class="btn btn-success" id="swingJazz">SWING</button> <br> <button type="button" class="btn btn-primary" id="coolJazz">COOL</button> <br> <button type="button" class="btn btn-danger" id="bebopBtn">BEBOP</button>')
});

$("#homeButtons").on("click", "#electronicBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn);
    $("#homeButtons").append('<button type="button" class="btn btn-success" id="electroswing">ELECTROSWING</button> <br> <button type="button" class="btn btn-primary" id="downtempo">DOWNTEMPO</button> <br> <button type="button" class="btn btn-danger" id="houseBtn">HOUSE</button>')
});

$("#homeButtons").on("click", "#rockBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn);
    $("homeButtons").append('<button type="button" class="btn btn-success" id="indieBtn">INDIE</button> <br> <button type="button" class="btn btn-primary" id="bluesBtn">BLUES</button> <br> <button type="button" class="btn btn-danger" id="punkBtn">PUNK</button>')
});

//  begin code for individual playlists

// jazz list


$("#homeButtons").on("click", "#swingJazz", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

$("#homeButtons").on("click", "#coolJazz", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

$("#homeButtons").on("click", "#bebopBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

// electronic list

$("#homeButtons").on("click", "#elctroswing", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

$("#homeButtons").on("click", "#downtempo", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('<iframe src="https://open.spotify.com/embed/user/1166247682/playlist/32NRcLNr9FYhVxGFYwxHuE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
});

$("#homeButtons").on("click", "#houseBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

// Rock list


$("#homeButtons").on("click", "#indieBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

$("#homeButtons").on("click", "#bluesBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

$("#homeButtons").on("click", "#punkBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn + "<br>");
    $("#homeButtons").append('');
});

// spotify:user:1166247682:playlist:32NRcLNr9FYhVxGFYwxHuE