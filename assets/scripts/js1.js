var rootButtons = '<button type="button" class="btn btn-danger" id="calendarBtn">Calendar</button> <br> <button type="button" class="btn btn-warning" id="weatherBtn">WEATHER</button> <br> <button type="button" class="btn btn-primary" id="newsBtn">NEWS</button> <br> <button type="button" class="btn btn-success" id="musicBtn">MUSIC</button>';
var homeBtn = '<button type="button" class="btn btn-warning" id="homeBtn">HOME</button> <br> ';
var newBtn = '<br> <button type="button" class="btn btn-success"';

$("#homeButtons").on("click", "#newsBtn", function(){
    $("#homeButtons").empty();
    $("#homeButtons").append(homeBtn+'<button type="button" class="btn btn-success" id="techBtn">TECHNOLOGY</button> <br> <button type="button" class="btn btn-primary" id="usBtn">US NEWS</button> <br> <a href="google_traffic.html"><button type="button" class="btn btn-danger" id="trafficBtn" ">TRAFFIC</button></a>');
    // $("#buttons").show();
});

$("#homeButtons").on("click", "#homeBtn", function(){
    $("#homeButtons").empty();
    $("tr").empty();
    $("#map").empty();
    $("#homeButtons").append('<button type="button" class="btn btn-warning" id="weatherBtn">WEATHER</button> <br> <button type="button" class="btn btn-primary" id="newsBtn">NEWS</button> <br> <button type="button" class="btn btn-danger" id="financeBtn">FINANCE</button> <br> <button type="button" class="btn btn-success" id="musicBtn">MUSIC</button>');   
});