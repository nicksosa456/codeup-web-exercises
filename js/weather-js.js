
mapboxgl.accessToken = mapToken;

geocode('San Antonio, TX', mapToken).then(function(SATX) {
    var sanAntonio = SATX;
    var mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v10',
        zoom: 10,
        center: sanAntonio
    };
    var map = new mapboxgl.Map(mapOptions);
});

var icons = [
    {
        icon: "clear-day",
        name: "Sunny",
        summary: "Clear, sunny day",
        url: "icons/climacons/SVG/Sun.svg"
    },
    {
        icon: "clear-night",
        name: "Clear",
        summary: "Clear night sky",
        url: "icons/climacons/SVG/Moon.svg"
    },
    {
        icon: "rain",
        name: "Rain",
        summary: "Rainy day",
        url: "icons/climacons/SVG/Cloud-Rain.svg"
    },
    {
        icon: "snow",
        name: "Snow",
        summary: "Snowfall today",
        url: "icons/climacons/SVG/Cloud-Snow.svg"
    },
    {
        icon: "sleet",
        name: "Sleet",
        summary: "Sleet today",
        url: "icons/climacons/SVG/Cloud-Snow-Alt.svg"
    },
    {
        icon: "wind",
        name: "Windy",
        summary: "High winds",
        url: "icons/climacons/SVG/Wind.svg"
    },
    {
        icon: "fog",
        name: "Foggy",
        summary: "Foggy day",
        url: "icons/climacons/SVG/Cloud-Fog.svg"
    },
    {
        icon: "cloudy",
        name: "Cloudy",
        summary: "Cloudy day",
        url: "icons/climacons/SVG/Cloud.svg"
    },
    {
        icon: "partly-cloudy-day",
        name: "Cloudy",
        summary: "Partly cloudy",
        url: "icons/climacons/SVG/Cloud-Sun.svg"
    },
    {
        icon: "partly-cloudy-night",
        name: "Cloudy",
        summary: "Partly Cloudy",
        url: "icons/climacons/SVG/Cloud-Moon.svg"
    }
];


var cycleDays = function(d, index){
    var day = $(".day"+index);
    var forecast;
    var icon;
    var summary;
    var buildHTML = function (w, i) {
        var weatherType = function(){
            icons.forEach(function (ele) {
                if (w.daily.data[i].icon === ele.icon){
                    forecast = ele.name;
                    summary = ele.summary;
                    icon = ele.url;
                }
            });
        };
        weatherType();
        day.html('');
        day.append("<h4>"+Math.round(w.daily.data[i].temperatureHigh)+"º/"
            +Math.round(w.daily.data[i].temperatureLow)+"º</h4>"
            +"\n <img src='"+icon+"' alt=''> \n"+"<p><span>"+forecast+":</span> "+summary
            +"</p>\n<p><span>Humidity:</span> "+ Math.round(w.daily.data[i].humidity*100)
            +"</p>\n<p><span>Wind:</span> "+w.daily.data[i].windSpeed
            +"</p>\n<p><span>Pressure:</span> "+w.daily.data[i].pressure+"</p>");
    };
    buildHTML(d, index);
};

$.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyToken+"/29.4241,-98.4936").done(function(data) {
    console.log(data);
    for (var x = 0; x <=2; x++) {
        cycleDays(data, x);
    }}).fail(function(jqXhr, status, error) {
        console.log("Response status: " + status);
        console.log("Error object: " + error);
    });



$('#latLongSubmit').click(function(){
    var userLat = $('#latitude').val();
    var userLong = $('#longitude').val();
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+darkSkyToken+"/"+userLat+","+userLong).done(function(data) {
        console.log(data);
        for (var x = 0; x <=2; x++) {
            cycleDays(data, x);
        }}).fail(function(jqXhr, status, error) {
        console.log("Response status: " + status);
        console.log("Error object: " + error);
    });
});