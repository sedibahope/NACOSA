var wms_layers = [];

var format_WC_CoCPT_SubDistricts_0 = new ol.format.GeoJSON();
var features_WC_CoCPT_SubDistricts_0 = format_WC_CoCPT_SubDistricts_0.readFeatures(json_WC_CoCPT_SubDistricts_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WC_CoCPT_SubDistricts_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WC_CoCPT_SubDistricts_0.addFeatures(features_WC_CoCPT_SubDistricts_0);
var lyr_WC_CoCPT_SubDistricts_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WC_CoCPT_SubDistricts_0, 
                style: style_WC_CoCPT_SubDistricts_0,
                interactive: true,
                title: '<img src="styles/legend/WC_CoCPT_SubDistricts_0.png" /> WC_CoCPT_Sub-Districts'
            });
var format_RSA_1 = new ol.format.GeoJSON();
var features_RSA_1 = format_RSA_1.readFeatures(json_RSA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_1.addFeatures(features_RSA_1);
var lyr_RSA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_1, 
                style: style_RSA_1,
                interactive: true,
                title: '<img src="styles/legend/RSA_1.png" /> RSA'
            });
var format_KZN_UMG_District_2 = new ol.format.GeoJSON();
var features_KZN_UMG_District_2 = format_KZN_UMG_District_2.readFeatures(json_KZN_UMG_District_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KZN_UMG_District_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KZN_UMG_District_2.addFeatures(features_KZN_UMG_District_2);
var lyr_KZN_UMG_District_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KZN_UMG_District_2, 
                style: style_KZN_UMG_District_2,
                interactive: true,
                title: '<img src="styles/legend/KZN_UMG_District_2.png" /> KZN_UMG_District'
            });
var format_KZN_ETE_Subdistricts_3 = new ol.format.GeoJSON();
var features_KZN_ETE_Subdistricts_3 = format_KZN_ETE_Subdistricts_3.readFeatures(json_KZN_ETE_Subdistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KZN_ETE_Subdistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KZN_ETE_Subdistricts_3.addFeatures(features_KZN_ETE_Subdistricts_3);
var lyr_KZN_ETE_Subdistricts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KZN_ETE_Subdistricts_3, 
                style: style_KZN_ETE_Subdistricts_3,
                interactive: true,
                title: '<img src="styles/legend/KZN_ETE_Subdistricts_3.png" /> KZN_ETE_Sub-districts'
            });
var format_GAU_EKU_District_4 = new ol.format.GeoJSON();
var features_GAU_EKU_District_4 = format_GAU_EKU_District_4.readFeatures(json_GAU_EKU_District_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAU_EKU_District_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAU_EKU_District_4.addFeatures(features_GAU_EKU_District_4);
var lyr_GAU_EKU_District_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAU_EKU_District_4, 
                style: style_GAU_EKU_District_4,
                interactive: true,
                title: '<img src="styles/legend/GAU_EKU_District_4.png" /> GAU_EKU_District'
            });
var format_GAU_COJ_District_5 = new ol.format.GeoJSON();
var features_GAU_COJ_District_5 = format_GAU_COJ_District_5.readFeatures(json_GAU_COJ_District_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAU_COJ_District_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAU_COJ_District_5.addFeatures(features_GAU_COJ_District_5);
var lyr_GAU_COJ_District_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAU_COJ_District_5, 
                style: style_GAU_COJ_District_5,
                interactive: true,
                title: '<img src="styles/legend/GAU_COJ_District_5.png" /> GAU_COJ_District'
            });
var format_EC_NMB_District_6 = new ol.format.GeoJSON();
var features_EC_NMB_District_6 = format_EC_NMB_District_6.readFeatures(json_EC_NMB_District_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EC_NMB_District_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EC_NMB_District_6.addFeatures(features_EC_NMB_District_6);
var lyr_EC_NMB_District_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EC_NMB_District_6, 
                style: style_EC_NMB_District_6,
                interactive: true,
                title: '<img src="styles/legend/EC_NMB_District_6.png" /> EC_NMB_District'
            });
var format_RSA_PopulationEstimates_7 = new ol.format.GeoJSON();
var features_RSA_PopulationEstimates_7 = format_RSA_PopulationEstimates_7.readFeatures(json_RSA_PopulationEstimates_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_PopulationEstimates_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_PopulationEstimates_7.addFeatures(features_RSA_PopulationEstimates_7);
var lyr_RSA_PopulationEstimates_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_PopulationEstimates_7, 
                style: style_RSA_PopulationEstimates_7,
                interactive: true,
                title: '<img src="styles/legend/RSA_PopulationEstimates_7.png" /> RSA_Population Estimates'
            });
var format_RSA_PBReach_202122YTD_8 = new ol.format.GeoJSON();
var features_RSA_PBReach_202122YTD_8 = format_RSA_PBReach_202122YTD_8.readFeatures(json_RSA_PBReach_202122YTD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_PBReach_202122YTD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_PBReach_202122YTD_8.addFeatures(features_RSA_PBReach_202122YTD_8);
var lyr_RSA_PBReach_202122YTD_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_PBReach_202122YTD_8, 
                style: style_RSA_PBReach_202122YTD_8,
                interactive: true,
                title: '<img src="styles/legend/RSA_PBReach_202122YTD_8.png" /> RSA_PB Reach_2021-22YTD'
            });
