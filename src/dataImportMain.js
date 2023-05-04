import 'https://d3js.org/d3.v6.min.js';




const loadData = async () => {
   return d3.csv("../public/main.csv").then(data => {

    //filtre les données pour ne garder que les données de avant 2019 (date au format jj/mm/aaaa)
/*     data = data.filter(d => d.BeginningOfOperation < "1900/01/01");
 */


        return data;
    
    
    }).catch(error => {
        console.error("Erreur lors du chargement du fichier CSV:", error);
    })
}
export {loadData}
    
