var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriGraylight_1 = new ol.layer.Tile({
            'title': 'Esri Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_gravelpondsMay2019_2 = new ol.format.GeoJSON();
var features_gravelpondsMay2019_2 = format_gravelpondsMay2019_2.readFeatures(json_gravelpondsMay2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gravelpondsMay2019_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gravelpondsMay2019_2.addFeatures(features_gravelpondsMay2019_2);
var lyr_gravelpondsMay2019_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gravelpondsMay2019_2, 
                style: style_gravelpondsMay2019_2,
                interactive: true,
                title: '<img src="styles/legend/gravelpondsMay2019_2.png" /> gravel ponds May 2019'
            });
var format_gravelpondsMay2016_3 = new ol.format.GeoJSON();
var features_gravelpondsMay2016_3 = format_gravelpondsMay2016_3.readFeatures(json_gravelpondsMay2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gravelpondsMay2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gravelpondsMay2016_3.addFeatures(features_gravelpondsMay2016_3);
var lyr_gravelpondsMay2016_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gravelpondsMay2016_3, 
                style: style_gravelpondsMay2016_3,
                interactive: true,
                title: '<img src="styles/legend/gravelpondsMay2016_3.png" /> gravel ponds May 2016'
            });
var format_gravelpondsMay2014_4 = new ol.format.GeoJSON();
var features_gravelpondsMay2014_4 = format_gravelpondsMay2014_4.readFeatures(json_gravelpondsMay2014_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gravelpondsMay2014_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gravelpondsMay2014_4.addFeatures(features_gravelpondsMay2014_4);
var lyr_gravelpondsMay2014_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gravelpondsMay2014_4, 
                style: style_gravelpondsMay2014_4,
                interactive: true,
                title: '<img src="styles/legend/gravelpondsMay2014_4.png" /> gravel ponds May 2014'
            });
var format_gravelpondsMay2008_5 = new ol.format.GeoJSON();
var features_gravelpondsMay2008_5 = format_gravelpondsMay2008_5.readFeatures(json_gravelpondsMay2008_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gravelpondsMay2008_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gravelpondsMay2008_5.addFeatures(features_gravelpondsMay2008_5);
var lyr_gravelpondsMay2008_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gravelpondsMay2008_5, 
                style: style_gravelpondsMay2008_5,
                interactive: true,
                title: '<img src="styles/legend/gravelpondsMay2008_5.png" /> gravel ponds May 2008'
            });
var format_2019gravelpitarea_6 = new ol.format.GeoJSON();
var features_2019gravelpitarea_6 = format_2019gravelpitarea_6.readFeatures(json_2019gravelpitarea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019gravelpitarea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019gravelpitarea_6.addFeatures(features_2019gravelpitarea_6);
var lyr_2019gravelpitarea_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019gravelpitarea_6, 
                style: style_2019gravelpitarea_6,
                interactive: true,
                title: '<img src="styles/legend/2019gravelpitarea_6.png" /> 2019 gravel pit area'
            });
var format_2016gravelpitarea_7 = new ol.format.GeoJSON();
var features_2016gravelpitarea_7 = format_2016gravelpitarea_7.readFeatures(json_2016gravelpitarea_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016gravelpitarea_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016gravelpitarea_7.addFeatures(features_2016gravelpitarea_7);
var lyr_2016gravelpitarea_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2016gravelpitarea_7, 
                style: style_2016gravelpitarea_7,
                interactive: true,
                title: '<img src="styles/legend/2016gravelpitarea_7.png" /> 2016 gravel pit area'
            });
var format_2014gravelpitarea_8 = new ol.format.GeoJSON();
var features_2014gravelpitarea_8 = format_2014gravelpitarea_8.readFeatures(json_2014gravelpitarea_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014gravelpitarea_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014gravelpitarea_8.addFeatures(features_2014gravelpitarea_8);
var lyr_2014gravelpitarea_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2014gravelpitarea_8, 
                style: style_2014gravelpitarea_8,
                interactive: true,
                title: '<img src="styles/legend/2014gravelpitarea_8.png" /> 2014 gravel pit area'
            });
var format_2013gravelpitarea_9 = new ol.format.GeoJSON();
var features_2013gravelpitarea_9 = format_2013gravelpitarea_9.readFeatures(json_2013gravelpitarea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2013gravelpitarea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2013gravelpitarea_9.addFeatures(features_2013gravelpitarea_9);
var lyr_2013gravelpitarea_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2013gravelpitarea_9, 
                style: style_2013gravelpitarea_9,
                interactive: true,
                title: '<img src="styles/legend/2013gravelpitarea_9.png" /> 2013 gravel pit area'
            });
