import {loadData} from './dataImportMain';


const hData = async () => {

    return loadData().then(data => {
/*       let ValueDate = (document.querySelector("#customRange1").value);
     data = data.filter(d => d.BeginningOfOperation < `${ValueDate}/01/01`); */
     // console.log(value);
    //console.log(ValueDate);
        let hydro = data.filter(row => String(row.SubCategory).includes("Énergie hydraulique"));
        return hydro;
    
      });

}

const phData = async () => {

  return loadData().then(data => {
    const photovoltData = data.filter(row => String(row.SubCategory).includes("Photovoltaïque"));
      return photovoltData;
  
    });

}


const nData = async () => {

  return loadData().then(data => {
    const nuclData = data.filter(row => String(row.SubCategory).includes("Énergie nucléaire"));
    return nuclData;
  
    });

}

const dData = async () => {

  return loadData().then(data => {
    const dechetData = data.filter(row => String(row.SubCategory).includes("Déchets"));
    return dechetData;
  
    });

}

const gData = async () => {

  return loadData().then(data => {
    const gazData = data.filter(row => String(row.SubCategory).includes("Gaz naturel"));
    return gazData;
  
    });

}

const bData = async () => {

  return loadData().then(data => {
    const biomData = data.filter(row => String(row.SubCategory).includes("Biomasse"));
    return biomData;
  
    });

}


const eData = async () => {

  return loadData().then(data => {
    const eolData = data.filter(row => String(row.SubCategory).includes("Énergie éolienne"));
    return eolData;
  
    });

}


const peData = async () => {

  return loadData().then(data => {
    const petData = data.filter(row => String(row.SubCategory).includes("Pétrole"));
    return petData;
  
    });

}




export {hData, phData, nData, dData, gData, bData, eData, peData} 
