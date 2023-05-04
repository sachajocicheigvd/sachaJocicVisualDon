
import theMap from './components/theMap.vue'
import { redIcon,blackIcon, goldIcon, greenIcon, orangeIcon, violetIcon, greytIcon, blueIcon } from "./markerColor";
import {hData, phData, nData, dData, gData, bData, eData, peData} from './dataImportPerCat';
import { onMounted } from 'vue';
export {ajouterMarker,suppressionToutMarker}
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import {ref} from 'vue';
import {afficheChart} from './afficheChart';


export {photoVal, hydroVal};

let photoVal = ref(0);
let hydroVal = ref(0);
let nuclVal = ref(0);
let dechVal = ref(0);
let gazVal = ref(0);
let biomVal = ref(0);
let eolVal = ref(0);
let petVal = ref(0);


let markers = L.layerGroup();
let markerSolar = L.markerClusterGroup();
//map.addLayer(markerSolar);


//var marker = L.marker([lat, lng]).bindPopup('Hello, world!');
//markers.addLayer(marker);



function suppressionToutMarker(){
  /*   if (document.querySelector("#app > main > div > div > div:nth-child(1) > ul > li.list-group-item.row.E.active")) {
        document.querySelector("#app > main > div > div > div:nth-child(1) > ul > li.list-group-item.row.E.active").classList.remove("active");
        
    } */

    markers.clearLayers();
    markerSolar.clearLayers()
    afficheChart(0,0,0,0,0,0,0,0);
   

    //if is active document.querySelector("#app > main > div > div > div:nth-child(1) > ul > li.list-group-item.row.E.active") remove active
    //if is active document.querySelector("#app > main > div > div > div:nth-child(1) > ul > li.list-group-item.row.E.active") remove active
    //if is active document.querySelector("#app > main > div > div > div:nth-child(1) > ul > li.list-group-item.row.E.active") remove active

  




  
    
}


function ajouterMarker (datapack, map){




    hydroVal.value = 0;
    photoVal.value = 0;
    nuclVal.value = 0;
    dechVal.value = 0;
    gazVal.value = 0;
    biomVal.value = 0;
    eolVal.value = 0;
    petVal.value = 0;


    datapack().then(data => {

        let ValueDate = (document.querySelector("#customRange1").value);
        data = data.filter(d => d.BeginningOfOperation < `${ValueDate}/01/01`);

        data.forEach(row => {

           

            if (row.SubCategory.trim() == "Photovoltaïque"){

                var marker = L.marker([row.y, row.x],{icon:greytIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');

                marker.addTo(markerSolar);
                photoVal.value +=  parseFloat(row.TotalPower);

                
                

            }

            else if (row.SubCategory.trim() == "Énergie hydraulique"){
                var marker = L.marker([row.y, row.x],{icon:blueIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');

                marker.addTo(markers);
                hydroVal.value +=  parseFloat(row.TotalPower);


            }

            else if (row.SubCategory.trim() == "Énergie nucléaire"){

                var marker = L.marker([row.y, row.x],{icon:goldIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');

                marker.addTo(markers);
                nuclVal.value +=  parseFloat(row.TotalPower);


            }
            else if (row.SubCategory.trim() == "Déchets"){

                var marker = L.marker([row.y, row.x],{icon:orangeIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');


                marker.addTo(markers);
                dechVal.value +=  parseFloat(row.TotalPower);


            }
            else if (row.SubCategory.trim() == "Biomasse"){

                var marker = L.marker([row.y, row.x],{icon:redIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');

                marker.addTo(markers);
                biomVal.value +=  parseFloat(row.TotalPower);


            }
            else if (row.SubCategory.trim() == "Gaz naturel"){

                var marker = L.marker([row.y, row.x],{icon:greenIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');

                marker.addTo(markers);
                biomVal.value +=  parseFloat(row.TotalPower);


            }
            else if (row.SubCategory.trim() == "Énergie éolienne"){

                var marker = L.marker([row.y, row.x],{icon:violetIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');


                marker.addTo(markers);
                eolVal.value +=  parseFloat(row.TotalPower);


            }
            else if (row.SubCategory.trim() == "Pétrole"){

                var marker = L.marker([row.y, row.x],{icon:blackIcon})
                marker.bindPopup(row.SubCategory + '<br>'+row.Address + '<br>' + row.TotalPower +'kw');


                marker.addTo(markers);
                petVal.value +=  parseFloat(row.TotalPower);


            }


            else{

                marker.addTo(markers)
                
                
                
            }
            //creerMarker(color, row);


    
            //document.getElementById("loading").style.display = "none";

            
        });
        afficheChart(hydroVal.value, photoVal.value, nuclVal.value, dechVal.value, gazVal.value, biomVal.value, eolVal.value, petVal.value);

        console.log("boucle Marker");

        
        markers.addTo(map);
        markerSolar.addTo(map);
        document.getElementById("loading").style.display = "none";


        
    });


//loadData().then(data => {
  //console.log(data);
//});



}