var format_RSA_PBReach_202021_9 = new ol.format.GeoJSON();
var features_RSA_PBReach_202021_9 = format_RSA_PBReach_202021_9.readFeatures(json_RSA_PBReach_202021_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_PBReach_202021_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_PBReach_202021_9.addFeatures(features_RSA_PBReach_202021_9);
var lyr_RSA_PBReach_202021_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_PBReach_202021_9, 
                style: style_RSA_PBReach_202021_9,
                interactive: true,
                title: '<img src="styles/legend/RSA_PBReach_202021_9.png" /> RSA_PB Reach_2020-21'
            });
var format_RSA_PBReach_201920_10 = new ol.format.GeoJSON();
var features_RSA_PBReach_201920_10 = format_RSA_PBReach_201920_10.readFeatures(json_RSA_PBReach_201920_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_PBReach_201920_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_PBReach_201920_10.addFeatures(features_RSA_PBReach_201920_10);
var lyr_RSA_PBReach_201920_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_PBReach_201920_10, 
                style: style_RSA_PBReach_201920_10,
                interactive: true,
                title: '<img src="styles/legend/RSA_PBReach_201920_10.png" /> RSA_PB Reach_2019-20'
            });
var format_RSA_HRServiceSites_11 = new ol.format.GeoJSON();
var features_RSA_HRServiceSites_11 = format_RSA_HRServiceSites_11.readFeatures(json_RSA_HRServiceSites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HRServiceSites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HRServiceSites_11.addFeatures(features_RSA_HRServiceSites_11);
var lyr_RSA_HRServiceSites_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HRServiceSites_11, 
                style: style_RSA_HRServiceSites_11,
                interactive: true,
                title: '<img src="styles/legend/RSA_HRServiceSites_11.png" /> RSA_HR Service Sites'
            });
var format_RSA_PSSReach_202122YTD_12 = new ol.format.GeoJSON();
var features_RSA_PSSReach_202122YTD_12 = format_RSA_PSSReach_202122YTD_12.readFeatures(json_RSA_PSSReach_202122YTD_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_PSSReach_202122YTD_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_PSSReach_202122YTD_12.addFeatures(features_RSA_PSSReach_202122YTD_12);
var lyr_RSA_PSSReach_202122YTD_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_PSSReach_202122YTD_12, 
                style: style_RSA_PSSReach_202122YTD_12,
                interactive: true,
                title: '<img src="styles/legend/RSA_PSSReach_202122YTD_12.png" /> RSA_PSS Reach_2021-22YTD'
            });
var format_RSA_PSSReach_202021_13 = new ol.format.GeoJSON();
var features_RSA_PSSReach_202021_13 = format_RSA_PSSReach_202021_13.readFeatures(json_RSA_PSSReach_202021_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_PSSReach_202021_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_PSSReach_202021_13.addFeatures(features_RSA_PSSReach_202021_13);
var lyr_RSA_PSSReach_202021_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_PSSReach_202021_13, 
                style: style_RSA_PSSReach_202021_13,
                interactive: true,
                title: '<img src="styles/legend/RSA_PSSReach_202021_13.png" /> RSA_PSS Reach_2020-21'
            });
var format_RSA_PSSReach_201920_14 = new ol.format.GeoJSON();
var features_RSA_PSSReach_201920_14 = format_RSA_PSSReach_201920_14.readFeatures(json_RSA_PSSReach_201920_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_PSSReach_201920_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_PSSReach_201920_14.addFeatures(features_RSA_PSSReach_201920_14);
var lyr_RSA_PSSReach_201920_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_PSSReach_201920_14, 
                style: style_RSA_PSSReach_201920_14,
                interactive: true,
                title: '<img src="styles/legend/RSA_PSSReach_201920_14.png" /> RSA_PSS Reach_2019-20'
            });
var format_RSA_OSTReach_202122YTD_15 = new ol.format.GeoJSON();
var features_RSA_OSTReach_202122YTD_15 = format_RSA_OSTReach_202122YTD_15.readFeatures(json_RSA_OSTReach_202122YTD_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_OSTReach_202122YTD_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_OSTReach_202122YTD_15.addFeatures(features_RSA_OSTReach_202122YTD_15);
var lyr_RSA_OSTReach_202122YTD_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_OSTReach_202122YTD_15, 
                style: style_RSA_OSTReach_202122YTD_15,
                interactive: true,
                title: '<img src="styles/legend/RSA_OSTReach_202122YTD_15.png" /> RSA_OST Reach_2021-22YTD'
            });
var format_RSA_OSTReach_202021_16 = new ol.format.GeoJSON();
var features_RSA_OSTReach_202021_16 = format_RSA_OSTReach_202021_16.readFeatures(json_RSA_OSTReach_202021_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_OSTReach_202021_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_OSTReach_202021_16.addFeatures(features_RSA_OSTReach_202021_16);
var lyr_RSA_OSTReach_202021_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_OSTReach_202021_16, 
                style: style_RSA_OSTReach_202021_16,
                interactive: true,
                title: '<img src="styles/legend/RSA_OSTReach_202021_16.png" /> RSA_OST Reach_2020-21'
            });
