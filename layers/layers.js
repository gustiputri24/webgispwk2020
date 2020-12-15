var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_surakartatitikacuan_1 = new ol.format.GeoJSON();
var features_surakartatitikacuan_1 = format_surakartatitikacuan_1.readFeatures(json_surakartatitikacuan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surakartatitikacuan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surakartatitikacuan_1.addFeatures(features_surakartatitikacuan_1);
var lyr_surakartatitikacuan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_surakartatitikacuan_1, 
                style: style_surakartatitikacuan_1,
                interactive: true,
                title: '<img src="styles/legend/surakartatitikacuan_1.png" /> surakarta titik acuan'
            });
var format_bookshop_2 = new ol.format.GeoJSON();
var features_bookshop_2 = format_bookshop_2.readFeatures(json_bookshop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bookshop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bookshop_2.addFeatures(features_bookshop_2);
var lyr_bookshop_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bookshop_2, 
                style: style_bookshop_2,
                interactive: true,
                title: '<img src="styles/legend/bookshop_2.png" /> bookshop'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_surakartatitikacuan_1.setVisible(true);lyr_bookshop_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_surakartatitikacuan_1,lyr_bookshop_2];
lyr_surakartatitikacuan_1.set('fieldAliases', {'id': 'id', });
lyr_bookshop_2.set('fieldAliases', {'id': 'id', 'origin_id': 'origin_id', 'title': 'title', 'label': 'label', 'distance': 'distance', 'categories': 'categories', });
lyr_surakartatitikacuan_1.set('fieldImages', {'id': '', });
lyr_bookshop_2.set('fieldImages', {'id': '', 'origin_id': '', 'title': '', 'label': '', 'distance': '', 'categories': '', });
lyr_surakartatitikacuan_1.set('fieldLabels', {'id': 'no label', });
lyr_bookshop_2.set('fieldLabels', {'id': 'no label', 'origin_id': 'no label', 'title': 'no label', 'label': 'no label', 'distance': 'no label', 'categories': 'no label', });
lyr_bookshop_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});