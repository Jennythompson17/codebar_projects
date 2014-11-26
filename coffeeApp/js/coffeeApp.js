
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/jennythompson17.kaj10o0p/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);



var marker = L.marker([51.5, -0.09]).addTo(map);



//https://a.tiles.mapbox.com/v4/jennythompson17.kaj10o0p/page.html?access_token=pk.eyJ1IjoiamVubnl0aG9tcHNvbjE3IiwiYSI6IlNPMW1YdzgifQ.Q-EcDnWBLm92YnrJBmXH5Q#4/51.51/-0.09