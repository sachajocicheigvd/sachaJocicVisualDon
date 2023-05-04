





<template>
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css">
   
   
<!--    <div id="map"></div>
 -->


</template>

<script setup>
import L from 'leaflet';
import { onMounted } from 'vue';
import { redIcon,blackIcon, goldIcon } from "../markerColor";
import { ajouterMarker } from '../markers';
import {hData, phData, nData, dData, gData, bData, eData, peData} from '../dataImportPerCat';


/* onMounted(()=>{

 
const map = L.map('map').setView([46.959134, 8.235261], 6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//ajouterMarker(hData,redIcon)



}) */




</script>

<style>



</style>