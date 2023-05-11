<template>
  


	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
    crossorigin=""/>
<!--  <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css">-->
<!--      <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css">
 -->  <theEntete />

<main>
    <div class="container text-center">
        <div class="row">
          <div class="col">
            <theFilter />
          </div>
          <div class="col-6">

            <div id="map"></div>

           <theMap />
          </div>
          <div class="col">
            <br>
            <div id="chart"></div> 
           <p style="font-size: 10px;">*données exprimées en megaWatt</p>

            <barChart />
             

          </div>
        </div>
      </div>
</main>

</template>

<style scoped>



</style>


<script setup>

import TheEntete from './components/TheEntete.vue';
import theMap from './components/theMap.vue'
import theFilter from './components/theFilter.vue';
import 'https://d3js.org/d3.v6.min.js';
import {loadData} from './dataImportMain';
import {hData, phData, nData, dData, gData, bData, eData, peData} from './dataImportPerCat';
import { onMounted } from 'vue';
import { ajouterMarker , suppressionToutMarker} from './markers';
import { redIcon,blackIcon, goldIcon } from "./markerColor";
let fonctionAffiche;




onMounted(()=>{
  const map = L.map('map').setView([46.959134, 8.235261], 6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//ajouterMarker(hData, map, blackIcon)
//ajouterMarker(eData,map,goldIcon)
ajouterMarker(eval(nData), map);
fonctionAffiche = ()=>{

  let nbDactiv = 0;
  //document.getElementById("loading").style.display = "block";

const ul = document.querySelector('ul');  // sélectionne l'élément ul
document.getElementById("loading").style.display = "block";

for (var i = 0; i < ul.children.length; i++) {  // boucle sur chaque élément li de l'ul
  var li = ul.children[i];

if (li.classList.contains('active')) {


      ajouterMarker(eval(li.dataset.id), map);
      nbDactiv++;


  }

  
  //document.getElementById("loading").style.display = "none";

  
}

if (nbDactiv == 0) {
    document.getElementById("loading").style.display = "none";

  } 

console.log("test");

}

document.querySelector('ul').addEventListener('click',()=>{
  suppressionToutMarker();
  fonctionAffiche();

  
} );

document.querySelector("#customRange1").addEventListener('change',()=>{
  suppressionToutMarker();
  fonctionAffiche();

  
} );




})



</script>

<style scoped>

#map { height: 580px;
       margin-top: 45px;

      
  width: 500px; 
  height: 530px; 
  position: relative; 




}

svg{

  background-color: brown;
}

</style>
