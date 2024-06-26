var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Africa = new ol.format.GeoJSON();
var features_Africa = format_Africa.readFeatures(geojson_Africa, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Africa = new ol.source.Vector();
jsonSource_Africa.addFeatures(features_Africa);var lyr_Africa = new ol.layer.Vector({
                source:jsonSource_Africa, 
                style: style_Africa,
                title: "Africa"
            });var format_EthBoundary1 = new ol.format.GeoJSON();
var features_EthBoundary1 = format_EthBoundary1.readFeatures(geojson_EthBoundary1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EthBoundary1 = new ol.source.Vector();
jsonSource_EthBoundary1.addFeatures(features_EthBoundary1);var lyr_EthBoundary1 = new ol.layer.Vector({
                source:jsonSource_EthBoundary1, 
                style: style_EthBoundary1,
                title: "Eth_Boundary1"
            });var format_EthGeothermalSites = new ol.format.GeoJSON();
var features_EthGeothermalSites = format_EthGeothermalSites.readFeatures(geojson_EthGeothermalSites, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EthGeothermalSites = new ol.source.Vector();
jsonSource_EthGeothermalSites.addFeatures(features_EthGeothermalSites);var lyr_EthGeothermalSites = new ol.layer.Vector({
                source:jsonSource_EthGeothermalSites, 
                style: style_EthGeothermalSites,
                title: "Eth_Geothermal Sites"
            });

lyr_Africa.setVisible(true);lyr_EthBoundary1.setVisible(true);lyr_EthGeothermalSites.setVisible(true);
var layersList = [baseLayer,lyr_Africa,lyr_EthBoundary1,lyr_EthGeothermalSites];
