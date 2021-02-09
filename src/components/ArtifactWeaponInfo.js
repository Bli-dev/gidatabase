//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//CONVERSIONS
import { stringToDisplay, rarityConversion, dataContainerStyles } from '../util';
//ICON URL FROM API 
import { flowerOfLifeIconURL, entityItemIconURL } from '../api'
//STYLES AND MOTION
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ArtifactInfo = () => {

    const { selectedEntityName, selectedItemName, selectedItemData } = useSelector((state) => state.currentActiveData)
    
    return (
        <SelectedArtifactContainer>
            <ImageContainer>
                <ItemImage src={selectedEntityName === 'artifacts' ? flowerOfLifeIconURL(selectedEntityName, selectedItemName) :
                    entityItemIconURL(selectedEntityName, selectedItemName)} alt={`${stringToDisplay(selectedItemName)} image is missing`} />
            </ImageContainer>
            <ArtifactWeaponInfoContainer>
            {Object.keys(selectedItemData).map(key => (
                <KeyValuePair>
                    <InfoKey>{`${stringToDisplay(key).replace(/([A-Z]+)/g, " $1")}:`}</InfoKey>
                    <InfoValue>{rarityConversion(key, selectedItemData[key])}</InfoValue>
                </KeyValuePair>))}
            </ArtifactWeaponInfoContainer>
        </SelectedArtifactContainer>
    )
}

const SelectedArtifactContainer = styled(dataContainerStyles)`
    display: flex;
`

const ImageContainer = styled(motion.div)`
    width: 30%;
    text-align: center;
    margin: auto;
`

const ItemImage = styled(motion.img)`
  width: 50%;
`

const ArtifactWeaponInfoContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
`

const KeyValuePair = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.2rem 0.5rem;
`

const InfoKey = styled(motion.h2)`
    flex: 2;

`

const InfoValue = styled(motion.p)`
    flex: 8;
    padding-left: 0.1rem;
    font-size: 1.3rem;
    img{
        width: 1.4rem;
    }
    
`




export default ArtifactInfo;