//REACT AND REDUX
import React from 'react';
import { useSelector } from 'react-redux';
//STYLES AND ANIMATION
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {dataContainerStyles} from '../util';
//CONVERTERS
import {titleCase, visionTextToImageConverter, stringToDisplay, materialsToImageConverter, rarityConversion} from '../util'

const CharacterAscension = () => {

    const { selectedItemData } = useSelector((state) => state.currentActiveData);

    return (
        <CharacterAscensionContainer>
            {Object.keys(selectedItemData).map(key => (
                <CategoryContainer>
                    <CategoryHeader>
                        <VisionContainer>
                            {key !== 'traveler' && (<img src={visionTextToImageConverter(titleCase(key))} alt="missing" />)}
                        </VisionContainer>
                        <h1>{titleCase(key)}</h1>
                    </CategoryHeader>
                    <Line></Line>
                        {Object.keys(selectedItemData[key]).map(subKey => (
                            <ItemData>
                                <InfoContainer>
                                    <ImageContainer>
                                        <img src={materialsToImageConverter(selectedItemData[key][subKey].id)} alt=""/>
                                    </ImageContainer>
                                    <h3>{stringToDisplay(selectedItemData[key][subKey].name)}</h3>
                                    <RarityContainer>
                                        <h2>Rarity:</h2>
                                        <h3>{rarityConversion('rarity', selectedItemData[key][subKey].rarity)}</h3>
                                    </RarityContainer>
                                </InfoContainer>
                                <SourcesContainer>
                                    <h2>Sources</h2>
                                    <div></div>
                                    <h3>{selectedItemData[key][subKey].sources.join(', ')}</h3>
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
    padding: 5rem 0;
    overflow-y: scroll;
`
const CategoryContainer = styled(dataContainerStyles)`
    margin-bottom: 2rem;
    padding: 2rem;
    backdrop-filter: blur(15px);
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

`
const InfoContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
        text-align: justify;
        text-indent: 2rem;
    }
`
export default CharacterAscension;

/*SORTING LOGIC

const keysArray = [];
                Object.keys(selectedItemData[key]).map(subKey => keysArray.push(selectedItemData[key][subKey]));
                console.log(keysArray)
                return ''

                */