var format_2011gravelpitarea_10 = new ol.format.GeoJSON();
var features_2011gravelpitarea_10 = format_2011gravelpitarea_10.readFeatures(json_2011gravelpitarea_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2011gravelpitarea_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011gravelpitarea_10.addFeatures(features_2011gravelpitarea_10);
var lyr_2011gravelpitarea_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2011gravelpitarea_10, 
                style: style_2011gravelpitarea_10,
                interactive: true,
                title: '<img src="styles/legend/2011gravelpitarea_10.png" /> 2011 gravel pit area'
            });
var format_2008gravelpitarea_11 = new ol.format.GeoJSON();
var features_2008gravelpitarea_11 = format_2008gravelpitarea_11.readFeatures(json_2008gravelpitarea_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2008gravelpitarea_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2008gravelpitarea_11.addFeatures(features_2008gravelpitarea_11);
var lyr_2008gravelpitarea_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2008gravelpitarea_11, 
                style: style_2008gravelpitarea_11,
                interactive: true,
                title: '<img src="styles/legend/2008gravelpitarea_11.png" /> 2008 gravel pit area'
            });
var format_2003gravelpitarea_12 = new ol.format.GeoJSON();
var features_2003gravelpitarea_12 = format_2003gravelpitarea_12.readFeatures(json_2003gravelpitarea_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2003gravelpitarea_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2003gravelpitarea_12.addFeatures(features_2003gravelpitarea_12);
var lyr_2003gravelpitarea_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2003gravelpitarea_12, 
                style: style_2003gravelpitarea_12,
                interactive: true,
                title: '<img src="styles/legend/2003gravelpitarea_12.png" /> 2003 gravel pit area'
            });
var format_GravelPitLocations_13 = new ol.format.GeoJSON();
var features_GravelPitLocations_13 = format_GravelPitLocations_13.readFeatures(json_GravelPitLocations_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GravelPitLocations_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GravelPitLocations_13.addFeatures(features_GravelPitLocations_13);
var lyr_GravelPitLocations_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GravelPitLocations_13, 
                style: style_GravelPitLocations_13,
                interactive: true,
                title: '<img src="styles/legend/GravelPitLocations_13.png" /> Gravel Pit Locations'
            });
var format_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14 = new ol.format.GeoJSON();
var features_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14 = format_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.readFeatures(json_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.addFeatures(features_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14);
var lyr_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14, 
                style: style_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14,
                interactive: true,
                title: '<img src="styles/legend/9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.png" /> 9 km radius around Mansa, Zambia 9 km radius around Mansa, Zambia.kml'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_EsriGraylight_1.setVisible(true);lyr_gravelpondsMay2019_2.setVisible(true);lyr_gravelpondsMay2016_3.setVisible(true);lyr_gravelpondsMay2014_4.setVisible(true);lyr_gravelpondsMay2008_5.setVisible(true);lyr_2019gravelpitarea_6.setVisible(true);lyr_2016gravelpitarea_7.setVisible(true);lyr_2014gravelpitarea_8.setVisible(true);lyr_2013gravelpitarea_9.setVisible(true);lyr_2011gravelpitarea_10.setVisible(true);lyr_2008gravelpitarea_11.setVisible(true);lyr_2003gravelpitarea_12.setVisible(true);lyr_GravelPitLocations_13.setVisible(true);lyr_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_EsriGraylight_1,lyr_gravelpondsMay2019_2,lyr_gravelpondsMay2016_3,lyr_gravelpondsMay2014_4,lyr_gravelpondsMay2008_5,lyr_2019gravelpitarea_6,lyr_2016gravelpitarea_7,lyr_2014gravelpitarea_8,lyr_2013gravelpitarea_9,lyr_2011gravelpitarea_10,lyr_2008gravelpitarea_11,lyr_2003gravelpitarea_12,lyr_GravelPitLocations_13,lyr_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14];
lyr_gravelpondsMay2019_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gravelpondsMay2016_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gravelpondsMay2014_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gravelpondsMay2008_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2019gravelpitarea_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2016gravelpitarea_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2014gravelpitarea_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2013gravelpitarea_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2011gravelpitarea_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2008gravelpitarea_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2003gravelpitarea_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GravelPitLocations_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gravelpondsMay2019_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gravelpondsMay2016_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gravelpondsMay2014_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gravelpondsMay2008_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_2019gravelpitarea_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_2016gravelpitarea_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_2014gravelpitarea_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2013gravelpitarea_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_2011gravelpitarea_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2008gravelpitarea_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2003gravelpitarea_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_GravelPitLocations_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gravelpondsMay2019_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gravelpondsMay2016_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gravelpondsMay2014_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gravelpondsMay2008_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2019gravelpitarea_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2016gravelpitarea_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2014gravelpitarea_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2013gravelpitarea_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2011gravelpitarea_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2008gravelpitarea_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2003gravelpitarea_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GravelPitLocations_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_9kmradiusaroundMansaZambia9kmradiusaroundMansaZambiakml_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});