//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';

//COMPONENTS
import TalentBossMaterials from './TalentBossMaterials';
import BossMaterial from './BossMaterial';
import CharacterAscension from './CharacterAscension';
import CommonAscension from './CommonAscension';
import ExpMaterials from './ExpMaterials';
import LocalSpecialties from './LocalSpecialties';
import TalentBook from './TalentBook';
//STYLES AND MOTION


//STRING CONVERSION
import {stringToDisplay} from '../util'

const MaterialsInfo = () => {

    const { selectedItemName, selectedItemData } = useSelector((state) => state.currentActiveData)
    
    return (
        <div>
            {selectedItemName === 'talent-boss' && <TalentBossMaterials />}
            {selectedItemName === 'boss-material' && <BossMaterial />}
            {selectedItemName === 'character-ascension' && <CharacterAscension />}
            {selectedItemName === 'common-ascension' && <CommonAscension />}
            {selectedItemName === 'character-experience' && <ExpMaterials />}
            {selectedItemName === 'weapon-experience' && <ExpMaterials />}
            {selectedItemName === 'local-specialties' && <LocalSpecialties />}
            {selectedItemName === 'talent-book' && <TalentBook />}
        </div>
    )
}



export default MaterialsInfo;