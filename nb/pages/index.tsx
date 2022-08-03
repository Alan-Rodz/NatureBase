import { useState } from 'react';

import { PlantInfo } from '../component/PlantInfo';
import { firestore, storage } from '../firebase';
import { FilterPlants } from '../component/FilterPlants';

// ********************************************************************************
// == Constant ====================================================================
const defaultPlantInfo = {
  plant: {
    'type': '',
    'common_name': '',
    'latin_name': '',
    'exposure': '',
    'moisture': '',
    'height': -1,
    'availability': '',
    'ease_of_growth': '',
    'id': -1,
    'imgName': ''
  },
  plantImgURL: '',
}

// == Server Side =================================================================
export async function getStaticProps({ params }) {
  const plantNamesRef = firestore.collection('plants').doc('plantArray'),
        plantNamesDoc = await plantNamesRef.get();

  const plantNamesObject = plantNamesDoc.data(),
        plantNamesArray = plantNamesObject['plantArray'];

  return { props: { plantNamesArray } }
}


// == Client Side =================================================================
const NatureBaseHomePage = (props: { plantNamesArray: string[]; }) => {
  // -- State ---------------------------------------------------------------------
  const [plantNamesArray] = useState(props.plantNamesArray);
  const [plantInfoState, setPlantInfoState] = useState(defaultPlantInfo);

  // -- Handler -------------------------------------------------------------------
  const renderPlant = async (plantName: string) => {
    const plantDocRef = firestore.collection('plants').doc(plantName);
    const plantDoc = await plantDocRef.get();
    if(!plantDoc.exists) return/*plant does not exist*/;

    const plantImgURLRef = storage.ref(`plants/${plantDoc.data().imgName}.jpg`);
    const url = await plantImgURLRef.getDownloadURL();
    setPlantInfoState({ plant: plantDoc.data() as Plant/*by definition*/, plantImgURL: url });

    window.scrollTo(0, 0);
  }

  // -- UI ------------------------------------------------------------------------
  return (
    <main>
      <PlantInfo plantInfo={plantInfoState} />
      <FilterPlants plantNameArray={plantNamesArray} displayPlantInfoFunction={renderPlant} />
    </main>
  );
};

export default NatureBaseHomePage;
