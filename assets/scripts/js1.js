$("#homeButtons").on("click", "#newsBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").append('<button type="button" class="btn btn-warning" id="homeBtn">HOME</button> <br> <button type="button" class="btn btn-success" id="techBtn">Technology</button> <br> <button type="button" class="btn btn-primary" id="usBtn">US News</button> <br> <button type="button" class="btn btn-danger" id="trafficBtn">Traffic</button>');
    // $("#buttons").show();
});

$("#homeButtons").on("click", "#homeBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").append('<button type="button" class="btn btn-danger" id="calendarBtn">Calendar</button> <br> <button type="button" class="btn btn-warning" id="weatherBtn">Weather</button> <br> <button type="button" class="btn btn-primary" id="newsBtn">News</button> <br> <button type="button" class="btn btn-success" id="musicBtn">Music</button>');
   
});