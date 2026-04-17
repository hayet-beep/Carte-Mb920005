var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Zoneetudes002copie_1 = new ol.format.GeoJSON();
var features_Zoneetudes002copie_1 = format_Zoneetudes002copie_1.readFeatures(json_Zoneetudes002copie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneetudes002copie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneetudes002copie_1.addFeatures(features_Zoneetudes002copie_1);
var lyr_Zoneetudes002copie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneetudes002copie_1, 
                style: style_Zoneetudes002copie_1,
                popuplayertitle: 'Zone-etudes002 copie',
                interactive: false,
    title: 'Zone-etudes002 copie<br />\
    <img src="styles/legend/Zoneetudes002copie_1_0.png" /> Terre<br />' });
var format_Zoneetudes002_2 = new ol.format.GeoJSON();
var features_Zoneetudes002_2 = format_Zoneetudes002_2.readFeatures(json_Zoneetudes002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneetudes002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneetudes002_2.addFeatures(features_Zoneetudes002_2);
var lyr_Zoneetudes002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneetudes002_2, 
                style: style_Zoneetudes002_2,
                popuplayertitle: 'Zone-etudes002',
                interactive: false,
    title: 'Zone-etudes002<br />\
    <img src="styles/legend/Zoneetudes002_2_0.png" /> Mer<br />\
    <img src="styles/legend/Zoneetudes002_2_1.png" /> Terre<br />' });
var format_Btiments_3 = new ol.format.GeoJSON();
var features_Btiments_3 = format_Btiments_3.readFeatures(json_Btiments_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiments_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiments_3.addFeatures(features_Btiments_3);
var lyr_Btiments_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btiments_3, 
                style: style_Btiments_3,
                popuplayertitle: 'Bâtiments',
                interactive: false,
                title: '<img src="styles/legend/Btiments_3.png" /> Bâtiments'
            });
var format_Routeciotat_4 = new ol.format.GeoJSON();
var features_Routeciotat_4 = format_Routeciotat_4.readFeatures(json_Routeciotat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routeciotat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routeciotat_4.addFeatures(features_Routeciotat_4);
var lyr_Routeciotat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routeciotat_4, 
                style: style_Routeciotat_4,
                popuplayertitle: 'Route-ciotat',
                interactive: false,
                title: '<img src="styles/legend/Routeciotat_4.png" /> Route-ciotat'
            });
var format_AOT_5 = new ol.format.GeoJSON();
var features_AOT_5 = format_AOT_5.readFeatures(json_AOT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOT_5.addFeatures(features_AOT_5);
var lyr_AOT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOT_5, 
                style: style_AOT_5,
                popuplayertitle: 'AOT',
                interactive: false,
    title: 'AOT<br />\
    <img src="styles/legend/AOT_5_0.png" /> A.O.T Exterior<br />\
    <img src="styles/legend/AOT_5_1.png" /> A.O.T Interior<br />' });

lyr_Positron_0.setVisible(true);lyr_Zoneetudes002copie_1.setVisible(true);lyr_Zoneetudes002_2.setVisible(true);lyr_Btiments_3.setVisible(true);lyr_Routeciotat_4.setVisible(true);lyr_AOT_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Zoneetudes002copie_1,lyr_Zoneetudes002_2,lyr_Btiments_3,lyr_Routeciotat_4,lyr_AOT_5];
lyr_Zoneetudes002copie_1.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Zoneetudes002_2.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Btiments_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Routeciotat_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_AOT_5.set('fieldAliases', {'Id': 'Id', 'AOT': 'AOT', 'Zone': 'Zone', });
lyr_Zoneetudes002copie_1.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Zoneetudes002_2.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Btiments_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Routeciotat_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_AOT_5.set('fieldImages', {'Id': 'TextEdit', 'AOT': 'TextEdit', 'Zone': 'TextEdit', });
lyr_Zoneetudes002copie_1.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Zoneetudes002_2.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Btiments_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'header label - always visible', 'name': 'no label', 'type': 'no label', });
lyr_Routeciotat_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_AOT_5.set('fieldLabels', {'Id': 'no label', 'AOT': 'no label', 'Zone': 'no label', });
lyr_AOT_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});