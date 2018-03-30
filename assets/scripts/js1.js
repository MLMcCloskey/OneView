// powered by News API

//apiKey = 7d26503d0dd74f109690214b2cca28aa
// var pv= ["[[PromiseValue]]"];

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
        //   'category=technology&'+
        //   'sources=techcrunch&' +
          'apiKey=7d26503d0dd74f109690214b2cca28aa';


var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    });

$.get(url, function(data){
    console.log(data)
    $("body").html("<div id='news'><ul id='newsLinks'></ul></div>")
    for (i=0; i<5; i++){
        var link = $('<a>').attr('href', data.articles[i].url ).text(data.articles[i].title);

        $("#newsLinks").prepend('<hr>').prepend(link);
    }
});