var format_RSA_OSTReach_201920_17 = new ol.format.GeoJSON();
var features_RSA_OSTReach_201920_17 = format_RSA_OSTReach_201920_17.readFeatures(json_RSA_OSTReach_201920_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_OSTReach_201920_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_OSTReach_201920_17.addFeatures(features_RSA_OSTReach_201920_17);
var lyr_RSA_OSTReach_201920_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_OSTReach_201920_17, 
                style: style_RSA_OSTReach_201920_17,
                interactive: true,
                title: '<img src="styles/legend/RSA_OSTReach_201920_17.png" /> RSA_OST Reach_2019-20'
            });
var format_RSA_NSPReach_202122YTD_18 = new ol.format.GeoJSON();
var features_RSA_NSPReach_202122YTD_18 = format_RSA_NSPReach_202122YTD_18.readFeatures(json_RSA_NSPReach_202122YTD_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_NSPReach_202122YTD_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_NSPReach_202122YTD_18.addFeatures(features_RSA_NSPReach_202122YTD_18);
var lyr_RSA_NSPReach_202122YTD_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_NSPReach_202122YTD_18, 
                style: style_RSA_NSPReach_202122YTD_18,
                interactive: true,
                title: '<img src="styles/legend/RSA_NSPReach_202122YTD_18.png" /> RSA_NSP Reach_2021-22YTD'
            });
var format_RSA_NSPReach_202021_19 = new ol.format.GeoJSON();
var features_RSA_NSPReach_202021_19 = format_RSA_NSPReach_202021_19.readFeatures(json_RSA_NSPReach_202021_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_NSPReach_202021_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_NSPReach_202021_19.addFeatures(features_RSA_NSPReach_202021_19);
var lyr_RSA_NSPReach_202021_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_NSPReach_202021_19, 
                style: style_RSA_NSPReach_202021_19,
                interactive: true,
                title: '<img src="styles/legend/RSA_NSPReach_202021_19.png" /> RSA_NSP Reach_2020-21'
            });
var format_RSA_HTSReach_202122YTD_20 = new ol.format.GeoJSON();
var features_RSA_HTSReach_202122YTD_20 = format_RSA_HTSReach_202122YTD_20.readFeatures(json_RSA_HTSReach_202122YTD_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HTSReach_202122YTD_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HTSReach_202122YTD_20.addFeatures(features_RSA_HTSReach_202122YTD_20);
var lyr_RSA_HTSReach_202122YTD_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HTSReach_202122YTD_20, 
                style: style_RSA_HTSReach_202122YTD_20,
                interactive: true,
                title: '<img src="styles/legend/RSA_HTSReach_202122YTD_20.png" /> RSA_HTS Reach_2021-22YTD'
            });
var format_RSA_HTSReach_202021_21 = new ol.format.GeoJSON();
var features_RSA_HTSReach_202021_21 = format_RSA_HTSReach_202021_21.readFeatures(json_RSA_HTSReach_202021_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HTSReach_202021_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HTSReach_202021_21.addFeatures(features_RSA_HTSReach_202021_21);
var lyr_RSA_HTSReach_202021_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HTSReach_202021_21, 
                style: style_RSA_HTSReach_202021_21,
                interactive: true,
                title: '<img src="styles/legend/RSA_HTSReach_202021_21.png" /> RSA_HTS Reach_2020-21'
            });
var format_RSA_HTSReach_201920_22 = new ol.format.GeoJSON();
var features_RSA_HTSReach_201920_22 = format_RSA_HTSReach_201920_22.readFeatures(json_RSA_HTSReach_201920_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HTSReach_201920_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HTSReach_201920_22.addFeatures(features_RSA_HTSReach_201920_22);
var lyr_RSA_HTSReach_201920_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HTSReach_201920_22, 
                style: style_RSA_HTSReach_201920_22,
                interactive: true,
                title: '<img src="styles/legend/RSA_HTSReach_201920_22.png" /> RSA_HTS Reach_2019-20'
            });
var format_RSA_HRVReach_202122YTD_23 = new ol.format.GeoJSON();
var features_RSA_HRVReach_202122YTD_23 = format_RSA_HRVReach_202122YTD_23.readFeatures(json_RSA_HRVReach_202122YTD_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HRVReach_202122YTD_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HRVReach_202122YTD_23.addFeatures(features_RSA_HRVReach_202122YTD_23);
var lyr_RSA_HRVReach_202122YTD_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HRVReach_202122YTD_23, 
                style: style_RSA_HRVReach_202122YTD_23,
                interactive: true,
                title: '<img src="styles/legend/RSA_HRVReach_202122YTD_23.png" /> RSA_HRV Reach_2021-22YTD'
            });
