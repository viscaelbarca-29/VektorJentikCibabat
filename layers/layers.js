var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Waypoints2Waypoints_2 = new ol.format.GeoJSON();
var features_Waypoints2Waypoints_2 = format_Waypoints2Waypoints_2.readFeatures(json_Waypoints2Waypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints2Waypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints2Waypoints_2.addFeatures(features_Waypoints2Waypoints_2);
var lyr_Waypoints2Waypoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints2Waypoints_2, 
                style: style_Waypoints2Waypoints_2,
                popuplayertitle: "Waypoints (2) — Waypoints",
                interactive: true,
                title: 'Waypoints (2) — Waypoints'
            });
var format_rw9_3 = new ol.format.GeoJSON();
var features_rw9_3 = format_rw9_3.readFeatures(json_rw9_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rw9_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rw9_3.addFeatures(features_rw9_3);
var lyr_rw9_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rw9_3, 
                style: style_rw9_3,
                popuplayertitle: "rw 9",
                interactive: true,
                title: '<img src="styles/legend/rw9_3.png" /> rw 9'
            });
var format_pemkot_4 = new ol.format.GeoJSON();
var features_pemkot_4 = format_pemkot_4.readFeatures(json_pemkot_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemkot_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemkot_4.addFeatures(features_pemkot_4);
var lyr_pemkot_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemkot_4, 
                style: style_pemkot_4,
                popuplayertitle: "pemkot",
                interactive: true,
                title: '<img src="styles/legend/pemkot_4.png" /> pemkot'
            });
var format_waypointbaru_5 = new ol.format.GeoJSON();
var features_waypointbaru_5 = format_waypointbaru_5.readFeatures(json_waypointbaru_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waypointbaru_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waypointbaru_5.addFeatures(features_waypointbaru_5);
var lyr_waypointbaru_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waypointbaru_5, 
                style: style_waypointbaru_5,
                popuplayertitle: "waypoint baru",
                interactive: true,
                title: '<img src="styles/legend/waypointbaru_5.png" /> waypoint baru'
            });
var format_waypoint2_6 = new ol.format.GeoJSON();
var features_waypoint2_6 = format_waypoint2_6.readFeatures(json_waypoint2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waypoint2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waypoint2_6.addFeatures(features_waypoint2_6);
var lyr_waypoint2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waypoint2_6, 
                style: style_waypoint2_6,
                popuplayertitle: "waypoint 2",
                interactive: true,
                title: '<img src="styles/legend/waypoint2_6.png" /> waypoint 2'
            });
var format_uuaa_7 = new ol.format.GeoJSON();
var features_uuaa_7 = format_uuaa_7.readFeatures(json_uuaa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uuaa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uuaa_7.addFeatures(features_uuaa_7);
var lyr_uuaa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uuaa_7, 
                style: style_uuaa_7,
                popuplayertitle: "uuaa",
                interactive: true,
                title: '<img src="styles/legend/uuaa_7.png" /> uuaa'
            });
var format_Buffered_8 = new ol.format.GeoJSON();
var features_Buffered_8 = format_Buffered_8.readFeatures(json_Buffered_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_8.addFeatures(features_Buffered_8);
var lyr_Buffered_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_8, 
                style: style_Buffered_8,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_8.png" /> Buffered'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Waypoints2Waypoints_2.setVisible(true);lyr_rw9_3.setVisible(true);lyr_pemkot_4.setVisible(true);lyr_waypointbaru_5.setVisible(true);lyr_waypoint2_6.setVisible(true);lyr_uuaa_7.setVisible(true);lyr_Buffered_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OpenStreetMap_1,lyr_Waypoints2Waypoints_2,lyr_rw9_3,lyr_pemkot_4,lyr_waypointbaru_5,lyr_waypoint2_6,lyr_uuaa_7,lyr_Buffered_8];
lyr_Waypoints2Waypoints_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_rw9_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_pemkot_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_waypointbaru_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_waypoint2_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_uuaa_7.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints2Waypoints_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_rw9_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_pemkot_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_waypointbaru_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_waypoint2_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_uuaa_7.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Waypoints2Waypoints_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_rw9_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_pemkot_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_waypointbaru_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_waypoint2_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_uuaa_7.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});