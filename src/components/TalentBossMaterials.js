//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//CONVERTERS
import { stringToDisplay, materialsToImageConverter } from '../util';
//STYLES AND MOTION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataContainerStyles } from '../util'
import { flyUp } from './animations';
    
const TalentBossMaterials = () => {

    const {selectedItemData} = useSelector((state) => state.currentActiveData)

    return (
        <TalentBossContainer>
            {Object.keys(selectedItemData).map((key) => (
                <MaterialDataContainer variants={flyUp} initial='hidden' animate='show'>
                    <MaterialContainer id={selectedItemData[key].id}>
                        <ImageContainer>
                            <img src={materialsToImageConverter(key)} alt="missing"/>
                        </ImageContainer>
                        <h1>{selectedItemData[key].name}</h1>
                    </MaterialContainer>
                    <CharacterContainer>
                            <h2>Characters:</h2>
                            <h3>{selectedItemData[key].characters.map((character) => stringToDisplay(character)).join(', ')}</h3>
                    </CharacterContainer> 
                </MaterialDataContainer>  
                    ) )}
         </TalentBossContainer>
    )
}

const TalentBossContainer = styled(motion.div)`
    max-height: 90vh;
    overflow-y: scroll;

`
const MaterialDataContainer = styled(dataContainerStyles)`
    width: 60%; 
    backdrop-filter: blur(5px); 
    margin: 1rem auto;
    border: 1px solid rgba(255, 255, 255, 0.5);
`
const MaterialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ImageContainer = styled.div`
    width: 100px;
    padding-right: 1rem;
    text-align: center;
    img{
        width: 100%
    }
`
const CharacterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h2{
        padding-right: 1rem;
    }
    h3{
        font-size: 1.3rem;
    }
`

export default TalentBossMaterials;