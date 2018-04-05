var queryURL = "https://api.nytimes.com/svc/topstories/v2/business.json";
queryURL += '?' + $.param({
    'api-key': "c4e81bd625614e2ba183058baa5c64a5"
});
$.ajax({
    url: queryURL,
    method: 'GET',
}).done(function (result) {
    console.log(result);
    //   var results = result.response.docs;
    //   for (var i = 0; i < results.length; i++) {
    //       createElement('h1', results[i].title.main);
    //       createP(results[i].abstract);
    //  }
    document.getElementById("title").innerHTML = result.results["0"].title;
    document.getElementById("title1").innerHTML = result.results["1"].title;
    document.getElementById("title2").innerHTML = result.results["2"].title;
    document.getElementById("title3").innerHTML = result.results["3"].title;
    document.getElementById("title4").innerHTML = result.results["4"].title;
    document.getElementById("title5").innerHTML = result.results["5"].title;
    document.getElementById("title6").innerHTML = result.results["6"].title;
    document.getElementById("title7").innerHTML = result.results["7"].title;
    document.getElementById("title8").innerHTML = result.results["8"].title;
    document.getElementById("title9").innerHTML = result.results["9"].title;

    document.getElementById("abstract").innerHTML = result.results["0"].abstract;
    document.getElementById("abstract1").innerHTML = result.results["1"].abstract;
    document.getElementById("abstract2").innerHTML = result.results["2"].abstract;
    document.getElementById("abstract3").innerHTML = result.results["3"].abstract;
    document.getElementById("abstract4").innerHTML = result.results["4"].abstract;
    document.getElementById("abstract5").innerHTML = result.results["5"].abstract;
    document.getElementById("abstract6").innerHTML = result.results["6"].abstract;
    document.getElementById("abstract7").innerHTML = result.results["7"].abstract;
    document.getElementById("abstract8").innerHTML = result.results["8"].abstract;
    document.getElementById("abstract9").innerHTML = result.results["9"].abstract;

    document.getElementById("byline").innerHTML = result.results["0"].byline;
    document.getElementById("byline1").innerHTML = result.results["1"].byline;
    document.getElementById("byline2").innerHTML = result.results["2"].byline;
    document.getElementById("byline3").innerHTML = result.results["3"].byline;
    document.getElementById("byline4").innerHTML = result.results["4"].byline;
    document.getElementById("byline5").innerHTML = result.results["5"].byline;
    document.getElementById("byline6").innerHTML = result.results["6"].byline;
    document.getElementById("byline7").innerHTML = result.results["7"].byline;
    document.getElementById("byline8").innerHTML = result.results["8"].byline;
    document.getElementById("byline9").innerHTML = result.results["9"].byline;

    document.getElementById("image").src = result.results["0"].multimedia[3].url;
    document.getElementById("image1").src = result.results["1"].multimedia[3].url;
    document.getElementById("image2").src = result.results["2"].multimedia[3].url;
    document.getElementById("image3").src = result.results["3"].multimedia[3].url;
    document.getElementById("image4").src = result.results["4"].multimedia[3].url;
    document.getElementById("image5").src = result.results["5"].multimedia[3].url;
    document.getElementById("image6").src = result.results["6"].multimedia[3].url;
    document.getElementById("image7").src = result.results["7"].multimedia[3].url;
    document.getElementById("image8").src = result.results["8"].multimedia[3].url;
    document.getElementById("image9").src = result.results["9"].multimedia[3].url;


    $("#url").append("<a href=" + result.results["0"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url1").append("<a href=" + result.results["1"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url2").append("<a href=" + result.results["2"].url + " " + 'target="_blank"' + ">" +
        "Article Link"+ "</a>");
    $("#url3").append("<a href=" + result.results["3"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url4").append("<a href=" + result.results["4"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url5").append("<a href=" + result.results["5"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url6").append("<a href=" + result.results["6"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url7").append("<a href=" + result.results["7"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url8").append("<a href=" + result.results["8"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>");
    $("#url9").append("<a href=" + result.results["9"].url + " " + 'target="_blank"' + ">" +
        "Article Link" + "</a>")

}).fail(function (err) {
    throw err;
});