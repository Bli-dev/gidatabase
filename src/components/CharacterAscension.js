//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataContainerStyles } from '../util';
import { flyUp, fadeInFastStagger } from './animations';
//CONVERTERS
import { titleCase, visionTextToImageConverter, stringToDisplay, materialsToImageConverter, rarityConversion } from '../util'
//UUID
import { v4 as uuidv4 } from 'uuid';

const CharacterAscension = () => {

    const { selectedItemData} = useSelector((state) => state.currentActiveData);

    return (
        <CharacterAscensionContainer key='CharacterAscension_key' variants={fadeInFastStagger} initial='initial' animate='final'>
            {Object.keys(selectedItemData).map(objectKey => (
                <CategoryContainer key={`${objectKey}_key`} variants={flyUp}>
                    <CategoryHeader>
                        <VisionContainer>
                            {objectKey !== 'traveler' && (<img src={visionTextToImageConverter(titleCase(objectKey))} alt="missing" />)}
                        </VisionContainer>
                        <h1>{titleCase(objectKey)}</h1>
                    </CategoryHeader>
                    <Line></Line>
                        {Object.keys(selectedItemData[objectKey]).map(subKey => (
                            <ItemData key={uuidv4()}>
                                <InfoContainer>
                                    <ImageContainer>
                                        <img src={materialsToImageConverter(selectedItemData[objectKey][subKey].id)} alt=""/>
                                    </ImageContainer>
                                    <h3>{stringToDisplay(selectedItemData[objectKey][subKey].name)}</h3>
                                    <RarityContainer>
                                        <h2>Rarity:</h2>
                                        <h3>{rarityConversion('rarity', selectedItemData[objectKey][subKey].rarity)}</h3>
                                    </RarityContainer>
                                </InfoContainer>
                                <SourcesContainer>
                                    <h2>Sources</h2>
                                    <div></div>
                                    <h3>{selectedItemData[objectKey][subKey].sources.join(', ')}</h3>
                                </SourcesContainer>
                           </ItemData> 
                        ))}
                </CategoryContainer>
            ))}
        </CharacterAscensionContainer>
    )
}

const CharacterAscensionContainer = styled(motion.div)`
    max-height: 90vh;
    padding: 2rem 0;
    overflow-y: scroll;
`
const CategoryContainer = styled(dataContainerStyles)`
    margin-bottom: 2rem;
    padding: 2rem;
`
const CategoryHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
const VisionContainer = styled.div`
    margin-right: 1rem;
`
const Line = styled.div`
    height: 2px;
        background: rgba(169, 169, 169, 0.5);
        width: 75%;
        margin: 0 auto 2rem auto;
`
const ItemData = styled.div`
    display: flex;
    padding: 1rem;
    box-shadow: 1px 1px 15px rgba(69, 69, 69, 0.5);
    margin: 1rem 0;
    border-radius: 10px;
    @media(max-width: 800px){
        flex-direction: column;
    }
    

`
const InfoContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 800px){
        width: auto;
    }
`
const ImageContainer = styled.div`
    max-width: 100px;
    img{
        width: 100%;
    }
`
const RarityContainer = styled.div`
display: flex;
align-items: center;
padding: 0.3rem;
    h2{ 
        font-size: 1.3rem;
        padding-right: 1rem;
    }
    img{
        width: 1.3rem;
    }
`
const SourcesContainer = styled.div`
    width: 80%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 800px){
        width: auto;
    }
    h2{
        text-align: center;
    }
    div{
        height: 2px;
        background: rgba(169, 169, 169, 1);
        width: 50%;
        margin: 0 auto 1rem auto;
    }
    h3{
        text-align: center;
    }
`
export default CharacterAscension;

/*SORTING LOGIC

const keysArray = [];
                Object.keys(selectedItemData[key]).map(subKey => keysArray.push(selectedItemData[key][subKey]));
                console.log(keysArray)
                return ''

                */