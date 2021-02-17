//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//CONVERSIONS
import { stringToDisplay, rarityConversion, dataContainerStyles } from '../util';
//ICON URL FROM API 
import { flowerOfLifeIconURL, entityItemIconURL } from '../api'
//STYLES AND MOTION
import styled  from 'styled-components';
import { motion } from 'framer-motion';

const ArtifactInfo = () => {

    const { selectedEntityName, selectedItemName, selectedItemData } = useSelector((state) => state.currentActiveData)
    
    return (
        <ArtifactWeaponInfoContainer>
            <SelectedArtifactWeaponContainer>
                <ImageContainer>
                    <ItemImage selectedEntityName={selectedEntityName} src={selectedEntityName === 'artifacts' ? flowerOfLifeIconURL(selectedEntityName, selectedItemName) :
                        entityItemIconURL(selectedEntityName, selectedItemName)} alt={`${stringToDisplay(selectedItemName)} image is missing`} />
                </ImageContainer>
                <ArtifactWeaponDataContainer>
                {Object.keys(selectedItemData).map(key => (
                    <KeyValuePair>
                        <InfoKey>{`${stringToDisplay(key).replace(/([A-Z]+)/g, " $1")}:`}</InfoKey>
                        <InfoValue>{rarityConversion(key, selectedItemData[key])}</InfoValue>
                    </KeyValuePair>))}
                </ArtifactWeaponDataContainer>
            </SelectedArtifactWeaponContainer>
        </ArtifactWeaponInfoContainer>
    )
}

const ArtifactWeaponInfoContainer = styled(motion.div)`
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`

const SelectedArtifactWeaponContainer = styled(dataContainerStyles)`
    display: flex;
    align-items: center;
    @media (max-width: 1000px){
        flex-direction: column;
    }
`

const ImageContainer = styled(motion.div)`
    width: 30%;
    text-align: center;
    @media (max-width: 800px){
        width: 70%;
    }
`

const ItemImage = styled.img`
    width: ${({ selectedEntityName }) => selectedEntityName == 'artifacts' ? '50%' : '90%'};
`

const ArtifactWeaponDataContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    @media (max-width: 1000px){
        flex-direction: column;
        width: auto;
    }
`

const KeyValuePair = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem;
`

const InfoKey = styled(motion.h2)`
    width: 200px;
    line-height: 1.7rem;
    margin-right: 0.5rem;
`

const InfoValue = styled(motion.p)`
    width: 100%;
    padding-left: 0.1rem;
    font-size: 1.3rem;
    line-height: 1.7rem;
    text-align: justify;
    img{
        width: 1.4rem;
    }
    
`




export default ArtifactInfo;