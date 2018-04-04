$("#homeButtons").on("click", "#trafficBtn", function initMap() {
    $("#homeButtons").empty();
    $("#homeButtons").prepend(homeBtn);
    

    var map = new google.maps.Map(document.getElementById('homeButtons'), {
        zoom: 13,
        center: {lat: 33.794633, lng: -84.4487}
    });
// 33.794633 , -84.4487
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
})


//CHANGE THE SPOTIFY API TO STUDY PARTY SLEEP THEN CREATE GENRES BENEATH THEM