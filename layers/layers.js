var wms_layers = [];

var format_contours_cpts_06_0 = new ol.format.GeoJSON();
var features_contours_cpts_06_0 = format_contours_cpts_06_0.readFeatures(json_contours_cpts_06_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contours_cpts_06_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contours_cpts_06_0.addFeatures(features_contours_cpts_06_0);
var lyr_contours_cpts_06_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contours_cpts_06_0, 
                style: style_contours_cpts_06_0,
                popuplayertitle: 'contours_cpts_06',
                interactive: true,
                title: '<img src="styles/legend/contours_cpts_06_0.png" /> contours_cpts_06'
            });
var format_cpts_iris_2024_AM_1 = new ol.format.GeoJSON();
var features_cpts_iris_2024_AM_1 = format_cpts_iris_2024_AM_1.readFeatures(json_cpts_iris_2024_AM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cpts_iris_2024_AM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cpts_iris_2024_AM_1.addFeatures(features_cpts_iris_2024_AM_1);
var lyr_cpts_iris_2024_AM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cpts_iris_2024_AM_1, 
                style: style_cpts_iris_2024_AM_1,
                popuplayertitle: 'cpts_iris_2024_AM',
                interactive: true,
                title: '<img src="styles/legend/cpts_iris_2024_AM_1.png" /> cpts_iris_2024_AM'
            });
var format_cpts_NCNE_2 = new ol.format.GeoJSON();
var features_cpts_NCNE_2 = format_cpts_NCNE_2.readFeatures(json_cpts_NCNE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cpts_NCNE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cpts_NCNE_2.addFeatures(features_cpts_NCNE_2);
var lyr_cpts_NCNE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cpts_NCNE_2, 
                style: style_cpts_NCNE_2,
                popuplayertitle: 'cpts_NCNE',
                interactive: true,
                title: '<img src="styles/legend/cpts_NCNE_2.png" /> cpts_NCNE'
            });
var format_iris_cptsuniquement_3 = new ol.format.GeoJSON();
var features_iris_cptsuniquement_3 = format_iris_cptsuniquement_3.readFeatures(json_iris_cptsuniquement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iris_cptsuniquement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iris_cptsuniquement_3.addFeatures(features_iris_cptsuniquement_3);
var lyr_iris_cptsuniquement_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_iris_cptsuniquement_3, 
                style: style_iris_cptsuniquement_3,
                popuplayertitle: 'iris_cpts uniquement',
                interactive: true,
                title: '<img src="styles/legend/iris_cptsuniquement_3.png" /> iris_cpts uniquement'
            });

