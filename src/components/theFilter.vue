<template>
          <br><br>
            <ul class="list-group">
  <li class="list-group-item  row H" data-id="hData" @click="toggleActive('H')">
    <div class="col-10">Hydraulique</div>
    <div class="col-2"><img src="../assets/blue.png"></div>
  </li>
  <li class="list-group-item row PH" data-id="phData" @click="toggleActive('PH')">
    <div class="col-10">Photovoltaique</div>
    <div class="col-2"><img src="../assets/grey.png"></div>
  </li>
  <li class="list-group-item active row N" data-id="nData" @click="toggleActive('N')">
    <div class="col-10">Nucléaire</div>
    <div class="col-2"><img src="../assets/gold.png"></div>
  </li>
  <li class="list-group-item row D" data-id="dData" @click="toggleActive('D')">
    <div class="col-10">Déchets</div>
    <div class="col-2"><img src="../assets/orange.png"></div>
  </li>
  <li class="list-group-item row G" data-id="gData" @click="toggleActive('G')">
    <div class="col-10">Gaz Naturel</div>
    <div class="col-2"><img src="../assets/green.png"></div>
  </li>
  <li class="list-group-item row B" data-id="bData" @click="toggleActive('B')">
    <div class="col-10">Biomasse</div>
    <div class="col-2"><img src="../assets/red.png"></div>
  </li>
  <li class="list-group-item row E" data-id="eData" @click="toggleActive('E')">
    <div class="col-10">Eolienne</div>
    <div class="col-2"><img src="../assets/violet.png"></div>
  </li>
  <li class="list-group-item row PE" data-id="peData" @click="toggleActive('PE')">
    <div class="col-10">Pétrole</div>
    <div class="col-2"><img src="../assets/black.png"></div>
  </li>
</ul>

            <label for="number">Année de l'état du parc 01/01: </label>
            <input type="number" v-model="value" readonly/>
              <input type="range" class="form-range" min="1900" max="2023" step="1" id="customRange1" v-model="value" ><br><br>
         
              <button type="button" class="btn btn-dark" @click="suppressionToutMarkerActive">Réinitialiser les filtres</button>
              
              
</template>

<script setup>


import { ref } from 'vue';
import {hData, phData, nData, dData, gData, bData, eData, peData} from '../dataImportPerCat';
import { redIcon,blackIcon, goldIcon } from "../markerColor";
import { ajouterMarker , suppressionToutMarker} from '../markers';
import { onMounted } from 'vue';

let value = ref(2008);

function suppressionToutMarkerActive(){
  suppressionToutMarker();
  document.querySelectorAll('.list-group-item').forEach((item)=>{
    item.classList.remove('active');
  })

}





const toggleActive = (id)=>{

  document.querySelector(`.list-group-item.${id}`).classList.toggle('active');
  //ajouterMarker(eData, map, blackIcon)
 

  }






</script>


<style scoped>



li:hover {
  cursor: pointer;
}

.list-group-item > div {
  display: inline-block;
}


</style>