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
import TalentBookWeaponAscension from './TalentBookWeaponAscension';

const MaterialsInfo = () => {

    const { selectedItemName} = useSelector((state) => state.currentActiveData)
    
    return (
        <div>
            {selectedItemName === 'talent-boss' && <TalentBossMaterials />}
            {selectedItemName === 'boss-material' && <BossMaterial />}
            {selectedItemName === 'character-ascension' && <CharacterAscension />}
            {selectedItemName === 'common-ascension' && <CommonAscension />}
            {selectedItemName === 'character-experience' && <ExpMaterials />}
            {selectedItemName === 'weapon-experience' && <ExpMaterials />}
            {selectedItemName === 'local-specialties' && <LocalSpecialties />}
            {selectedItemName === 'talent-book' && <TalentBookWeaponAscension />}
            {selectedItemName === 'weapon-ascension' && <TalentBookWeaponAscension />}
        </div>
    )
}



export default MaterialsInfo;