lyr_contours_cpts_06_0.setVisible(true);lyr_cpts_iris_2024_AM_1.setVisible(true);lyr_cpts_NCNE_2.setVisible(true);lyr_iris_cptsuniquement_3.setVisible(true);
var layersList = [lyr_contours_cpts_06_0,lyr_cpts_iris_2024_AM_1,lyr_cpts_NCNE_2,lyr_iris_cptsuniquement_3];
lyr_contours_cpts_06_0.set('fieldAliases', {'nom_cpts': 'nom_cpts', });
lyr_cpts_iris_2024_AM_1.set('fieldAliases', {'code_rs': 'code_rs', 'nom_irs': 'nom_irs', 'cd_cmmn': 'cd_cmmn', 'nm_cmmn': 'nm_cmmn', 'cd_dprt': 'cd_dprt', 'nm_dprt': 'nm_dprt', 'cod_rgn': 'cod_rgn', 'nom_rgn': 'nom_rgn', 'id_iris': 'id_iris', 'nm_fn_r': 'nm_fn_r', 'type_rs': 'type_rs', 'nm_cpts': 'nm_cpts', 'metropl': 'metropl', });
lyr_cpts_NCNE_2.set('fieldAliases', {'code_rs': 'code_rs', 'nom_irs': 'nom_irs', 'cd_cmmn': 'cd_cmmn', 'nm_cmmn': 'nm_cmmn', 'cd_dprt': 'cd_dprt', 'nm_dprt': 'nm_dprt', 'cod_rgn': 'cod_rgn', 'nom_rgn': 'nom_rgn', 'id_iris': 'id_iris', 'nm_fn_r': 'nm_fn_r', 'type_rs': 'type_rs', });
lyr_iris_cptsuniquement_3.set('fieldAliases', {'code_rs': 'code_rs', 'nom_irs': 'nom_irs', 'cd_cmmn': 'cd_cmmn', 'nm_cmmn': 'nm_cmmn', 'cd_dprt': 'cd_dprt', 'nm_dprt': 'nm_dprt', 'cod_rgn': 'cod_rgn', 'nom_rgn': 'nom_rgn', 'id_iris': 'id_iris', 'nm_fn_r': 'nm_fn_r', 'type_rs': 'type_rs', 'nm_cpts': 'nm_cpts', 'metropl': 'metropl', });
lyr_contours_cpts_06_0.set('fieldImages', {'nom_cpts': '', });
lyr_cpts_iris_2024_AM_1.set('fieldImages', {'code_rs': '', 'nom_irs': '', 'cd_cmmn': '', 'nm_cmmn': '', 'cd_dprt': '', 'nm_dprt': '', 'cod_rgn': '', 'nom_rgn': '', 'id_iris': '', 'nm_fn_r': '', 'type_rs': '', 'nm_cpts': '', 'metropl': '', });
lyr_cpts_NCNE_2.set('fieldImages', {'code_rs': '', 'nom_irs': '', 'cd_cmmn': '', 'nm_cmmn': '', 'cd_dprt': '', 'nm_dprt': '', 'cod_rgn': '', 'nom_rgn': '', 'id_iris': '', 'nm_fn_r': '', 'type_rs': '', });
lyr_iris_cptsuniquement_3.set('fieldImages', {'code_rs': '', 'nom_irs': '', 'cd_cmmn': '', 'nm_cmmn': '', 'cd_dprt': '', 'nm_dprt': '', 'cod_rgn': '', 'nom_rgn': '', 'id_iris': '', 'nm_fn_r': '', 'type_rs': '', 'nm_cpts': '', 'metropl': '', });
lyr_contours_cpts_06_0.set('fieldLabels', {'nom_cpts': 'no label', });
lyr_cpts_iris_2024_AM_1.set('fieldLabels', {'code_rs': 'no label', 'nom_irs': 'no label', 'cd_cmmn': 'no label', 'nm_cmmn': 'no label', 'cd_dprt': 'no label', 'nm_dprt': 'no label', 'cod_rgn': 'no label', 'nom_rgn': 'no label', 'id_iris': 'no label', 'nm_fn_r': 'no label', 'type_rs': 'no label', 'nm_cpts': 'no label', 'metropl': 'no label', });
lyr_cpts_NCNE_2.set('fieldLabels', {'code_rs': 'no label', 'nom_irs': 'no label', 'cd_cmmn': 'no label', 'nm_cmmn': 'no label', 'cd_dprt': 'no label', 'nm_dprt': 'no label', 'cod_rgn': 'no label', 'nom_rgn': 'no label', 'id_iris': 'no label', 'nm_fn_r': 'no label', 'type_rs': 'no label', });
lyr_iris_cptsuniquement_3.set('fieldLabels', {'code_rs': 'no label', 'nom_irs': 'no label', 'cd_cmmn': 'no label', 'nm_cmmn': 'no label', 'cd_dprt': 'no label', 'nm_dprt': 'no label', 'cod_rgn': 'no label', 'nom_rgn': 'no label', 'id_iris': 'no label', 'nm_fn_r': 'no label', 'type_rs': 'no label', 'nm_cpts': 'no label', 'metropl': 'no label', });
lyr_iris_cptsuniquement_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});