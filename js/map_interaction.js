var initCenterXY =  [45.709736, 3.076172];
var initZoom = 6;

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var OpenStreetMap_BLK = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://opentopomap.org/" target="_blank">Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var IGN_Plan_actuel = L.tileLayer.wms('https://wxs.ign.fr/cartes/geoportail/r/wms?', {
    layers: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
    maxZoom: 21,
    attribution : 'IGN'
});

var IGN_Scan1950_Histo = L.tileLayer.wms('https://wxs.ign.fr/cartes/geoportail/r/wms?', {
    layers: 'GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN50.1950',
    maxZoom: 21,
    attribution : 'IGN'
});

var IGN_EtatMajor40 = L.tileLayer.wms('https://wxs.ign.fr/cartes/geoportail/r/wms?', {
    layers: 'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40',
    maxZoom: 21,
    attribution : 'IGN'
});

var Ehess_IGN_Cassini = L.tileLayer.wms('https://ws.sogefi-web.com/wms?', {
    layers: 'Carte_Cassini',
    maxZoom: 21,
    attribution : 'EHESS/IGN/SOGEFI'
});

var baseLayers = {
    "Humanitarian" : OpenStreetMap_HOT,
    "Black" : OpenStreetMap_BLK,
    "OpenTopoMap" : OpenTopoMap,
    "Plan IGN" : IGN_Plan_actuel,
    "IGN Scan50 Histo" : IGN_Scan1950_Histo,
    "IGN Etat-Major 40" : IGN_EtatMajor40,
    "Carte de Cassini" : Ehess_IGN_Cassini,
};

let map = L.map('mapid', {
    center: initCenterXY,
    zoom: initZoom,
    minZoom: 6,
    maxZoom: 21
});

baseLayers['Humanitarian'].addTo(map);

var layerControl = L.control.layers(baseLayers, [], {collapsed:true, position: 'topright'})
    layerControl.addTo(map);

map.setView([43.6, 1.433], 13); // Remplacez par vos coordonnées et niveau de zoom