var format_RSA_HRVReach_202021_24 = new ol.format.GeoJSON();
var features_RSA_HRVReach_202021_24 = format_RSA_HRVReach_202021_24.readFeatures(json_RSA_HRVReach_202021_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HRVReach_202021_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HRVReach_202021_24.addFeatures(features_RSA_HRVReach_202021_24);
var lyr_RSA_HRVReach_202021_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HRVReach_202021_24, 
                style: style_RSA_HRVReach_202021_24,
                interactive: true,
                title: '<img src="styles/legend/RSA_HRVReach_202021_24.png" /> RSA_HRV Reach_2020-21'
            });
var format_RSA_HRVReach_201920_25 = new ol.format.GeoJSON();
var features_RSA_HRVReach_201920_25 = format_RSA_HRVReach_201920_25.readFeatures(json_RSA_HRVReach_201920_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HRVReach_201920_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HRVReach_201920_25.addFeatures(features_RSA_HRVReach_201920_25);
var lyr_RSA_HRVReach_201920_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HRVReach_201920_25, 
                style: style_RSA_HRVReach_201920_25,
                interactive: true,
                title: '<img src="styles/legend/RSA_HRVReach_201920_25.png" /> RSA_HRV Reach_2019-20'
            });
var format_RSA_HCVReach_202122YTD_26 = new ol.format.GeoJSON();
var features_RSA_HCVReach_202122YTD_26 = format_RSA_HCVReach_202122YTD_26.readFeatures(json_RSA_HCVReach_202122YTD_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HCVReach_202122YTD_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HCVReach_202122YTD_26.addFeatures(features_RSA_HCVReach_202122YTD_26);
var lyr_RSA_HCVReach_202122YTD_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HCVReach_202122YTD_26, 
                style: style_RSA_HCVReach_202122YTD_26,
                interactive: true,
                title: '<img src="styles/legend/RSA_HCVReach_202122YTD_26.png" /> RSA_HCV Reach_2021-22YTD'
            });
var format_RSA_ARTReach_202122YTD_27 = new ol.format.GeoJSON();
var features_RSA_ARTReach_202122YTD_27 = format_RSA_ARTReach_202122YTD_27.readFeatures(json_RSA_ARTReach_202122YTD_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_ARTReach_202122YTD_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_ARTReach_202122YTD_27.addFeatures(features_RSA_ARTReach_202122YTD_27);
var lyr_RSA_ARTReach_202122YTD_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_ARTReach_202122YTD_27, 
                style: style_RSA_ARTReach_202122YTD_27,
                interactive: true,
                title: '<img src="styles/legend/RSA_ARTReach_202122YTD_27.png" /> RSA_ART Reach_2021-22YTD'
            });
var format_RSA_ARTReach_202021_28 = new ol.format.GeoJSON();
var features_RSA_ARTReach_202021_28 = format_RSA_ARTReach_202021_28.readFeatures(json_RSA_ARTReach_202021_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_ARTReach_202021_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_ARTReach_202021_28.addFeatures(features_RSA_ARTReach_202021_28);
var lyr_RSA_ARTReach_202021_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_ARTReach_202021_28, 
                style: style_RSA_ARTReach_202021_28,
                interactive: true,
                title: '<img src="styles/legend/RSA_ARTReach_202021_28.png" /> RSA_ART Reach_2020-21'
            });
var format_RSA_ARTReach_201920_29 = new ol.format.GeoJSON();
var features_RSA_ARTReach_201920_29 = format_RSA_ARTReach_201920_29.readFeatures(json_RSA_ARTReach_201920_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_ARTReach_201920_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_ARTReach_201920_29.addFeatures(features_RSA_ARTReach_201920_29);
var lyr_RSA_ARTReach_201920_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_ARTReach_201920_29, 
                style: style_RSA_ARTReach_201920_29,
                interactive: true,
                title: '<img src="styles/legend/RSA_ARTReach_201920_29.png" /> RSA_ART Reach_2019-20'
            });
var format_RSA_SkillsCentres_30 = new ol.format.GeoJSON();
var features_RSA_SkillsCentres_30 = format_RSA_SkillsCentres_30.readFeatures(json_RSA_SkillsCentres_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_SkillsCentres_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_SkillsCentres_30.addFeatures(features_RSA_SkillsCentres_30);
var lyr_RSA_SkillsCentres_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_SkillsCentres_30, 
                style: style_RSA_SkillsCentres_30,
                interactive: true,
                title: '<img src="styles/legend/RSA_SkillsCentres_30.png" /> RSA_Skills Centres'
            });
var format_RSA_Shelters_31 = new ol.format.GeoJSON();
var features_RSA_Shelters_31 = format_RSA_Shelters_31.readFeatures(json_RSA_Shelters_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_Shelters_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_Shelters_31.addFeatures(features_RSA_Shelters_31);
var lyr_RSA_Shelters_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_Shelters_31, 
                style: style_RSA_Shelters_31,
                interactive: true,
                title: '<img src="styles/legend/RSA_Shelters_31.png" /> RSA_Shelters'
            });
var format_RSA_SAPS_32 = new ol.format.GeoJSON();
var features_RSA_SAPS_32 = format_RSA_SAPS_32.readFeatures(json_RSA_SAPS_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_SAPS_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_SAPS_32.addFeatures(features_RSA_SAPS_32);
var lyr_RSA_SAPS_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_SAPS_32, 
                style: style_RSA_SAPS_32,
                interactive: true,
                title: '<img src="styles/legend/RSA_SAPS_32.png" /> RSA_SAPS'
            });
