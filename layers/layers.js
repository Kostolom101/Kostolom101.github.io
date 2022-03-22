var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundary_polygon_1 = new ol.format.GeoJSON();
var features_boundary_polygon_1 = format_boundary_polygon_1.readFeatures(json_boundary_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_polygon_1.addFeatures(features_boundary_polygon_1);
var lyr_boundary_polygon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_polygon_1, 
                style: style_boundary_polygon_1,
                interactive: true,
                title: '<img src="styles/legend/boundary_polygon_1.png" /> boundary_polygon'
            });

lyr_OSMStandard_0.setVisible(true);lyr_boundary_polygon_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundary_polygon_1];
lyr_boundary_polygon_1.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME': 'District', 'ADMIN_LVL': 'ADMIN_LVL', 'unempoyed': 'unempoyed', 'label_dist': 'label_dist', 'union dataset_salary': 'Average Salary', 'union dataset_retired': 'Retired', 'union dataset_pension': 'Pension', 'union dataset_unemployed': 'Unemployed', 'union dataset_ecology': 'Ecological costs', 'AVERAGE': 'AVERAGE', });
lyr_boundary_polygon_1.set('fieldImages', {'OSM_ID': 'Hidden', 'NAME': 'TextEdit', 'ADMIN_LVL': 'TextEdit', 'unempoyed': 'TextEdit', 'label_dist': 'TextEdit', 'union dataset_salary': 'TextEdit', 'union dataset_retired': 'TextEdit', 'union dataset_pension': 'TextEdit', 'union dataset_unemployed': 'TextEdit', 'union dataset_ecology': 'TextEdit', 'AVERAGE': 'TextEdit', });
lyr_boundary_polygon_1.set('fieldLabels', {'NAME': 'inline label', 'ADMIN_LVL': 'no label', 'unempoyed': 'no label', 'label_dist': 'no label', 'union dataset_salary': 'inline label', 'union dataset_retired': 'inline label', 'union dataset_pension': 'inline label', 'union dataset_unemployed': 'inline label', 'union dataset_ecology': 'inline label', 'AVERAGE': 'no label', });
lyr_boundary_polygon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});