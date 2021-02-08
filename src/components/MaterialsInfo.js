//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';

//COMPONENTS
import TalentBossMaterials from './TalentBossMaterials';
import BossMaterial from './BossMaterial';
import CharacterAscension from './CharacterAscension';
//STYLES AND MOTION


//STRING CONVERSION
import {stringToDisplay} from '../util'


const MaterialsInfo = () => {

    const { selectedEntityName, selectedItemName, selectedItemData } = useSelector((state) => state.currentActiveData)
    
    console.log(selectedItemData, selectedItemName)
    
    return (
        <div>
            {selectedItemName === 'talent-boss' && <TalentBossMaterials />}
            {selectedItemName === 'boss-material' && <BossMaterial />}
            {selectedItemName === 'character-ascension' && <CharacterAscension />}
        </div>
    )
}



export default MaterialsInfo;