var format_RSA_RehabServices_33 = new ol.format.GeoJSON();
var features_RSA_RehabServices_33 = format_RSA_RehabServices_33.readFeatures(json_RSA_RehabServices_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_RehabServices_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_RehabServices_33.addFeatures(features_RSA_RehabServices_33);
var lyr_RSA_RehabServices_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_RehabServices_33, 
                style: style_RSA_RehabServices_33,
                interactive: true,
                title: '<img src="styles/legend/RSA_RehabServices_33.png" /> RSA_Rehab Services'
            });
var format_RSA_MHServices_34 = new ol.format.GeoJSON();
var features_RSA_MHServices_34 = format_RSA_MHServices_34.readFeatures(json_RSA_MHServices_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_MHServices_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_MHServices_34.addFeatures(features_RSA_MHServices_34);
var lyr_RSA_MHServices_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_MHServices_34, 
                style: style_RSA_MHServices_34,
                interactive: true,
                title: '<img src="styles/legend/RSA_MHServices_34.png" /> RSA_MH Services'
            });
var format_RSA_HCFacilities_35 = new ol.format.GeoJSON();
var features_RSA_HCFacilities_35 = format_RSA_HCFacilities_35.readFeatures(json_RSA_HCFacilities_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_HCFacilities_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_HCFacilities_35.addFeatures(features_RSA_HCFacilities_35);
var lyr_RSA_HCFacilities_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_HCFacilities_35, 
                style: style_RSA_HCFacilities_35,
                interactive: true,
                title: '<img src="styles/legend/RSA_HCFacilities_35.png" /> RSA_HC Facilities'
            });
var format_RSA_DIC_36 = new ol.format.GeoJSON();
var features_RSA_DIC_36 = format_RSA_DIC_36.readFeatures(json_RSA_DIC_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSA_DIC_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSA_DIC_36.addFeatures(features_RSA_DIC_36);
var lyr_RSA_DIC_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSA_DIC_36, 
                style: style_RSA_DIC_36,
                interactive: true,
                title: '<img src="styles/legend/RSA_DIC_36.png" /> RSA_DIC'
            });
var group_RSA_ServiceProviders = new ol.layer.Group({
                                layers: [lyr_RSA_SkillsCentres_30,lyr_RSA_Shelters_31,lyr_RSA_SAPS_32,lyr_RSA_RehabServices_33,lyr_RSA_MHServices_34,lyr_RSA_HCFacilities_35,lyr_RSA_DIC_36,],
                                title: "RSA_Service Providers"});
var group_RSA_HRServices = new ol.layer.Group({
                                layers: [lyr_RSA_PSSReach_202122YTD_12,lyr_RSA_PSSReach_202021_13,lyr_RSA_PSSReach_201920_14,lyr_RSA_OSTReach_202122YTD_15,lyr_RSA_OSTReach_202021_16,lyr_RSA_OSTReach_201920_17,lyr_RSA_NSPReach_202122YTD_18,lyr_RSA_NSPReach_202021_19,lyr_RSA_HTSReach_202122YTD_20,lyr_RSA_HTSReach_202021_21,lyr_RSA_HTSReach_201920_22,lyr_RSA_HRVReach_202122YTD_23,lyr_RSA_HRVReach_202021_24,lyr_RSA_HRVReach_201920_25,lyr_RSA_HCVReach_202122YTD_26,lyr_RSA_ARTReach_202122YTD_27,lyr_RSA_ARTReach_202021_28,lyr_RSA_ARTReach_201920_29,],
                                title: "RSA_HR Services"});
var group_RSA_ProgrammeReach = new ol.layer.Group({
                                layers: [lyr_RSA_PopulationEstimates_7,lyr_RSA_PBReach_202122YTD_8,lyr_RSA_PBReach_202021_9,lyr_RSA_PBReach_201920_10,lyr_RSA_HRServiceSites_11,],
                                title: "RSA_Programme Reach"});
var group_RSA_Districts = new ol.layer.Group({
                                layers: [lyr_WC_CoCPT_SubDistricts_0,lyr_RSA_1,lyr_KZN_UMG_District_2,lyr_KZN_ETE_Subdistricts_3,lyr_GAU_EKU_District_4,lyr_GAU_COJ_District_5,lyr_EC_NMB_District_6,],
                                title: "RSA_Districts"});

