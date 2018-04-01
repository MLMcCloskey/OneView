// Web API Base URL: https://api.spotify.com
// Client ID 46216538f88645839c48d5ef7e413565
// Client Secret 0e9545eb55064e84b25452a1a760f744
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