lyr_WC_CoCPT_SubDistricts_0.setVisible(true);lyr_RSA_1.setVisible(true);lyr_KZN_UMG_District_2.setVisible(true);lyr_KZN_ETE_Subdistricts_3.setVisible(true);lyr_GAU_EKU_District_4.setVisible(true);lyr_GAU_COJ_District_5.setVisible(true);lyr_EC_NMB_District_6.setVisible(true);lyr_RSA_PopulationEstimates_7.setVisible(true);lyr_RSA_PBReach_202122YTD_8.setVisible(true);lyr_RSA_PBReach_202021_9.setVisible(true);lyr_RSA_PBReach_201920_10.setVisible(true);lyr_RSA_HRServiceSites_11.setVisible(true);lyr_RSA_PSSReach_202122YTD_12.setVisible(true);lyr_RSA_PSSReach_202021_13.setVisible(true);lyr_RSA_PSSReach_201920_14.setVisible(true);lyr_RSA_OSTReach_202122YTD_15.setVisible(true);lyr_RSA_OSTReach_202021_16.setVisible(true);lyr_RSA_OSTReach_201920_17.setVisible(true);lyr_RSA_NSPReach_202122YTD_18.setVisible(true);lyr_RSA_NSPReach_202021_19.setVisible(true);lyr_RSA_HTSReach_202122YTD_20.setVisible(true);lyr_RSA_HTSReach_202021_21.setVisible(true);lyr_RSA_HTSReach_201920_22.setVisible(true);lyr_RSA_HRVReach_202122YTD_23.setVisible(true);lyr_RSA_HRVReach_202021_24.setVisible(true);lyr_RSA_HRVReach_201920_25.setVisible(true);lyr_RSA_HCVReach_202122YTD_26.setVisible(true);lyr_RSA_ARTReach_202122YTD_27.setVisible(true);lyr_RSA_ARTReach_202021_28.setVisible(true);lyr_RSA_ARTReach_201920_29.setVisible(true);lyr_RSA_SkillsCentres_30.setVisible(true);lyr_RSA_Shelters_31.setVisible(true);lyr_RSA_SAPS_32.setVisible(true);lyr_RSA_RehabServices_33.setVisible(true);lyr_RSA_MHServices_34.setVisible(true);lyr_RSA_HCFacilities_35.setVisible(true);lyr_RSA_DIC_36.setVisible(true);
var layersList = [group_RSA_Districts,group_RSA_ProgrammeReach,group_RSA_HRServices,group_RSA_ServiceProviders];
lyr_WC_CoCPT_SubDistricts_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CITY_HLTH_': 'CITY_HLTH_', 'SHAPESTAre': 'SHAPESTAre', 'SHAPESTLen': 'SHAPESTLen', });
lyr_RSA_1.set('fieldAliases', {'fid': 'fid', 'PROVINCE': 'PROVINCE', });
lyr_KZN_UMG_District_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_KZN_ETE_Subdistricts_3.set('fieldAliases', {'fid': 'fid', 'SUB_STRUCT': 'SUB_STRUCT', 'sde_LDR_eT': 'sde_LDR_eT', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'SOURCETHM': 'SOURCETHM', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_GAU_EKU_District_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_GAU_COJ_District_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CATEGORY': 'CATEGORY', 'CAT2': 'CAT2', 'CAT_B': 'CAT_B', 'MUNICNAME': 'MUNICNAME', 'DISTRICT': 'DISTRICT', 'PROVINCE': 'PROVINCE', 'PROVNAME': 'PROVNAME', 'AREA': 'AREA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'EA_NUMBER': 'EA_NUMBER', });
lyr_EC_NMB_District_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CATEGORY': 'CATEGORY', 'CAT2': 'CAT2', 'CAT_B': 'CAT_B', 'MUNICNAME': 'MUNICNAME', 'DISTRICT': 'DISTRICT', 'PROVINCE': 'PROVINCE', 'PROVNAME': 'PROVNAME', 'AREA': 'AREA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'EA_NUMBER': 'EA_NUMBER', });
lyr_RSA_PopulationEstimates_7.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'PWID Population Size
FY 2019/20': 'PWID Population Size
FY 2019/20', });
lyr_RSA_PBReach_202122YTD_8.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'PWID 
FY 2021/22': 'PWID 
FY 2021/22', });
lyr_RSA_PBReach_202021_9.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'PWID
FY 2020/21': 'PWID
FY 2020/21', });
lyr_RSA_PBReach_201920_10.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'PWID
FY 2019/20': 'PWID
FY 2019/20', });
lyr_RSA_HRServiceSites_11.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', });
lyr_RSA_PSSReach_202122YTD_12.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'PSS
FY 2021/22': 'PSS
FY 2021/22', });
lyr_RSA_PSSReach_202021_13.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'PSS
FY 2020/21': 'PSS
FY 2020/21', });
lyr_RSA_PSSReach_201920_14.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'PSS
FY 2019/20': 'PSS
FY 2019/20', });
lyr_RSA_OSTReach_202122YTD_15.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'OST
FY 2021/22': 'OST
FY 2021/22', });
lyr_RSA_OSTReach_202021_16.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'OST
FY 2020/21': 'OST
FY 2020/21', });
lyr_RSA_OSTReach_201920_17.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'OST
FY 2019/20': 'OST
FY 2019/20', });
lyr_RSA_NSPReach_202122YTD_18.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'NSP
FY 2021/22': 'NSP
FY 2021/22', });
lyr_RSA_NSPReach_202021_19.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'NSP
FY 2020/21': 'NSP
FY 2020/21', });
lyr_RSA_HTSReach_202122YTD_20.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'HTS
FY 2021/22': 'HTS
FY 2021/22', });
lyr_RSA_HTSReach_202021_21.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'HTS
FY 2020/21': 'HTS
FY 2020/21', });
lyr_RSA_HTSReach_201920_22.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'HTS 
FY 2019/20': 'HTS 
FY 2019/20', });
lyr_RSA_HRVReach_202122YTD_23.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'HRV
FY21/22': 'HRV
FY21/22', });
lyr_RSA_HRVReach_202021_24.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'HRV
FY 2020/21': 'HRV
FY 2020/21', });
lyr_RSA_HRVReach_201920_25.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'HRV
FY 2019/20': 'HRV
FY 2019/20', });
lyr_RSA_HCVReach_202122YTD_26.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'HCV
FY 2021/22': 'HCV
FY 2021/22', });
lyr_RSA_ARTReach_202122YTD_27.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'ART
FY 2021/22': 'ART
FY 2021/22', });
lyr_RSA_ARTReach_202021_28.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'ART
FY 2020/21': 'ART
FY 2020/21', });
lyr_RSA_ARTReach_201920_29.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'ART
FY 2019/20': 'ART
FY 2019/20', });
lyr_RSA_SkillsCentres_30.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', });
lyr_RSA_Shelters_31.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', 'field_10': 'field_10', });
lyr_RSA_SAPS_32.set('fieldAliases', {'fid': 'fid', 'COMPNT_NM': 'COMPNT_NM', 'LOCATION_X': 'LOCATION_X', 'LOCATION_Y': 'LOCATION_Y', 'CREATE_DT': 'CREATE_DT', 'VERSION': 'VERSION', });
lyr_RSA_RehabServices_33.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', });
lyr_RSA_MHServices_34.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', });
lyr_RSA_HCFacilities_35.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'addrcity': 'addrcity', 'healthcare': 'healthcare', 'capacitype': 'capacitype', 'source': 'source', 'healthca_1': 'healthca_1', 'operatorty': 'operatorty', 'amenity': 'amenity', 'addrfull': 'addrfull', 'building': 'building', 'name': 'name', });
lyr_RSA_DIC_36.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Subdistrict': 'Subdistrict', 'Site': 'Site', 'Place/ Address': 'Place/ Address', 'GPS Coordiantes Latitude': 'GPS Coordiantes Latitude', 'GPS Coordiantes Longitude': 'GPS Coordiantes Longitude', 'Service Provider': 'Service Provider', 'Type of Service': 'Type of Service', });
lyr_WC_CoCPT_SubDistricts_0.set('fieldImages', {'fid': '', 'OBJECTID': 'Range', 'CITY_HLTH_': 'TextEdit', 'SHAPESTAre': 'TextEdit', 'SHAPESTLen': 'TextEdit', });
lyr_RSA_1.set('fieldImages', {'fid': '', 'PROVINCE': 'TextEdit', });
lyr_KZN_UMG_District_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_KZN_ETE_Subdistricts_3.set('fieldImages', {'fid': '', 'SUB_STRUCT': 'TextEdit', 'sde_LDR_eT': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'SOURCETHM': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_GAU_EKU_District_4.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_GAU_COJ_District_5.set('fieldImages', {'fid': '', 'OBJECTID': 'Range', 'CATEGORY': 'TextEdit', 'CAT2': 'TextEdit', 'CAT_B': 'TextEdit', 'MUNICNAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'PROVINCE': 'TextEdit', 'PROVNAME': 'TextEdit', 'AREA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'EA_NUMBER': 'TextEdit', });
lyr_EC_NMB_District_6.set('fieldImages', {'fid': '', 'OBJECTID': 'Range', 'CATEGORY': 'TextEdit', 'CAT2': 'TextEdit', 'CAT_B': 'TextEdit', 'MUNICNAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'PROVINCE': 'TextEdit', 'PROVNAME': 'TextEdit', 'AREA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'EA_NUMBER': 'TextEdit', });
lyr_RSA_PopulationEstimates_7.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'PWID Population Size
FY 2019/20': 'Range', });
lyr_RSA_PBReach_202122YTD_8.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'PWID 
FY 2021/22': 'Range', });
lyr_RSA_PBReach_202021_9.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'PWID
FY 2020/21': 'Range', });
lyr_RSA_PBReach_201920_10.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'PWID
FY 2019/20': 'Range', });
lyr_RSA_HRServiceSites_11.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', });
lyr_RSA_PSSReach_202122YTD_12.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'PSS
FY 2021/22': 'Range', });
lyr_RSA_PSSReach_202021_13.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'PSS
FY 2020/21': 'Range', });
lyr_RSA_PSSReach_201920_14.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'PSS
FY 2019/20': 'Range', });
lyr_RSA_OSTReach_202122YTD_15.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'OST
FY 2021/22': 'Range', });
lyr_RSA_OSTReach_202021_16.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'OST
FY 2020/21': 'Range', });
lyr_RSA_OSTReach_201920_17.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'OST
FY 2019/20': 'Range', });
lyr_RSA_NSPReach_202122YTD_18.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'NSP
FY 2021/22': 'Range', });
lyr_RSA_NSPReach_202021_19.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'NSP
FY 2020/21': 'Range', });
lyr_RSA_HTSReach_202122YTD_20.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'HTS
FY 2021/22': 'Range', });
lyr_RSA_HTSReach_202021_21.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'HTS
FY 2020/21': 'Range', });
lyr_RSA_HTSReach_201920_22.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'HTS 
FY 2019/20': 'Range', });
lyr_RSA_HRVReach_202122YTD_23.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'HRV
FY21/22': 'Range', });
lyr_RSA_HRVReach_202021_24.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'HRV
FY 2020/21': 'Range', });
lyr_RSA_HRVReach_201920_25.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'HRV
FY 2019/20': 'Range', });
lyr_RSA_HCVReach_202122YTD_26.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'HCV
FY 2021/22': 'Range', });
lyr_RSA_ARTReach_202122YTD_27.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'ART
FY 2021/22': 'Range', });
lyr_RSA_ARTReach_202021_28.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'ART
FY 2020/21': 'Range', });
lyr_RSA_ARTReach_201920_29.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'ART
FY 2019/20': 'Range', });
lyr_RSA_SkillsCentres_30.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', });
lyr_RSA_Shelters_31.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', 'field_10': 'TextEdit', });
lyr_RSA_SAPS_32.set('fieldImages', {'fid': '', 'COMPNT_NM': 'TextEdit', 'LOCATION_X': 'TextEdit', 'LOCATION_Y': 'TextEdit', 'CREATE_DT': 'TextEdit', 'VERSION': 'TextEdit', });
lyr_RSA_RehabServices_33.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', });
lyr_RSA_MHServices_34.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', });
lyr_RSA_HCFacilities_35.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'addrcity': 'TextEdit', 'healthcare': 'TextEdit', 'capacitype': 'TextEdit', 'source': 'TextEdit', 'healthca_1': 'TextEdit', 'operatorty': 'TextEdit', 'amenity': 'TextEdit', 'addrfull': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', });
lyr_RSA_DIC_36.set('fieldImages', {'fid': '', 'Province': 'TextEdit', 'District': 'TextEdit', 'Subdistrict': 'TextEdit', 'Site': 'TextEdit', 'Place/ Address': 'TextEdit', 'GPS Coordiantes Latitude': 'TextEdit', 'GPS Coordiantes Longitude': 'TextEdit', 'Service Provider': 'TextEdit', 'Type of Service': 'TextEdit', });
lyr_WC_CoCPT_SubDistricts_0.set('fieldLabels', {});
lyr_RSA_1.set('fieldLabels', {});
lyr_KZN_UMG_District_2.set('fieldLabels', {});
lyr_KZN_ETE_Subdistricts_3.set('fieldLabels', {});
lyr_GAU_EKU_District_4.set('fieldLabels', {});
lyr_GAU_COJ_District_5.set('fieldLabels', {});
lyr_EC_NMB_District_6.set('fieldLabels', {});
lyr_RSA_PopulationEstimates_7.set('fieldLabels', {});
lyr_RSA_PBReach_202122YTD_8.set('fieldLabels', {});
lyr_RSA_PBReach_202021_9.set('fieldLabels', {});
lyr_RSA_PBReach_201920_10.set('fieldLabels', {});
lyr_RSA_HRServiceSites_11.set('fieldLabels', {});
lyr_RSA_PSSReach_202122YTD_12.set('fieldLabels', {});
lyr_RSA_PSSReach_202021_13.set('fieldLabels', {});
lyr_RSA_PSSReach_201920_14.set('fieldLabels', {});
lyr_RSA_OSTReach_202122YTD_15.set('fieldLabels', {});
lyr_RSA_OSTReach_202021_16.set('fieldLabels', {});
lyr_RSA_OSTReach_201920_17.set('fieldLabels', {});
lyr_RSA_NSPReach_202122YTD_18.set('fieldLabels', {});
lyr_RSA_NSPReach_202021_19.set('fieldLabels', {});
lyr_RSA_HTSReach_202122YTD_20.set('fieldLabels', {});
lyr_RSA_HTSReach_202021_21.set('fieldLabels', {});
lyr_RSA_HTSReach_201920_22.set('fieldLabels', {});
lyr_RSA_HRVReach_202122YTD_23.set('fieldLabels', {});
lyr_RSA_HRVReach_202021_24.set('fieldLabels', {});
lyr_RSA_HRVReach_201920_25.set('fieldLabels', {});
lyr_RSA_HCVReach_202122YTD_26.set('fieldLabels', {});
lyr_RSA_ARTReach_202122YTD_27.set('fieldLabels', {});
lyr_RSA_ARTReach_202021_28.set('fieldLabels', {});
lyr_RSA_ARTReach_201920_29.set('fieldLabels', {});
lyr_RSA_SkillsCentres_30.set('fieldLabels', {});
lyr_RSA_Shelters_31.set('fieldLabels', {});
lyr_RSA_SAPS_32.set('fieldLabels', {});
lyr_RSA_RehabServices_33.set('fieldLabels', {});
lyr_RSA_MHServices_34.set('fieldLabels', {});
lyr_RSA_HCFacilities_35.set('fieldLabels', {});
lyr_RSA_DIC_36.set('fieldLabels', {});
lyr_RSA_DIC_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});